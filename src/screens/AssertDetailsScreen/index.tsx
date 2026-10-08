import { Ionicons } from "@expo/vector-icons";

import { router, useLocalSearchParams } from "expo-router";

import { Alert, ScrollView, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/Header";
import Button from "@/components/Button";

import { useAsset } from "@/context/AssetContext";

import { styles } from "./styles";

export default function AssetDetailsScreen() {
  const params = useLocalSearchParams<{
    assetId?: string;
    scannedTag?: string;
    scanMode?: string;
  }>();

  const assetId = params.assetId;

  const scannedTag = params.scannedTag || "";

  const scanMode = params.scanMode || "";

  const { assets } = useAsset();

  const asset = assets.find((item) => item.assetId === assetId);

  if (!asset) {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          title="edgeX"
          onBackPress={() => router.back()}
          leftIcon={<Ionicons name="chevron-back" size={24} color="#FFFFFF" />}
          showRightButton={false}
        />

        <View style={styles.notFoundContainer}>
          <Ionicons name="alert-circle-outline" size={50} color="#E53E3E" />

          <Text style={styles.notFoundTitle}>Asset Not Found</Text>

          <Text style={styles.notFoundText}>
            We could not find the requested asset.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  const hasTag = !!asset.currentTag;

  /*
   * SCANNED TAG FLOW
   *
   * If this screen was opened after
   * scanning a new tag, show Done.
   */
  const isScannedAssignment = scanMode === "assign" && !!scannedTag;

  /*
   * Assign Tag
   */
  const handleAssignTag = () => {
    router.push({
      pathname: "/assignTag",
      params: {
        assetId: asset.assetId,
        assetName: asset.assetName,
        location: asset.location,
        currentTag: asset.currentTag || "",
        status: asset.status,
        mode: "assign",
      },
    });
  };

  /*
   * Replace Tag
   */
  const handleReplaceTag = () => {
    if (!asset.currentTag) {
      Alert.alert(
        "No Existing Tag",
        "This asset does not currently have a tag. Please use Assign Tag instead.",
      );

      return;
    }

    router.push({
      pathname: "/assignTag",
      params: {
        assetId: asset.assetId,
        assetName: asset.assetName,
        location: asset.location,
        currentTag: asset.currentTag,
        status: asset.status,
        mode: "replace",
      },
    });
  };

  /*
   * DONE AFTER SCANNING
   */
  const handleDoneAfterScan = () => {
    router.push({
      pathname: "/confirmAssignment",
      params: {
        assetId: asset.assetId,
        assetName: asset.assetName,
        location: asset.location,
        currentTag: scannedTag,
        status: "Assigned",
        mode: "assign",
      },
    });
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <Header
        title="edgeX"
        onBackPress={() => router.back()}
        leftIcon={<Ionicons name="chevron-back" size={24} color="#FFFFFF" />}
        showRightButton={false}
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>Asset Details</Text>

        <Text style={styles.description}>
          {isScannedAssignment
            ? "Review the scanned tag details"
            : "Verify the asset before tagging"}
        </Text>

        {/* =========================
            ASSET DETAILS
        ========================= */}

        <View style={styles.detailsCard}>
          <DetailRow label="Asset ID" value={asset.assetId} />

          <DetailRow label="Asset Name" value={asset.assetName} />

          <DetailRow label="Location" value={asset.location} />

          <DetailRow
            label="Current Tag"
            value={
              isScannedAssignment
                ? scannedTag
                : asset.currentTag || "Not Assigned"
            }
          />

          <DetailRow
            label="Tag Status"
            value={isScannedAssignment ? "Assigned" : asset.status}
          />
        </View>

        {/* =========================
            SCANNED TAG
        ========================= */}

        {isScannedAssignment && (
          <View style={styles.scannedCard}>
            <Ionicons name="checkmark-circle" size={24} color="#16803C" />

            <View style={styles.scannedContent}>
              <Text style={styles.scannedTitle}>Tag Scanned Successfully</Text>

              <Text style={styles.scannedTag}>{scannedTag}</Text>
            </View>
          </View>
        )}

        {/* =========================
            NORMAL STATUS
        ========================= */}

        {!isScannedAssignment && (
          <View
            style={[
              styles.statusCard,
              hasTag ? styles.assignedStatus : styles.notAssignedStatus,
            ]}
          >
            <Ionicons
              name={hasTag ? "checkmark-circle" : "alert-circle"}
              size={22}
              color={hasTag ? "#16803C" : "#D97706"}
            />

            <Text
              style={[
                styles.statusText,
                hasTag
                  ? styles.assignedStatusText
                  : styles.notAssignedStatusText,
              ]}
            >
              {hasTag
                ? "This asset has a tag assigned"
                : "This asset does not have a tag"}
            </Text>
          </View>
        )}

        {/* =========================
            ACTION BUTTONS
        ========================= */}

        <View style={styles.buttonsContainer}>
          {isScannedAssignment ? (
            <Button
              text="Done"
              style={styles.assignTagButton}
              textStyle={styles.assignTagText}
              onPress={handleDoneAfterScan}
            />
          ) : (
            <>
              {!hasTag && (
                <Button
                  text="Assign Tag"
                  style={styles.assignTagButton}
                  textStyle={styles.assignTagText}
                  onPress={handleAssignTag}
                />
              )}

              {hasTag && (
                <Button
                  text="Replace Tag"
                  style={styles.replaceButton}
                  textStyle={styles.replaceText}
                  onPress={handleReplaceTag}
                />
              )}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

type DetailRowProps = {
  label: string;
  value: string;
};

function DetailRow({ label, value }: DetailRowProps) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>{label}</Text>

      <Text style={styles.detailValue}>{value}</Text>
    </View>
  );
}
