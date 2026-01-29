import React, { type ReactNode } from 'react';
import {
  StyleSheet,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';
import CustomText, { type CustomTextProps } from './CustomText';

interface TextWithImageProps extends CustomTextProps {
  renderLeftView?: ReactNode;
  renderRightView?: ReactNode;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const getStyles = () =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 10,
    },
    titleTxt: {
      flex: 1,
    },
  });

const TextWithImage: React.FC<TextWithImageProps> = ({
  renderLeftView,
  renderRightView,
  title,
  titleStyle,
  containerStyle,
  ...props
}) => {
  const styles = getStyles();
  return (
    <View style={[styles.container, containerStyle]}>
      {renderLeftView && renderLeftView}
      <CustomText
        numberOfLines={1}
        style={[styles.titleTxt, titleStyle]}
        {...props}
      >
        {title}
      </CustomText>
      {renderRightView && renderRightView}
    </View>
  );
};

export default TextWithImage;
export type { TextWithImageProps };
