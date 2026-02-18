import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import { getCustomThemeConfig } from '../Config';

import type {
  ImageProps,
  ViewStyle,
} from 'react-native';

interface CustomImageProps extends ImageProps {
  containerStyle?: ViewStyle;
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
});

const CustomImage: React.FC<CustomImageProps> = ({
  source,
  resizeMode,
  containerStyle,
  style,
  ...props
}) => {
  const { colors } = getCustomThemeConfig();
  const [loading, setLoading] = useState(true);

  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        source={source}
        resizeMode={resizeMode || 'cover'}
        style={[styles.image, style]}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        onError={() => setLoading(false)}
        {...props}
      />
      {loading && (
        <ActivityIndicator size="small" color={colors.gray} />
      )}
    </View>
  );
};

export default CustomImage;
export type { CustomImageProps };
