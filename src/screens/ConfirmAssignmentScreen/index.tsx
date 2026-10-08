import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Alert, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { useAsset } from "@/context/AssetContext";
import { normalize } from "@/constants/normalize";
import { styles } from "./styles";

export default function ConfirmAssignmentScreen() {
  const params = useLocalSearchParams<{
    assetId?: string;
    assetName?: string;
    location?: string;
    currentTag?: string;
    status?: string;
    mode?: string;
  }>();

  const { updateAsset } = useAsset();

  const assetId = params.assetId || "";

  const assetName = params.assetName || "";

  const location = params.location || "";

  const currentTag = params.currentTag || "";

  const status = params.status || "Assigned";

  const mode = params.mode || "assign";

  const isReplace = mode === "replace";

  //  Confirm assignment
  const handleConfirmAssignment = () => {
    updateAsset(assetId, {
      assetName,
      location,
      currentTag,
      status: "Assigned",
    });

    Alert.alert(
      isReplace ? "Tag Replaced Successfully" : "Assignment Successful",

      isReplace
        ? `${currentTag} has replaced the old tag on ${assetId}.`
        : `${currentTag} has been assigned to ${assetId}.`,

      [
        {
          text: "OK",
          onPress: () => {
            router.replace({
              pathname: "/assertDetails",
              params: {
                assetId,
              },
            });
          },
        },
      ],
    );
  };

  //  Cancel
  const handleCancel = () => {
    router.back();
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <Header
        title="edgex"
        onBackPress={() => router.back()}
        leftIcon={
          <Ionicons name="chevron-back" size={normalize(24)} color="#FFFFFF" />
        }
        showRightButton={false}
      />

      <View style={styles.content}>
        <Text style={styles.heading}>Confirm Assignment</Text>

        <Text style={styles.description}>Check the details before saving</Text>

        {/* DETAILS */}
        <View style={styles.detailsCard}>
          <DetailRow label="Asset ID" value={assetId} />

          <DetailRow label="Asset Name" value={assetName} />

          <DetailRow label="Location" value={location} />

          <DetailRow
            label={isReplace ? "New Tag" : "edgex Tag"}
            value={currentTag}
          />

          <DetailRow label="Tag Status" value={status} />

          <DetailRow
            label="Action"
            value={isReplace ? "Replace Tag" : "Assign Tag"}
          />
        </View>

            {/* BUTTONS */}
        <View style={styles.buttonsContainer}>
          <Button
            text={isReplace ? "Confirm Replacement" : "Confirm Assignment"}
            style={styles.confirmButton}
            textStyle={styles.confirmText}
            onPress={handleConfirmAssignment}
          />

          <Button
            text="Cancel"
            style={styles.cancelButton}
            textStyle={styles.cancelText}
            onPress={handleCancel}
          />
        </View>
      </View>
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
