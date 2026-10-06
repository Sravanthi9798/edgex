import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Alert, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/Header";
import { normalize } from "@/constants/normalize";
import { styles } from "./styles";

export default function ConfirmAssignmentScreen() {
  const params = useLocalSearchParams<{
    assetId?: string;
    assetName?: string;
    tagId?: string;
  }>();

  const assetId = params.assetId || "AS1-10243";
  const assetName = params.assetName || "Laptop / Device";
  const tagId = params.tagId || "EDG-000784";

  const handleConfirmAssignment = () => {
    Alert.alert(
      "Assignment Successful",
      `${tagId} has been assigned to ${assetId}.`,
      [
        {
          text: "OK",
          onPress: () => {
            router.replace({
              pathname: "/assertDetails",
              params: {
                assetId,
                tagId,
              },
            });
          },
        },
      ]
    );
  };

  const handleCancel = () => {
    router.back();
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
        <Text style={styles.heading}>
          Confirm Assignment
        </Text>

        <Text style={styles.description}>
          Check before saving
        </Text>

        <View style={styles.detailsCard}>
          {/* Asset ID */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              Asset ID
            </Text>
            <Text style={styles.detailValue}>
              {assetId}
            </Text>
          </View>

          {/* Asset Name */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              Asset Name
            </Text>

            <Text style={styles.detailValue}>
              {assetName}
            </Text>
          </View>

          {/* New Tag */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              New edgex Tag
            </Text>

            <Text style={styles.detailValue}>
              {tagId}
            </Text>
          </View>

          {/* Action */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>
              Action
            </Text>

            <Text style={styles.detailValue}>
              Assign Tag
            </Text>
          </View>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.primaryButtonPressed,
          ]}
          onPress={handleConfirmAssignment}
        >
          <Text style={styles.primaryButtonText}>
            Confirm Assignment
          </Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.secondaryButtonPressed,
          ]}
          onPress={handleCancel}
        >
          <Text style={styles.secondaryButtonText}>
            Cancel
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}