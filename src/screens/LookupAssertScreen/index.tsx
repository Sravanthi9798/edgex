import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Alert, Modal, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Button from "@/components/Button";
import BottomSheet from "@/components/BottomSheet";
import { styles } from "./styles";

import { assets, Asset } from "@/data/assets";

//NORMALIZE VALUE
const normalizeValue = (value?: string | null) => {
  if (!value) return "";

  return value
    .toLowerCase()
    .replace(/[\s_-]+/g, "");
};

const findAssetFromScannedData = (
  scannedData: string
): Asset | undefined => {
  const rawValue = scannedData.trim();

  if (!rawValue) {
    return undefined;
  }

  const normalizedScannedValue = normalizeValue(rawValue);

  console.log("Scanned raw value:", rawValue);
  console.log("Normalized value:", normalizedScannedValue);

  // 1. Direct match with Asset ID
  const assetIdMatch = assets.find(
    (asset) =>
      normalizeValue(asset.assetId) === normalizedScannedValue
  );

  if (assetIdMatch) {
    console.log("Matched by Asset ID:", assetIdMatch);
    return assetIdMatch;
  }

  // 2. Direct match with Current Tag
  const tagMatch = assets.find(
    (asset) =>
      normalizeValue(asset.currentTag) === normalizedScannedValue
  );

  if (tagMatch) {
    console.log("Matched by Current Tag:", tagMatch);
    return tagMatch;
  }

  // 4. Try structured QR data
  const assetIdMatchFromText = rawValue.match(
    /Asset\s*ID\s*[:=-]\s*([A-Za-z0-9_-]+)/i
  );

  if (assetIdMatchFromText?.[1]) {
    const scannedAssetId = assetIdMatchFromText[1].trim();

    const asset = assets.find(
      (item) =>
        normalizeValue(item.assetId) ===
        normalizeValue(scannedAssetId)
    );

    if (asset) {
      console.log("Matched structured Asset ID:", asset);
      return asset;
    }
  }

  // 5. Try Serial Number
  console.log("Asset not found for:", rawValue);

  return undefined;
};

export default function LookupAssetScreen() {
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState<"recent" | "available">("recent");
  const [permission, requestPermission] = useCameraPermissions();
  const [showCamera, setShowCamera] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [assetNotFoundVisible, setAssetNotFoundVisible] = useState(false);

  //RECENT ASSETS
  const recentAssets = useMemo(() => {
    return assets.filter((asset) => asset.currentTag !== null);
  }, []);

  //AVAILABLE DEVICES
  const availableDevices = useMemo(() => {
    return assets.filter((asset) => asset.currentTag === null);
  }, []);

  //SEARCH RESULTS
  const searchResults = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    if (!query) {
      return activeTab === "recent" ? recentAssets : availableDevices;
    }

    return assets.filter((asset) => {
      return (
        asset.assetId.toLowerCase().includes(query) ||
        asset.assetName.toLowerCase().includes(query) ||
        asset.location.toLowerCase().includes(query) ||
        asset.currentTag?.toLowerCase().includes(query)
      );
    });
  }, [searchText, activeTab, recentAssets, availableDevices]);

  // OPEN ASSET DETAILS

  const openAssetDetails = (asset: Asset) => {
    router.push({
      pathname: "/assertDetails",

      params: {
        assetId: asset.assetId,
      },
    });
  };

  // MANUAL SEARCH
  const handleAssetSearch = () => {
    const query = searchText.trim();

    if (!query) {
      Alert.alert(
        "Search Required",
        "Please enter an Asset ID, tag, or device name.",
      );
      return;
    }

    const result = assets.find((asset) => {
      return (
        asset.assetId.toLowerCase() === query.toLowerCase() ||
        asset.currentTag?.toLowerCase() === query.toLowerCase()
        // asset.serialNumber?.toLowerCase() === query.toLowerCase()
      );
    });

    if (result) {
      openAssetDetails(result);
      return;
    }
    Alert.alert("Asset Not Found", `No asset found for "${query}".`);
  };

  //  OPEN CAMERA

  const openCamera = async () => {
    if (!permission) {
      return;
    }

    if (!permission.granted) {
      const result = await requestPermission();

      if (!result.granted) {
        Alert.alert(
          "Camera Permission",
          "Camera permission is required to scan a QR code or tag.",
        );
        return;
      }
    }

    setScanned(false);
    setShowCamera(true);
  };

  //  HANDLE BARCODE SCAN
  const handleBarcodeScanned = ({ data }: { data: string; type: string }) => {
    if (scanned) {
      return;
    }
    setScanned(true);

    /* Close camera */

    setShowCamera(false);
    const scannedValue = data.trim();
    console.log("Scanned QR / Barcode:", scannedValue);

  // Find asset 
    const asset = findAssetFromScannedData(scannedValue);
    //    ASSET FOUND

    if (asset) {
      openAssetDetails(asset);
      return;
    }
    //    ASSET NOT FOUND
    setAssetNotFoundVisible(true);
  };

  //  RENDER ASSET

  const renderAsset = (asset: Asset) => {
    return (
      <Pressable
        key={asset.assetId}
        style={({ pressed }) => [styles.tagItem, pressed && styles.tagPressed]}
        onPress={() => openAssetDetails(asset)}
      >
        <View style={styles.tagIconContainer}>
          <Ionicons
            name={asset.currentTag ? "hardware-chip-outline" : "laptop-outline"}
            size={28}
            color="#263746"
          />
        </View>

        <View style={styles.tagTextContainer}>
          <Text style={styles.tagId}>{asset.currentTag || asset.assetId}</Text>

          <Text style={styles.tagType}>{asset.assetName}</Text>

          <Text
            style={{
              fontSize: 12,
              color: asset.currentTag ? "#16803C" : "#718096",
              marginTop: 3,
            }}
          >
            {asset.currentTag ? `Tag: ${asset.currentTag}` : "Tag not assigned"}
          </Text>
        </View>

        <Ionicons name="chevron-forward" size={19} color="#102D58" />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      {/* HEADER */}

      <Header
        title="edgeX"
        onBackPress={() => router.back()}
        leftIcon={<Ionicons name="chevron-back" size={24} color="#FFFFFF" />}
        showRightButton={false}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* HEADING */}

        <Text style={styles.heading}>Look Up Asset</Text>

        <Text style={styles.description}>Find an existing asset</Text>

        {/* SEARCH LABEL */}

        <Text style={styles.label}>Asset ID / Tag</Text>

        {/* SEARCH INPUT */}

        <Input
          value={searchText}
          placeholder="Enter asset ID, tag or device"
          onChangeText={setSearchText}
          inputContainerStyle={styles.assertInputContainer}
          renderLeftIcon={<Ionicons name="search" size={17} color="#718096" />}
          renderRightIcon={
            <Pressable onPress={openCamera} hitSlop={10}>
              <Ionicons name="scan-outline" size={20} color="#1269E8" />
            </Pressable>
          }
        />

        {/* SCAN CARD */}

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

          <Ionicons name="camera-outline" size={28} color="#1269E8" />

          <Text style={styles.scanTitle}>Scan QR / Tag</Text>
        </Pressable>

        {/* TABS */}

        <View style={styles.tabContainer}>
          <Pressable
            style={
              activeTab === "recent" ? styles.activeTab : styles.inactiveTab
            }
            onPress={() => setActiveTab("recent")}
          >
            <Text
              style={
                activeTab === "recent"
                  ? styles.activeTabText
                  : styles.inactiveTabText
              }
            >
              Recent Tags
            </Text>
          </Pressable>

          <Pressable
            style={
              activeTab === "available" ? styles.activeTab : styles.inactiveTab
            }
            onPress={() => setActiveTab("available")}
          >
            <Text
              style={
                activeTab === "available"
                  ? styles.activeTabText
                  : styles.inactiveTabText
              }
            >
              Available Devices
            </Text>
          </Pressable>
        </View>

        {/* ASSET LIST */}

        <View style={styles.tagsContainer}>
          {searchResults.length > 0 ? (
            searchResults.map(renderAsset)
          ) : (
            <View
              style={{
                alignItems: "center",
                paddingVertical: 30,
              }}
            >
              <Ionicons name="search-outline" size={36} color="#A0AEC0" />

              <Text
                style={{
                  marginTop: 10,
                  color: "#718096",
                  fontSize: 14,
                }}
              >
                No matching assets found
              </Text>
            </View>
          )}
        </View>

        {/* SEARCH BUTTON */}

        <Button
          text="Search Asset"
          style={styles.lookUpButton}
          textStyle={styles.lookUpButtonText}
          onPress={handleAssetSearch}
        />
      </ScrollView>

      {/* CAMERA MODAL */}
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
            onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
          />

          <View style={styles.cameraOverlay}>
            {/* CAMERA HEADER */}

            <View style={styles.cameraHeader}>
              <Pressable
                onPress={() => setShowCamera(false)}
                style={styles.cameraCloseButton}
                hitSlop={10}
              >
                <Ionicons name="close" size={28} color="#FFFFFF" />
              </Pressable>

              <Text style={styles.cameraTitle}>Scan QR / Tag</Text>

              <View style={styles.cameraHeaderSpacer} />
            </View>

            {/* SCANNER */}

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

            {/* CAMERA FOOTER */}

            <View style={styles.cameraBottom}>
              <Text style={styles.cameraBottomText}>
                Scan the asset QR code or barcode
              </Text>

              <Pressable
                onPress={() => setShowCamera(false)}
                style={{
                  marginTop: 15,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontWeight: "600",
                  }}
                >
                  Enter code manually
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* ===================================================
          ASSET NOT FOUND BOTTOM SHEET
      =================================================== */}

      <BottomSheet
        visible={assetNotFoundVisible}
        onClose={() => {
          setAssetNotFoundVisible(false);

          setScanned(false);
        }}
        title="Asset Not Found"
        type="failure"
        message="The scanned QR code is not registered with any asset."
        doneText="Done"
        onDone={() => {
          setAssetNotFoundVisible(false);

          setScanned(false);
        }}
      />
    </SafeAreaView>
  );
}
