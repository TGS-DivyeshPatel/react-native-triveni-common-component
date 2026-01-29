import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Switch,
  Platform,
  type ViewStyle,
  type StyleProp,
} from 'react-native';
import { getCustomThemeConfig } from '../Config';
import CustomText from './CustomText';

interface CustomToggleSwitchProps {
  value?: boolean;
  onValueChange?: (val: boolean) => void;
  style?: StyleProp<ViewStyle>;
  activeColor?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  inactiveColor?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  disabled?: boolean;
  label?: string;
  labelPosition?: 'left' | 'right';
  thumbColorOn?: string;
  thumbColorOff?: string;
}

const CustomToggleSwitch: React.FC<CustomToggleSwitchProps> = ({
  value = false,
  onValueChange,
  style,
  activeColor = 'primary',
  inactiveColor = 'gray',
  disabled = false,
  label,
  labelPosition = 'left',
  thumbColorOn,
  thumbColorOff,
}) => {
  const { colors } = getCustomThemeConfig();
  const [internalValue, setInternalValue] = useState(value);

  const handleToggle = (val: boolean) => {
    if (disabled) return;
    setInternalValue(val);
    onValueChange?.(val);
  };

  const renderLabel = () =>
    label ? (
      <CustomText
        size="base"
        font="Regular"
        textColor={disabled ? 'disable' : 'black'}
        style={{ marginHorizontal: 8 }}
      >
        {label}
      </CustomText>
    ) : null;

  const thumbColor = disabled
    ? colors.disable
    : internalValue
      ? (thumbColorOn ?? colors.white)
      : (thumbColorOff ?? colors.white);

  return (
    <View style={[styles.container, style]}>
      {label && labelPosition === 'left' && renderLabel()}
      <Switch
        value={internalValue}
        onValueChange={handleToggle}
        disabled={disabled}
        thumbColor={thumbColor}
        trackColor={{
          true: colors[activeColor],
          false: Platform.OS === 'android' ? colors[inactiveColor] : undefined,
        }}
        ios_backgroundColor={
          Platform.OS === 'ios' ? colors[inactiveColor] : undefined
        }
      />
      {label && labelPosition === 'right' && renderLabel()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomToggleSwitch;
export type { CustomToggleSwitchProps };
