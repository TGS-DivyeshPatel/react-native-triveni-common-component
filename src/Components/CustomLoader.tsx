import {
  View,
  ActivityIndicator,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { getCustomThemeConfig } from '../Config';

interface LoaderProps {
  backgroundViewStyle?: StyleProp<ViewStyle>;
  loaderViewStyle?: StyleProp<ViewStyle>;
  color?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  size?: 'large' | 'small' | number;
}

const getStyles = () =>
  StyleSheet.create({
    loader: {
      flex: 1,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    loaderBg: {
      height: 100,
      width: 100,
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      justifyContent: 'center',
      position: 'absolute',
      alignItems: 'center',
      borderRadius: 20,
    },
  });

const CustomLoader: React.FC<LoaderProps> = (props) => {
  const {
    backgroundViewStyle,
    loaderViewStyle,
    color = 'primary',
    size = 'large',
  } = props;
  const { colors } = getCustomThemeConfig();
  const styles = getStyles();

  return (
    <View style={[styles.loader, backgroundViewStyle]}>
      <View style={[styles.loaderBg, loaderViewStyle]}>
        <ActivityIndicator color={colors[color]} size={size} />
      </View>
    </View>
  );
};
export default CustomLoader;
export type { LoaderProps };
