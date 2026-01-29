import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  type StyleProp,
  type TextStyle,
  type TouchableOpacityProps,
  type ViewStyle,
} from 'react-native';
import { useHasNotch } from '../customHooks';
import { getCustomThemeConfig } from '../Config';
import CustomText from './CustomText';

interface CustomButtonProps extends TouchableOpacityProps {
  title?: string;
  variant?: 'default' | 'border'; // Variant prop for button style
  style?: StyleProp<ViewStyle>; // Optional external styles
  btnTitleStyle?: StyleProp<TextStyle>; // Optional external title text styles
  btnBgColor?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  icon?: React.ReactNode;
  isBottomMargin?: boolean;
  radius?: 'normal' | 'round' | 'none';
  titleTextSize?: keyof ReturnType<typeof getCustomThemeConfig>['fontSizes'];
  titleFontFamily?: keyof ReturnType<typeof getCustomThemeConfig>['fontFamily'];
}

const getStyles = ({ colors }: ReturnType<typeof getCustomThemeConfig>) =>
  StyleSheet.create({
    fixButtonStyle: {
      paddingVertical: 18,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'stretch',
    },
    borderBtnViewStyle: {
      backgroundColor: colors.white,
      borderWidth: 2,
      borderColor: colors.primary,
    },
    disabledStyle: {
      backgroundColor: colors.disable,
      borderWidth: 0,
    },
    fixTxtStyle: {
      color: colors.white,
      textTransform: 'uppercase',
    },
    textBorderStyle: {
      color: colors.primary,
    },
    disabledTextStyle: {
      color: colors.gray,
    },
    leftIcon: {
      marginRight: 18,
    },
    round: {
      borderRadius: 50,
    },
    normal: {
      borderRadius: 10,
    },
    none: {
      borderRadius: 0,
    },
    hasNotch: {
      marginBottom: 24,
    },
  });

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant = 'default',
  btnBgColor = 'primary',
  titleTextSize = 'md',
  titleFontFamily = 'SemiBold',
  disabled,
  style,
  btnTitleStyle,
  icon,
  radius = 'round',
  isBottomMargin = false,
  ...props
}) => {
  const { colors, fontFamily, fontSizes } = getCustomThemeConfig();
  const styles = getStyles({ colors, fontFamily, fontSizes });
  const hasNotch = useHasNotch();

  return (
    <TouchableOpacity
      style={[
        styles[radius],
        styles.fixButtonStyle,
        variant === 'border' && styles.borderBtnViewStyle,
        disabled
          ? styles.disabledStyle
          : variant !== 'border'
            ? { backgroundColor: colors[btnBgColor] }
            : {},
        isBottomMargin && !hasNotch && styles.hasNotch,
        style,
      ]}
      disabled={disabled}
      {...props}
    >
      {icon && <View style={styles.leftIcon}>{icon}</View>}
      {title && (
        <CustomText
          size={titleTextSize}
          font={titleFontFamily}
          style={[
            styles.fixTxtStyle,
            disabled && styles.disabledTextStyle,
            btnTitleStyle,
            btnBgColor === 'white' || variant === 'border'
              ? styles.textBorderStyle
              : {},
          ]}
        >
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
export type { CustomButtonProps };
