import React from 'react';
import { View, StyleSheet, type ViewStyle, type TextStyle } from 'react-native';
import { getCustomThemeConfig } from '../Config';
import CustomText from './CustomText';
import CustomImage from './CustomImage';

interface CustomAvatarProps {
  name?: string;
  uri?: string;
  size?: number;
  showStatus?: boolean;
  isOnline?: boolean;
  backgroundColor?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  textColor?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const CustomAvatar: React.FC<CustomAvatarProps> = ({
  name,
  uri,
  size = 60,
  showStatus = false,
  isOnline = false,
  backgroundColor = 'gray',
  textColor = 'white',
  containerStyle,
  textStyle,
}) => {
  const { colors } = getCustomThemeConfig();
  const radius = size / 2;

  const renderInitials = () => {
    if (!name) return null;
    const initials = name
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase();
    return (
      <CustomText
        size="xl4"
        font="Medium"
        textColor={textColor}
        style={[styles.text, textStyle]}
      >
        {initials}
      </CustomText>
    );
  };

  return (
    <View style={[{ width: size, height: size }, containerStyle]}>
      <View
        style={[
          {
            width: size,
            height: size,
            borderRadius: radius,
            overflow: 'hidden',
            backgroundColor: colors[backgroundColor],
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}
      >
        {uri ? (
          <CustomImage
            source={{ uri }}
            style={{ width: size, height: size, borderRadius: radius }}
          />
        ) : (
          renderInitials()
        )}
      </View>
      {showStatus && (
        <View
          style={[
            styles.statusDot,
            {
              backgroundColor: isOnline ? colors.primary : colors.gray,
              width: size * 0.18,
              height: size * 0.18,
              borderRadius: (size * 0.18) / 2,
              right: 10,
              bottom: 8,
            },
          ]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  statusDot: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#fff',
  },
});

export default CustomAvatar;
export type { CustomAvatarProps };
