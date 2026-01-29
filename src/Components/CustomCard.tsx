import React from 'react';
import {
  View,
  type ViewStyle,
  type StyleProp,
  type ViewProps,
} from 'react-native';
import { getCustomThemeConfig } from '../Config';

interface CustomCardProps extends ViewProps {
  children: React.ReactNode;
  elevation?: number;
  padding?: 'none' | 'small' | 'medium' | 'large';
  radius?: 'none' | 'small' | 'medium' | 'large';
  bgColor?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  style?: StyleProp<ViewStyle>;
}

const CustomCard: React.FC<CustomCardProps> = ({
  children,
  elevation = 3,
  padding = 'medium',
  radius = 'medium',
  bgColor = 'white',
  style,
  ...props
}) => {
  const { colors } = getCustomThemeConfig();

  const paddingMap = {
    none: 0,
    small: 8,
    medium: 16,
    large: 24,
  };

  const radiusMap = {
    none: 0,
    small: 6,
    medium: 12,
    large: 20,
  };

  const cardStyle: StyleProp<ViewStyle> = {
    backgroundColor: colors[bgColor],
    padding: paddingMap[padding],
    borderRadius: radiusMap[radius],
    elevation,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: elevation },
    shadowOpacity: 0.1,
    shadowRadius: elevation * 1.2,
  };

  return (
    <View style={[cardStyle, style]} {...props}>
      {children}
    </View>
  );
};

export default CustomCard;
export type { CustomCardProps };
