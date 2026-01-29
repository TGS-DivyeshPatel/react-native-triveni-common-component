import React from 'react';
import { View, type StyleProp, type ViewStyle } from 'react-native';
import { getCustomThemeConfig } from '../Config';

const theme = getCustomThemeConfig();
const { colors } = theme;
type ColorKeys = keyof typeof colors;

interface CustomDividerProps {
  thickness?: number;
  color?: ColorKeys;
  style?: StyleProp<ViewStyle>;
  marginVertical?: number;
  marginHorizontal?: number;
}

const CustomDivider: React.FC<CustomDividerProps> = ({
  thickness = 1,
  color = 'gray',
  style,
  marginVertical = 8,
  marginHorizontal = 0,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors[color],
          height: thickness,
          width: '100%',
          marginVertical,
          marginHorizontal,
        },
        style,
      ]}
    />
  );
};

export default CustomDivider;
export type { CustomDividerProps };
