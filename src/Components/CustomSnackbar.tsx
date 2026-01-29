import React, { useEffect, useRef } from 'react';
import {
  Animated,
  StyleSheet,
  type ViewStyle,
  type StyleProp,
  type TextStyle,
} from 'react-native';
import { getCustomThemeConfig } from '../Config';
import CustomText from './CustomText';

interface CustomSnackbarProps {
  visible: boolean;
  message: string;
  duration?: number;
  bgColor?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  textColor?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  size?: keyof ReturnType<typeof getCustomThemeConfig>['fontSizes'];
  font?: keyof ReturnType<typeof getCustomThemeConfig>['fontFamily'];
  onHide?: () => void;
}

const CustomSnackbar: React.FC<CustomSnackbarProps> = ({
  visible,
  message,
  duration = 3000,
  bgColor = 'black',
  textColor = 'white',
  style,
  textStyle,
  size = 'xl',
  font = 'Bold',
  onHide,
}) => {
  const { colors } = getCustomThemeConfig();
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: 100,
          duration: 250,
          useNativeDriver: true,
        }).start(() => {
          onHide?.();
        });
      }, duration);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, [visible, duration, onHide, slideAnim]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: colors[bgColor],
          transform: [{ translateY: slideAnim }],
        },
        style,
      ]}
    >
      <CustomText
        textColor={textColor}
        size={size}
        font={font}
        style={textStyle}
      >
        {message}
      </CustomText>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    left: 16,
    right: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
});

export default CustomSnackbar;
export type { CustomSnackbarProps };
