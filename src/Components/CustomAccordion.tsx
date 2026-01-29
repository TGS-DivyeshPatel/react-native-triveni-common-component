import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
} from 'react-native';
import { getCustomThemeConfig } from '../Config';
import CustomText from './CustomText';
import { DownArrowIcon } from '../icons/DownArrowIcon';
import { UpArrowIcon } from '../icons/UpArrowIcon';

interface CustomAccordionProps {
  title: string;
  children: React.ReactNode;
  initiallyOpen?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  textColor?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  expandedIcon?: React.ReactNode;
  collapsedIcon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  title,
  children,
  initiallyOpen = false,
  containerStyle,
  titleStyle,
  contentStyle,
  textColor = 'black',
  expandedIcon,
  collapsedIcon,
  iconPosition = 'right',
}) => {
  const [open, setOpen] = useState(initiallyOpen);
  const animation = useRef(new Animated.Value(initiallyOpen ? 1 : 0)).current;

  useEffect(() => {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental?.(true);
    }
  }, []);

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpen((prev) => !prev);
    Animated.timing(animation, {
      toValue: open ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const renderIcon = () => {
    if (open) return expandedIcon ?? <UpArrowIcon />;
    return collapsedIcon ?? <DownArrowIcon />;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={toggleAccordion} style={styles.row}>
        {iconPosition === 'left' && (
          <View style={styles.icon}>{renderIcon()}</View>
        )}
        <CustomText
          size="xl"
          font="Bold"
          textColor={textColor}
          style={[styles.title, titleStyle]}
        >
          {title}
        </CustomText>
        {iconPosition === 'right' && (
          <View style={styles.icon}>{renderIcon()}</View>
        )}
      </TouchableOpacity>
      {open && <View style={[styles.content, contentStyle]}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'stretch',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#F5F5F5',
    marginVertical: 8,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 1,
  },
  icon: {
    marginLeft: 8,
  },
  content: {
    paddingTop: 8,
  },
});

export default CustomAccordion;
export type { CustomAccordionProps };
