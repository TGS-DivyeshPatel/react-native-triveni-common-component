import React from 'react';
import { Text, type TextProps, type TextStyle } from 'react-native';
import { getCustomThemeConfig } from '../Config';

interface CustomTextProps extends TextProps {
  size?: keyof ReturnType<typeof getCustomThemeConfig>['fontSizes'];
  font?: keyof ReturnType<typeof getCustomThemeConfig>['fontFamily'];
  textColor?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  style?: TextProps['style'];
}

const CustomText: React.FC<CustomTextProps> = ({
  size = 'base',
  font = 'Regular',
  textColor = 'black',
  style,
  ...props
}) => {
  const config = getCustomThemeConfig();
  return (
    <Text
      style={[
        {
          fontSize: config.fontSizes[size],
          fontFamily: config.fontFamily[font],
          color: config.colors[textColor],
        } as TextStyle,
        style,
      ]}
      {...props}
    >
      {props.children}
    </Text>
  );
};

export default CustomText;
export type { CustomTextProps };
