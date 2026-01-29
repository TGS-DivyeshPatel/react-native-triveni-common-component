import React from 'react';
import {
  View,
  StyleSheet,
  type ViewStyle,
  type StyleProp,
  type TextStyle,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { getCustomThemeConfig } from '../Config';
import CustomText from './CustomText';

interface CustomSliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;

  // Customizable content
  label?: string;
  showValue?: boolean;

  // Style props
  containerStyle?: StyleProp<ViewStyle>;
  sliderStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  valueStyle?: StyleProp<TextStyle>;

  // Colors
  trackColor?: string;
  trackSecondaryColor?: string;
  thumbColor?: string;

  // Optionally render custom label/value
  renderLabel?: () => React.ReactNode;
  renderValue?: (value: number) => React.ReactNode;

  // Additional slider props (extensibility)
  sliderProps?: Partial<React.ComponentProps<typeof Slider>>;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  showValue = true,

  containerStyle,
  sliderStyle,
  labelStyle,
  valueStyle,

  trackColor,
  trackSecondaryColor,
  thumbColor,

  renderLabel,
  renderValue,
  sliderProps = {},
}) => {
  const { colors } = getCustomThemeConfig();

  return (
    <View style={[styles.container, containerStyle]}>
      {renderLabel
        ? renderLabel()
        : label && (
          <CustomText size="md" font="Medium" style={labelStyle}>
            {label}
          </CustomText>
        )}

      <Slider
        style={[styles.slider, sliderStyle]}
        minimumValue={min}
        maximumValue={max}
        step={step}
        value={value}
        onValueChange={onChange}
        minimumTrackTintColor={trackColor || colors.primary}
        maximumTrackTintColor={trackSecondaryColor || colors.gray}
        thumbTintColor={thumbColor || colors.primary}
        {...(({ ref, ...rest }) => rest)(sliderProps)}
      />

      {showValue &&
        (renderValue ? (
          renderValue(value)
        ) : (
          <CustomText size="base" font="Regular" style={valueStyle}>
            {value}
          </CustomText>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
});

export default CustomSlider;
export type { CustomSliderProps };
