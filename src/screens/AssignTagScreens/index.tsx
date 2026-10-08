import { Ionicons } from "@expo/vector-icons";

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import {
  Alert,
  Modal,
  Pressable,
  Text,
  View,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  CameraView,
  useCameraPermissions,
} from "expo-camera";

import { useState } from "react";

import Header from "@/components/Header";
import Button from "@/components/Button";

import { normalize } from "@/constants/normalize";

import { styles } from "./styles";

export default function AssignTagScreen() {
  const params =
    useLocalSearchParams<{
      assetId?: string;
      assetName?: string;
      location?: string;
      currentTag?: string;
      status?: string;
      mode?: string;
    }>();

  const assetId =
    params.assetId || "";

  const assetName =
    params.assetName || "";

  const location =
    params.location || "";

  const currentTag =
    params.currentTag || "";

  const mode =
    params.mode || "assign";

  const isReplace =
    mode === "replace";

  const [
    permission,
    requestPermission,
  ] = useCameraPermissions();

  const [
    showCamera,
    setShowCamera,
  ] = useState(false);

  const [
    scanned,
    setScanned,
  ] = useState(false);

  /*
   * Open scanner
   */
  const handleOpenScanner =
    async () => {
      if (!permission) {
        return;
      }

      if (!permission.granted) {
        const result =
          await requestPermission();

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

  /*
   * Scanner
   */
  const handleBarcodeScanned = ({
    data,
  }: {
    data: string;
    type: string;
  }) => {
    if (scanned) {
      return;
    }

    setScanned(true);

    setShowCamera(false);

    const scannedTag =
      data.trim();

    if (!scannedTag) {
      Alert.alert(
        "Invalid Tag",
        "The scanned tag does not contain valid data.",
      );

      setScanned(false);

      return;
    }

    /*
     * IMPORTANT:
     *
     * We already know which asset
     * the user selected.
     *
     * So the scanned value becomes
     * the NEW TAG for that asset.
     */

    router.replace({
      pathname: "/assertDetails",
      params: {
        assetId,
        scannedTag,
        scanMode: mode,
      },
    });
  };

  /*
   * Manual
   */
  const handleEnterManually =
    () => {
      router.push({
        pathname: "/manualTag",
        params: {
          assetId,
          assetName,
          location,
          currentTag,
          status:
            params.status || "",
          mode,
        },
      });
    };

  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "bottom"]}
    >
      <Header
        title="edgeX"
        onBackPress={() =>
          router.back()
        }
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
        {/* TITLE */}

        <Text style={styles.heading}>
          {isReplace
            ? "Replace edgeX Tag"
            : "Assign edgeX Tag"}
        </Text>

        <Text style={styles.description}>
          {isReplace
            ? "Replace the existing tag with a new edgeX tag"
            : "Assign an edgeX tag to this asset"}
        </Text>

        {/* =========================
            ASSET INFORMATION
        ========================= */}

        <View style={styles.assetCard}>
          <View style={styles.assetRow}>
            <Text style={styles.assetLabel}>
              Asset ID
            </Text>

            <Text style={styles.assetValue}>
              {assetId}
            </Text>
          </View>

          <View style={styles.assetRow}>
            <Text style={styles.assetLabel}>
              Asset Name
            </Text>

            <Text style={styles.assetValue}>
              {assetName}
            </Text>
          </View>

          <View style={styles.assetRow}>
            <Text style={styles.assetLabel}>
              Location
            </Text>

            <Text style={styles.assetValue}>
              {location}
            </Text>
          </View>

          <View style={styles.assetRow}>
            <Text style={styles.assetLabel}>
              Current Tag
            </Text>

            <Text
              style={
                styles.currentTagValue
              }
            >
              {currentTag ||
                "Not Assigned"}
            </Text>
          </View>

          <View style={styles.assetRow}>
            <Text style={styles.assetLabel}>
              Tag Status
            </Text>

            <Text style={styles.assetValue}>
              {params.status ||
                "Not Assigned"}
            </Text>
          </View>
        </View>

        {/* =========================
            SCAN
        ========================= */}

        <Pressable
          style={({ pressed }) => [
            styles.scanCard,
            pressed &&
              styles.scanCardPressed,
          ]}
          onPress={
            handleOpenScanner
          }
        >
          <View
            style={
              styles.scanCorners
            }
          >
            <View
              style={styles.topLeft}
            />

            <View
              style={styles.topRight}
            />

            <View
              style={styles.bottomLeft}
            />

            <View
              style={
                styles.bottomRight
              }
            />
          </View>

          <Ionicons
            name="camera-outline"
            size={normalize(30)}
            color="#1269E8"
          />

          <Text
            style={styles.scanTitle}
          >
            Scan QR / Tag
          </Text>

          <Text
            style={
              styles.scanDescription
            }
          >
            Scan the physical edgeX tag
          </Text>
        </Pressable>

        {/* =========================
            MANUAL
        ========================= */}

        <Button
          text="Enter Tag Manually"
          style={
            styles.enterTagButton
          }
          textStyle={
            styles.enterTagText
          }
          onPress={
            handleEnterManually
          }
        />
      </View>

      {/* =========================
          CAMERA
      ========================= */}

      <Modal
        visible={showCamera}
        animationType="slide"
        onRequestClose={() =>
          setShowCamera(false)
        }
      >
        <View
          style={
            styles.cameraContainer
          }
        >
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

          <View
            style={
              styles.cameraOverlay
            }
          >
            {/* HEADER */}

            <View
              style={
                styles.cameraHeader
              }
            >
              <Pressable
                onPress={() => {
                  setShowCamera(
                    false,
                  );
                  setScanned(
                    false,
                  );
                }}
                style={
                  styles.cameraCloseButton
                }
                hitSlop={10}
              >
                <Ionicons
                  name="close"
                  size={28}
                  color="#FFFFFF"
                />
              </Pressable>

              <Text
                style={
                  styles.cameraTitle
                }
              >
                Scan QR / Tag
              </Text>

              <View
                style={
                  styles.cameraHeaderSpacer
                }
              />
            </View>

            {/* SCANNER BOX */}

            <View
              style={
                styles.scannerArea
              }
            >
              <View
                style={
                  styles.scannerBox
                }
              >
                <View
                  style={
                    styles.scannerTopLeft
                  }
                />

                <View
                  style={
                    styles.scannerTopRight
                  }
                />

                <View
                  style={
                    styles.scannerBottomLeft
                  }
                />

                <View
                  style={
                    styles.scannerBottomRight
                  }
                />
              </View>

              <Text
                style={
                  styles.scannerInstruction
                }
              >
                Place the QR code or tag
                inside the box
              </Text>
            </View>

            {/* FOOTER */}

            <View
              style={
                styles.cameraBottom
              }
            >
              <Text
                style={
                  styles.cameraBottomText
                }
              >
                Scan the physical edgeX
                tag
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}