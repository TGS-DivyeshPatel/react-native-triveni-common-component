
import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { getCustomThemeConfig } from '../Config';
import FastImage, { type FastImageProps } from 'react-native-fast-image';

const getStyles = () =>
  StyleSheet.create({
    imageView: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

const CustomImage: React.FC<FastImageProps> = (props) => {
  const { resizeMode, source, style } = props;
  const { colors } = getCustomThemeConfig();
  const styles = getStyles();
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
  };

  return (
    <FastImage
      source={source}
      resizeMode={resizeMode || 'cover'}
      style={[styles.imageView, style]}
      onLoadStart={handleLoadStart}
      onLoadEnd={handleLoadEnd}
      onError={handleLoadEnd}
      {...props}
    >
      {isLoading && <ActivityIndicator size="small" color={colors.gray} />}
    </FastImage>
  );
};

export default CustomImage;