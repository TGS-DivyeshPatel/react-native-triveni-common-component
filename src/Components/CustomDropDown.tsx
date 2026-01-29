import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import { getCustomThemeConfig } from '../Config';
import CustomText from './CustomText';
import { Dropdown } from 'react-native-element-dropdown';
import { DropdownIcon } from '../icons/DropdownIcon';

/**
 * Props for CustomDropDown component
 */
interface CustomDropDownProps {
  /**
   * Optional label/title displayed above the dropdown.
   */
  title?: string;

  /**
   * Placeholder text shown when no item is selected.
   */
  placeholder?: string;
  /**
   * Enables floating label behavior (label floats above input when focused or filled)
   */
  isFloating?: boolean;

  /**
   * List of items to show in the dropdown.
   *
   * Each item should have a `label` (displayed text) and a `value` (associated value).
   */
  data: { label: string; value: string | number }[];

  /**
   * Currently selected item.
   *
   * Should be an object with `label` and `value` matching one of the `data` items.
   */
  value?: { label: string; value: string | number } | null;

  /**
   * Callback triggered when a new item is selected from the dropdown.
   *
   * Receives the selected item as a parameter.
   */
  onChange?: (item: { label: string; value: string | number }) => void;

  /**
   * Optional error message displayed below the dropdown.
   *
   * If provided, the dropdown border and icon will show an error color.
   */
  errorText?: string;

  /**
   * Optional icon to display next to the error message.
   */
  renderErrorIcon?: React.ReactNode;

  /**
   * Enables search functionality within the dropdown.
   *
   * Set to `true` to allow users to search through the dropdown items.
   * @default false
   */
  search?: boolean;

  /**
   * Custom placeholder text for the search input.
   */
  searchPlaceholder?: string;

  /**
   * Disables the dropdown if set to `true`.
   *
   * Useful for read-only or loading states.
   * @default false
   */
  disable?: boolean;

  /**
   * Custom styles for the title text above the dropdown.
   */
  titleTxtStyle?: StyleProp<TextStyle>;

  /**
   * Custom styles for the text displayed when an item is selected.
   */
  selectedTextStyle?: StyleProp<TextStyle>;

  /**
   * Custom styles for the overall container view of the dropdown component.
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Custom styles for the dropdown itself (e.g., border, padding).
   */
  style?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;

  /**
   * Determines the position of the dropdown menu.
   *
   * - 'auto' (default): Automatically decides the best position.
   * - 'top': Renders the dropdown above the input field.
   * - 'bottom': Renders the dropdown below the input field.
   */
  dropdownPosition?: 'auto' | 'top' | 'bottom';
  mandatory?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  renderItem?: (
    item: { label: string; value: string | number },
    selected?: boolean
  ) => React.ReactElement | null;
}

function getStyles({
  colors,
  fontFamily,
  fontSizes,
}: ReturnType<typeof getCustomThemeConfig>) {
  return StyleSheet.create({
    containerStyle: {
      alignSelf: 'stretch',
      marginVertical: 4,
    },
    titleTxtStyle: {
      marginBottom: 16,
    },
    dropdown: {
      borderWidth: 1,
      borderRadius: 20,
      paddingLeft: 24,
      paddingRight: 12,
      paddingVertical: 14,
      color: colors.black,
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
    placeholderStyle: {
      fontFamily: fontFamily.Regular,
      fontSize: fontSizes.md,
      color: colors.disable,
    },
    selectedTextStyle: {
      fontFamily: fontFamily.Regular,
      fontSize: fontSizes.md,
      color: colors.black,
    },
    inputSearchStyle: {
      fontFamily: fontFamily.Regular,
      fontSize: fontSizes.md,
      color: colors.black,
    },
    errorStyle: {
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
    itemTextStyle: {
      color: colors.black,
    },
    mandatoryStar: {
      color: colors.error,
      marginLeft: 4,
    },
  });
}

const CustomDropDown: React.FC<CustomDropDownProps> = (props) => {
  const {
    title,
    placeholder,
    isFloating,
    data,
    value,
    errorText,
    renderErrorIcon,
    onChange,
    search = false,
    searchPlaceholder,
    disable = false,
    titleTxtStyle,
    selectedTextStyle,
    containerStyle,
    style,
    dropdownPosition = 'auto',
    mandatory = false,
    onFocus,
    onBlur,
    placeholderStyle,
    renderItem,
  } = props;
  const { colors, fontFamily, fontSizes } = getCustomThemeConfig();
  const styles = getStyles({ colors, fontFamily, fontSizes });

  // State to track if the dropdown is focused (for styling)
  const [focused, setFocused] = useState(false);

  const shouldFloat = isFloating && (focused || value);

  return (
    <View style={[styles.containerStyle, containerStyle]}>
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
      <Dropdown
        style={[
          styles.dropdown,
          {
            borderColor: errorText
              ? colors.error
              : focused
                ? colors.primary
                : colors.disable,
          },
          style,
        ]}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={styles.itemTextStyle}
        data={data}
        maxHeight={300}
        search={search}
        labelField="label"
        valueField="value"
        dropdownPosition={dropdownPosition}
        placeholder={
          isFloating
            ? !shouldFloat
              ? `${title}${mandatory ? ' *' : ''}`
              : ''
            : placeholder
        }
        searchPlaceholder={searchPlaceholder}
        value={value}
        onChange={(item) => {
          onChange?.(item);
        }}
        renderRightIcon={() => (
          <DropdownIcon color={errorText ? colors.error : colors.gray} />
        )}
        onFocus={() => {
          onFocus?.();
          setFocused(true);
        }}
        onBlur={() => {
          onBlur?.();
          setFocused(false);
        }}
        disable={disable}
        renderItem={renderItem}
      />
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

export default CustomDropDown;
export type { CustomDropDownProps };
