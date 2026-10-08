import { Ionicons } from "@expo/vector-icons";
import { Modal, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
type BottomSheetType = "default" | "success" | "failure" | "filter";

type BottomSheetProps = {
  visible: boolean;
  onClose: () => void;
  title: string;
  type?: BottomSheetType;
  message?: string;
  doneText?: string;
  onDone?: () => void;
  children?: React.ReactNode;
  showClose?: boolean;
};

export default function BottomSheet({
  visible,
  onClose,
  title,
  type = "default",
  message,
  doneText = "Done",
  onDone,
  children,
  showClose = true,
}: BottomSheetProps) {
  const isStatus = type === "success" || type === "failure";

  const iconName =
    type === "success"
      ? "checkmark-circle"
      : type === "failure"
        ? "close-circle"
        : undefined;

  const iconColor =
    type === "success" ? "#16803C" : type === "failure" ? "#D92D20" : "#1269E8";

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <Pressable style={styles.overlayPressable} onPress={onClose} />

        <View style={styles.bottomSheet}>
          {/* Handle */}

          <View style={styles.sheetHandle} />

          {/* Header */}

          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>{title}</Text>

            {showClose && (
              <Pressable
                onPress={onClose}
                hitSlop={10}
                style={styles.closeButton}
              >
                <Text style={styles.closeText}>✕</Text>
              </Pressable>
            )}
          </View>

          {/* Success / Failure */}

          {isStatus && (
            <View style={styles.statusContainer}>
              <View
                style={[
                  styles.statusIconContainer,
                  {
                    backgroundColor: type === "success" ? "#E8F7EE" : "#FDECEC",
                  },
                ]}
              >
                <Ionicons name={iconName!} size={46} color={iconColor} />
              </View>

              {message && <Text style={styles.statusMessage}>{message}</Text>}
            </View>
          )}

          {/* Custom Content */}
          {children}

          {/* Done Button */}
          {isStatus && (
            <Pressable style={styles.doneButton} onPress={onDone || onClose}>
              <Text style={styles.doneText}>{doneText}</Text>
            </Pressable>
          )}
        </View>
      </View>
    </Modal>
  );
}
