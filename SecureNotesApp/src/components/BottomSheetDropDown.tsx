import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Modal,
  Pressable,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { scale } from "react-native-size-matters";
import { COLORS } from "../utils/colors";

// Icons (Replace with your own SVGs)
import ChevronDown from "../assets/icons/chevronDown.svg";

interface BottomSheetDropdownProps {
  label?: string;
  placeholder?: string;
  data: string[];
  value?: string;
  onSelect: (item: string) => void;
  sheetTitle?: string;
  error?: string;
}

export default function BottomSheetDropdown({
  label,
  placeholder = "Select option",
  data,
  value,
  onSelect,
  sheetTitle = "Select an option",
  error,
}: BottomSheetDropdownProps) {
  const [visible, setVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const openSheet = () => {
    setVisible(true);
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const closeSheet = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: false,
    }).start(() => setVisible(false));
  };

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [scale(400), 0],
  });

  const handleSelect = (item: string) => {
    onSelect(item);
    closeSheet();
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}

      {/* Input Field */}
      <Pressable style={styles.inputWrapper} onPress={openSheet}>
        <Text
          style={[
            styles.inputText,
            { color: value ? COLORS.black : COLORS.gray },
          ]}
        >
          {value || placeholder}
        </Text>
        <ChevronDown width={20} height={20} />
      </Pressable>

      {error && <Text style={styles.error}>{error}</Text>}

      {/* Bottom Sheet Modal */}
      <Modal visible={visible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={closeSheet}>
          <View style={styles.overlay}>
            <TouchableWithoutFeedback>
              <Animated.View style={[styles.sheetContainer, { transform: [{ translateY }] }]}>
                {/* Sheet Title */}
                <Text style={styles.sheetTitle}>{sheetTitle}</Text>

                <FlatList
                  data={data}
                  keyExtractor={(item, idx) => idx.toString()}
                  renderItem={({ item }) => (
                    <Pressable
                      style={styles.sheetItem}
                      onPress={() => handleSelect(item)}
                    >
                      <Text style={styles.sheetItemText}>{item}</Text>
                    </Pressable>
                  )}
                />

                {/* Cancel Button */}
                <Pressable style={styles.cancelButton} onPress={closeSheet}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </Pressable>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: scale(14),
    marginBottom: scale(6),
    fontWeight: "600",
    color: COLORS.black,
  },
  inputWrapper: {
    borderWidth: scale(1),
    borderColor: COLORS.gray,
    borderRadius: scale(8),
    paddingHorizontal: scale(12),
    height: scale(48),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.white,
  },
  inputText: {
    fontSize: scale(15),
  },
  error: {
    marginTop: scale(5),
    color: COLORS.red,
    fontSize: scale(12),
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: COLORS.black,
  },
  sheetContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: scale(20),
    paddingHorizontal: scale(20),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    maxHeight: "60%",
  },
  sheetTitle: {
    fontSize: scale(18),
    fontWeight: "700",
    textAlign: "center",
    marginBottom: scale(15),
    color: COLORS.black,
  },
  sheetItem: {
    paddingVertical: scale(14),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  sheetItemText: {
    fontSize: scale(15),
    color: COLORS.black,
  },
  cancelButton: {
    paddingVertical: scale(14),
    alignItems: "center",
  },
  cancelText: {
    color: COLORS.red,
    fontSize: scale(16),
    fontWeight: "600",
  },
});
