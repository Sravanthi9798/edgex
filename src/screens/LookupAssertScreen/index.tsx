import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Alert,
  Modal,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CameraView,
  useCameraPermissions,
} from "expo-camera";
import { useState } from "react";

import Header from "@/components/Header";
import Input from "@/components/Input";
import { styles } from "./styles";

const recentTags = [
  {
    id: "EDG-000784",
    type: "edgex Asset Tag",
    icon: "hardware-chip-outline" as keyof typeof Ionicons.glyphMap,
  },
  {
    id: "EDG-000321",
    type: "BLE Tag",
    icon: "radio-outline" as keyof typeof Ionicons.glyphMap,
  },
  {
    id: "EDG-000987",
    type: "GPS Tracker",
    icon: "location-outline" as keyof typeof Ionicons.glyphMap,
  },
];

export default function LookupAssetScreen() {
  const [assetId, setAssetId] = useState("");

  // Camera permission
  const [permission, requestPermission] =
    useCameraPermissions();

  // Camera visibility
  const [showCamera, setShowCamera] = useState(false);

  // Prevent multiple scans
  const [scanned, setScanned] = useState(false);

  /**
   * Open camera
   */
  const openCamera = async () => {
    if (!permission) {
      return;
    }

    if (!permission.granted) {
      const result = await requestPermission();

      if (!result.granted) {
        Alert.alert(
          "Camera Permission",
          "Camera permission is required to scan a QR code or tag."
        );

        return;
      }
    }

    setScanned(false);
    setShowCamera(true);
  };

  /**
   * Handle QR / Barcode scan
   */
  const handleBarcodeScanned = ({
    data,
    type,
  }: {
    data: string;
    type: string;
  }) => {
    if (scanned) {
      return;
    }

    setScanned(true);

    // Put scanned value into input
    setAssetId(data);

    // Close camera
    setShowCamera(false);

    console.log("Scanned type:", type);
    console.log("Scanned value:", data);

    Alert.alert(
      "Scan Successful",
      `Asset ID / Tag: ${data}`
    );
  };

//  Search asset

  const handleAssetSearch = () => {
    if (!assetId.trim()) {
      Alert.alert(
        "Asset ID Required",
        "Please enter or scan an Asset ID / Tag."
      );

      return;
    }

    router.push({
      pathname: "/assertDetails",
      params: {
        assetId: assetId.trim(),
      },
    });
  };

  /**
   * Recent tag
   */
  const handleRecentTagPress = (tagId: string) => {
    router.push({
      pathname: "/assertDetails",
      params: {
        assetId: "AS1-10243",
        tagId,
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
            size={24}
            color="#FFFFFF"
          />
        }
        showRightButton={false}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Page Title */}
        <Text style={styles.heading}>
          Look Up Asset
        </Text>

        <Text style={styles.description}>
          Find an existing asset
        </Text>

        {/* Asset ID */}
        <Text style={styles.label}>
          Asset ID / Tag
        </Text>

        <Input
          value={assetId}
          placeholder="Enter asset ID or scan tag"
          onChangeText={setAssetId}
          inputContainerStyle={
            styles.assertInputContainer
          }
          renderLeftIcon={
            <Ionicons
              name="search"
              size={17}
              color="#718096"
            />
          }
          renderRightIcon={
            <Pressable
              onPress={openCamera}
              hitSlop={10}
            >
              <Ionicons
                name="scan-outline"
                size={20}
                color="#1269E8"
              />
            </Pressable>
          }
        />

        {/* QR Scan */}
        <Pressable
          style={({ pressed }) => [
            styles.scanCard,
            pressed && styles.scanCardPressed,
          ]}
          onPress={openCamera}
        >
          <View style={styles.scanCorners}>
            <View style={styles.topLeft} />
            <View style={styles.topRight} />
            <View style={styles.bottomLeft} />
            <View style={styles.bottomRight} />
          </View>

          <Ionicons
            name="camera-outline"
            size={28}
            color="#1269E8"
          />

          <Text style={styles.scanTitle}>
            Scan QR / Tag
          </Text>
        </Pressable>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <Pressable style={styles.activeTab}>
            <Text style={styles.activeTabText}>
              Recent Tags
            </Text>
          </Pressable>

          <Pressable style={styles.inactiveTab}>
            <Text style={styles.inactiveTabText}>
              Available Devices
            </Text>
          </Pressable>
        </View>

        {/* Recent Tags */}
        <View style={styles.tagsContainer}>
          {recentTags.map((tag) => (
            <Pressable
              key={tag.id}
              style={({ pressed }) => [
                styles.tagItem,
                pressed && styles.tagPressed,
              ]}
              onPress={() =>
                handleRecentTagPress(tag.id)
              }
            >
              <View style={styles.tagIconContainer}>
                <Ionicons
                  name={tag.icon}
                  size={28}
                  color="#263746"
                />
              </View>

              <View style={styles.tagTextContainer}>
                <Text style={styles.tagId}>
                  {tag.id}
                </Text>

                <Text style={styles.tagType}>
                  {tag.type}
                </Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={19}
                color="#102D58"
              />
            </Pressable>
          ))}
        </View>

        {/* Search Button */}
        <Pressable
          style={({ pressed }) => [
            styles.searchButton,
            pressed && styles.searchButtonPressed,
          ]}
          onPress={handleAssetSearch}
        >
          <Text style={styles.searchButtonText}>
            Search Asset
          </Text>
        </Pressable>
      </ScrollView>

      {/* ========================= */}
      {/* CAMERA MODAL */}
      {/* ========================= */}

      <Modal
        visible={showCamera}
        animationType="slide"
        onRequestClose={() => setShowCamera(false)}
      >
        <View style={styles.cameraContainer}>
          <CameraView
            style={styles.camera}
            facing="back"
            barcodeScannerSettings={{
              barcodeTypes: [
                "qr",
                "code128",
                "code39",
                "code93",
                "ean13",
                "ean8",
                "upc_a",
                "upc_e",
              ],
            }}
            onBarcodeScanned={
              scanned
                ? undefined
                : handleBarcodeScanned
            }
          />

          {/* Camera Overlay */}
          <View style={styles.cameraOverlay}>
            {/* Top Header */}
            <View style={styles.cameraHeader}>
              <Pressable
                onPress={() => setShowCamera(false)}
                style={styles.cameraCloseButton}
                hitSlop={10}
              >
                <Ionicons
                  name="close"
                  size={28}
                  color="#FFFFFF"
                />
              </Pressable>

              <Text style={styles.cameraTitle}>
                Scan QR / Tag
              </Text>

              <View style={styles.cameraHeaderSpacer} />
            </View>

            {/* Scanner Box */}
            <View style={styles.scannerArea}>
              <View style={styles.scannerBox}>
                <View style={styles.scannerTopLeft} />
                <View style={styles.scannerTopRight} />
                <View style={styles.scannerBottomLeft} />
                <View style={styles.scannerBottomRight} />
              </View>

              <Text style={styles.scannerInstruction}>
                Place the QR code or tag inside the box
              </Text>
            </View>

            {/* Bottom */}
            <View style={styles.cameraBottom}>
              <Text style={styles.cameraBottomText}>
                Scan the asset QR code or barcode
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}