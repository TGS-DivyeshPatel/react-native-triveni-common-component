import type { FC } from 'react';
import { Svg, Path } from 'react-native-svg';
import { getCustomThemeConfig } from '../Config';

interface CustomProps {
  color?: string;
  width?: number;
  height?: number;
}

export const DropdownIcon: FC<CustomProps> = ({
  width = 25,
  height = 25,
  color,
}) => {
  const { colors } = getCustomThemeConfig();
  const iconColor = color || colors.black;
  return (
    <Svg
      width={`${width}pt`}
      height={`${height}pt`}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M11.1955 15.242L6.24104 10.2875C6.17287 10.2194 6.11566 10.1399 6.0694 10.0493C6.02313 9.9589 6 9.86206 6 9.75873C6 9.55178 6.06847 9.37366 6.20541 9.22438C6.34235 9.07479 6.52294 9 6.74717 9H17.2528C17.4771 9 17.6576 9.07634 17.7946 9.22901C17.9315 9.38168 18 9.5598 18 9.76336C18 9.81425 17.9193 9.98928 17.758 10.2885L12.8041 15.242C12.6903 15.3561 12.5674 15.444 12.4353 15.5057C12.3033 15.5674 12.1582 15.5982 12 15.5982C11.8418 15.5982 11.6967 15.5674 11.5647 15.5057C11.4326 15.444 11.3096 15.3561 11.1955 15.242Z"
        fill={iconColor}
      />
    </Svg>
  );
};
