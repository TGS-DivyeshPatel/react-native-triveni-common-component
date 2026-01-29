import React, { useCallback, useMemo, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import { getCustomThemeConfig } from '../Config';
import CustomText from './CustomText';

/**
 * Props for the CustomBottomSheet component.
 */
interface CustomBottomSheetProps {
  /**
   * Controls the visibility of the bottom sheet.
   * Set `true` to show, `false` to hide.
   */
  visible: boolean;

  /**
   * Callback when the bottom sheet is closed by swipe or backdrop press.
   */
  onClose?: () => void;

  /**
   * Optional title displayed at the top of the sheet.
   */
  title?: string;

  /**
   * Content to render inside the bottom sheet.
   */
  children: React.ReactNode;

  /**
   * Defines the snap points for the bottom sheet.
   *
   * Accepts a list of percentages (e.g., ['30%', '70%', '90%']) or pixel values (e.g., [200, 500]).
   * The sheet will snap to these positions when dragging.
   */
  snapPoints?: (string | number)[];
}

const CustomBottomSheet: React.FC<CustomBottomSheetProps> = ({
  visible,
  onClose,
  title,
  children,
  snapPoints = ['50%', '90%'],
}) => {
  const sheetRef = useRef<BottomSheet>(null);
  const config = getCustomThemeConfig();

  const styles = useMemo(() => {
    const { colors } = config;
    return StyleSheet.create({
      container: {
        flex: 1,
      },
      contentContainer: {
        backgroundColor: colors.white,
        padding: 16,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        flexGrow: 1,
        paddingBottom: 50
      },
      header: {
        marginBottom: 12,
      },
    });
  }, [config]);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    ),
    []
  );

  const handleSheetChange = useCallback(
    (index: number) => {
      if (index === -1 && onClose) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (visible) {
      sheetRef.current?.expand();
    } else {
      sheetRef.current?.close();
    }
  }, [visible]);

  // Auto-expand when keyboard shows
  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => {
      sheetRef.current?.expand(); // or .snapToIndex(1 or 2) if needed
    });

    return () => {
      showSub.remove();
    };
  }, []);

  return visible ? (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={StyleSheet.absoluteFillObject}>
        <BottomSheet
          ref={sheetRef}
          snapPoints={snapPoints}
          onChange={handleSheetChange}
          enablePanDownToClose
          backdropComponent={renderBackdrop}
          keyboardBehavior="interactive"
          keyboardBlurBehavior="restore"
        >
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>
            <BottomSheetScrollView
              contentContainerStyle={styles.contentContainer}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              {title && (
                <CustomText size="xl4" font="SemiBold" style={styles.header}>
                  {title}
                </CustomText>
              )}
              {children}
            </BottomSheetScrollView>
          </KeyboardAvoidingView>
        </BottomSheet>
      </View>
    </TouchableWithoutFeedback>
  ) : null;
};

export default CustomBottomSheet;
export type { CustomBottomSheetProps };
