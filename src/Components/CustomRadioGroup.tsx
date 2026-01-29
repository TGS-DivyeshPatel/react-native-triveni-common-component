import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import CustomText from './CustomText';
import { getCustomThemeConfig } from '../Config';

export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
  selectedIcon?: React.ReactNode;
  unselectedIcon?: React.ReactNode;
}

interface BaseProps {
  options: RadioOption[];
  containerStyle?: StyleProp<ViewStyle>;
  optionStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  circleStyle?: StyleProp<ViewStyle>;
}

interface SingleSelectProps extends BaseProps {
  type?: 'single';
  value: string;
  onChange: (value: string) => void;
}

interface MultiSelectProps extends BaseProps {
  type: 'multiple';
  value: string[];
  onChange: (value: string[]) => void;
}

type CustomRadioGroupProps = SingleSelectProps | MultiSelectProps;

const CustomRadioGroup: React.FC<CustomRadioGroupProps> = ({
  options,
  value,
  onChange,
  type = 'single',
  containerStyle,
  optionStyle,
  labelStyle,
  circleStyle,
}) => {
  const { colors } = getCustomThemeConfig();

  const isSelected = (val: string): boolean => {
    return type === 'multiple' ? value.includes(val) : value === val;
  };

  const handleChange = (val: string) => {
    if (type === 'multiple') {
      const multipleValue = value as string[]; // 👈 narrow value to string[]
      const current = multipleValue.includes(val)
        ? multipleValue.filter((v) => v !== val)
        : [...multipleValue, val];

      (onChange as (val: string[]) => void)(current);
    } else {
      (onChange as (val: string) => void)(val);
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {options.map((option) => {
        const selected = isSelected(option.value);
        const disabled = option.disabled;

        return (
          <TouchableOpacity
            key={option.value}
            style={[styles.option, optionStyle, disabled && styles.disabled]}
            onPress={() => !disabled && handleChange(option.value)}
            disabled={disabled}
          >
            {selected
              ? option.selectedIcon || (
                <View
                  style={[
                    styles.circle,
                    { backgroundColor: colors.primary },
                    circleStyle,
                  ]}
                />
              )
              : option.unselectedIcon || (
                <View
                  style={[
                    styles.circle,
                    {
                      borderColor: colors.primary,
                      backgroundColor: 'transparent',
                    },
                    circleStyle,
                  ]}
                />
              )}
            <CustomText
              style={[{ marginLeft: 8 }, labelStyle]}
              font="Medium"
              size="xl2"
              textColor={disabled ? 'gray' : selected ? 'primary' : 'black'}
            >
              {option.label}
            </CustomText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default CustomRadioGroup;
export type { CustomRadioGroupProps };
