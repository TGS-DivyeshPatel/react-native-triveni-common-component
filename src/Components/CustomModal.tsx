import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  type ModalProps,
  type ViewStyle,
  type StyleProp,
} from 'react-native';
import { getCustomThemeConfig } from '../Config';

interface CustomModalProps extends Omit<ModalProps, 'transparent'> {
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  bgColor?: keyof ReturnType<typeof getCustomThemeConfig>['colors'];
  style?: StyleProp<ViewStyle>;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  children,
  bgColor = 'white',
  style,
  ...props
}) => {
  const { colors } = getCustomThemeConfig();

  return (
    <Modal visible={visible} transparent animationType="fade" {...props}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>
      <View style={styles.centeredView}>
        <View
          style={[
            styles.modalView,
            { backgroundColor: colors[bgColor] },
            style,
          ]}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: '#00000088',
  },
  centeredView: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -170 }, { translateY: -100 }],
    width: 340,
  },
  modalView: {
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
});

export default CustomModal;
export type { CustomModalProps };
