import React, { useState } from 'react';
import {
  TouchableOpacity,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { CheckBox } from '../icons/CheckBox';
import { UncheckBox } from '../icons/UncheckBox';
import { getCustomThemeConfig } from '../Config';
import CustomText from './CustomText';

interface CustomCheckboxProps {
  defaultValue?: boolean;
  onValueChange?: (value: boolean) => void;
  onTitlePress?: () => void;
  style?: StyleProp<ViewStyle>;
  checkColor?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  uncheckColor?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  size?: number;
  disabled?: boolean;
  title?: string;
  titleStyle?: TextStyle;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  defaultValue = false,
  onValueChange,
  onTitlePress,
  style,
  checkColor = 'primary',
  uncheckColor = 'primary',
  size = 25,
  disabled = false,
  title,
  titleStyle,
}) => {
  const [checked, setChecked] = useState(defaultValue);
  const { colors } = getCustomThemeConfig();

  const toggleCheckbox = () => {
    if (disabled) return;
    const newValue = !checked;
    setChecked(newValue);
    onValueChange?.(newValue);
  };

  const checkboxColor = disabled
    ? colors.disable
    : checked
      ? colors[checkColor]
      : colors[uncheckColor];

  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      <TouchableOpacity onPress={toggleCheckbox} disabled={disabled}>
        {checked ? (
          <CheckBox color={checkboxColor} height={size} width={size} />
        ) : (
          <UncheckBox color={checkboxColor} height={size} width={size} />
        )}
      </TouchableOpacity>

      {title && (
        <TouchableOpacity
          onPress={onTitlePress}
          disabled={disabled || !onTitlePress}
          style={{ marginLeft: 10 }}
        >
          <CustomText
            size="base"
            font="SemiBold"
            textColor={disabled ? 'disable' : 'black'}
            style={titleStyle}
          >
            {title}
          </CustomText>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomCheckbox;
export type { CustomCheckboxProps };
