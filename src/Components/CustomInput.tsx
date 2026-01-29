import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  type TextInputProps,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { getCustomThemeConfig } from '../Config';
import CustomText from './CustomText';

interface CustomTextInputProps extends TextInputProps {
  title?: string;
  isFloating?: boolean;
  titleTxtStyle?: StyleProp<TextStyle>;
  inputContainer?: StyleProp<ViewStyle>;
  mainContainer?: StyleProp<ViewStyle>;
  renderLeftIcon?: React.ReactNode;
  renderRightIcon?: React.ReactNode;
  renderErrorIcon?: React.ReactNode;
  errorText?: string;
  mandatory?: boolean;
}

const getStyles = ({
  colors,
  fontFamily,
  fontSizes,
}: ReturnType<typeof getCustomThemeConfig>) =>
  StyleSheet.create({
    containerStyle: {
      alignSelf: 'stretch',
      marginVertical: 12,
    },
    titleTxtStyle: {
      marginBottom: 16,
    },
    floatingLabel: {
      position: 'absolute',
      top: -10,
      left: 20,
      backgroundColor: colors.white,
      paddingHorizontal: 4,
      fontSize: fontSizes.xs,
      fontFamily: fontFamily.Medium,
      color: colors.primary,
      zIndex: 1,
    },
    inputContainer: {
      flexDirection: 'row',
      paddingHorizontal: 24,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderColor: colors.primary,
      borderWidth: 1,
      borderRadius: 20,
      backgroundColor: colors.white,
    },
    inputStyle: {
      fontFamily: fontFamily.Regular,
      fontSize: fontSizes.md,
      flex: 1,
      paddingVertical: 14,
      color: colors.black,
    },
    leftIconStyle: {
      paddingRight: 10,
    },
    rightIconStyle: {
      paddingLeft: 10,
    },
    errorStyle: {
      flex: 1,
      color: colors.error,
    },
    iconStyle: {
      marginRight: 10,
    },
    errorContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    mandatoryStar: {
      color: colors.error,
      marginLeft: 4,
    },
  });

const CustomInput: React.FC<CustomTextInputProps> = (props) => {
  const {
    title,
    isFloating,
    inputContainer,
    renderLeftIcon,
    renderRightIcon,
    errorText,
    mainContainer,
    titleTxtStyle,
    renderErrorIcon,
    value,
    mandatory = false,
    ...rest
  } = props;

  const { colors, fontFamily, fontSizes } = getCustomThemeConfig();
  const styles = getStyles({ colors, fontFamily, fontSizes });
  const [focused, setFocused] = useState(false);

  const shouldFloat = isFloating && (focused || !!value);

  return (
    <View style={[styles.containerStyle, mainContainer]}>
      {title && !isFloating && (
        <CustomText
          size="sm"
          style={[
            styles.titleTxtStyle,
            errorText && {
              color: colors.error,
            },
            titleTxtStyle,
          ]}
        >
          {title}
          {mandatory && (
            <CustomText size="sm" style={styles.mandatoryStar}>
              *
            </CustomText>
          )}
        </CustomText>
      )}

      {title && isFloating && shouldFloat && (
        <CustomText
          style={[
            styles.floatingLabel,
            errorText && {
              color: colors.error,
            },
            titleTxtStyle,
          ]}
        >
          {title}
          {mandatory && (
            <CustomText size="sm" style={styles.mandatoryStar}>
              *
            </CustomText>
          )}
        </CustomText>
      )}

      <View
        style={[
          styles.inputContainer,
          {
            borderColor: errorText
              ? colors.error
              : focused
                ? colors.primary
                : colors.gray,
          },
          inputContainer,
        ]}
      >
        {renderLeftIcon && (
          <View style={styles.leftIconStyle}>{renderLeftIcon}</View>
        )}

        <TextInput
          {...rest}
          value={value}
          style={[
            styles.inputStyle,
            { color: errorText ? colors.error : colors.black },
            props.style,
          ]}
          placeholderTextColor={colors.disable}
          placeholder={
            props.placeholder
              ? props.placeholder
              : isFloating
                ? !shouldFloat
                  ? `${title}${mandatory ? ' *' : ''}`
                  : ''
                : ''
          }
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {renderRightIcon && (
          <View style={styles.rightIconStyle}>{renderRightIcon}</View>
        )}
      </View>

      {errorText && (
        <View style={styles.errorContainer}>
          {renderErrorIcon && (
            <View style={styles.iconStyle}>{renderErrorIcon}</View>
          )}
          <CustomText size="xs" font="Regular" style={styles.errorStyle}>
            {errorText}
          </CustomText>
        </View>
      )}
    </View>
  );
};

export default CustomInput;
export type { CustomTextInputProps };
