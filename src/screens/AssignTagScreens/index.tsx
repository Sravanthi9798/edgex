import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/Header";
import { styles } from "./styles";
import { normalize } from "@/constants/normalize";

export default function AssignTagScreen() {
const handleScanTag = () => {
  router.push({
    pathname: "/confirmAssignment",
    params: {
      assetId: "AS1-10243",
      assetName: "Laptop / Device",
      tagId: "EDG-000784",
    },
  });
};

const handleEnterManually = () => {
  router.push({
    pathname: "/confirmAssignment",
    params: {
      assetId: "AS1-10243",
      assetName: "Laptop / Device",
      tagId: "EDG-000784",
    },
  });
};

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "bottom"]}
    >
      <Header
        title="edgex"
        onBackPress={() => router.back()}
        leftIcon={
          <Ionicons
            name="chevron-back"
            size={normalize(24)}
            color="#FFFFFF"
          />
        }
        showRightButton={false}
      />

      <View style={styles.content}>
        {/* Page Title */}
        <Text style={styles.heading}>
          Assign edgex Tag
        </Text>

        <Text style={styles.description}>
          Scan the physical edgex tag
        </Text>

        {/* Scan QR / Tag */}
        <Pressable
          style={({ pressed }) => [
            styles.scanCard,
            pressed && styles.scanCardPressed,
          ]}
          onPress={handleScanTag}
        >
          <View style={styles.scanCorners}>
            <View style={styles.topLeft} />
            <View style={styles.topRight} />
            <View style={styles.bottomLeft} />
            <View style={styles.bottomRight} />
          </View>

          <Ionicons
            name="camera-outline"
            size={normalize(30)}
            color="#1269E8"
          />

          <Text style={styles.scanTitle}>
            Scan QR / Tag
          </Text>
        </Pressable>

        {/* Manual Entry */}
        <Pressable
          style={({ pressed }) => [
            styles.manualButton,
            pressed && styles.manualButtonPressed,
          ]}
          onPress={handleEnterManually}
        >
          <Text style={styles.manualButtonText}>
            Enter Tag Manually
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}