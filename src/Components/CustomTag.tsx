import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import CustomText from './CustomText';
import { getCustomThemeConfig } from '../Config';

interface CustomTagProps {
  title?: string;
  height?: number;
  width?: number;
  tagBackgroundColor?: string;
  tagViewStyle?: StyleProp<ViewStyle>;
  fontFamily?: keyof ReturnType<typeof getCustomThemeConfig>['fontFamily'];
  fontSize?: keyof ReturnType<typeof getCustomThemeConfig>['fontSizes'];
  textColor?: string;
}

const getStyles = ({ colors }: ReturnType<typeof getCustomThemeConfig>) =>
  StyleSheet.create({
    container: {
      paddingVertical: 10,
      backgroundColor: colors.primary,
      borderRadius: 100,
    },
  });

const CustomTag: React.FC<CustomTagProps> = (props) => {
  const { title, width = 20, height = 10, tagBackgroundColor } = props;
  const { colors, fontFamily, fontSizes } = getCustomThemeConfig();
  const styles = getStyles({ colors, fontFamily, fontSizes });
  return (
    <View
      style={[
        styles.container,
        {
          paddingVertical: height,
          paddingHorizontal: width,
          backgroundColor: tagBackgroundColor,
        },
        props.tagViewStyle,
      ]}
    >
      <CustomText
        font={props.fontFamily}
        size={props.fontSize}
        style={{
          color: props.textColor,
        }}
        numberOfLines={1}
      >
        {title}
      </CustomText>
    </View>
  );
};

export default CustomTag;
export type { CustomTagProps };
