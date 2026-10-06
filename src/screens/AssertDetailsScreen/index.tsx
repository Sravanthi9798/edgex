import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/Header";
import { styles } from "./styles";

export default function AssetDetailsScreen() {
  const params = useLocalSearchParams<{
    assetId?: string;
    tagId?: string;
  }>();

  const assetId = params.assetId || "AS1-10243";

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
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
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <Text style={styles.heading}>
          Asset Details
        </Text>

        <Text style={styles.description}>
          Verify the asset before tagging
        </Text>

        {/* Asset Information */}
        <View style={styles.detailsCard}>
          <DetailRow
            label="Asset ID"
            value={assetId}
          />

          <DetailRow
            label="Asset Name"
            value="Laptop / Device"
          />

          <DetailRow
            label="Location"
            value="Hyderabad"
          />

          <DetailRow
            label="Current Tag"
            value="Not Assigned"
          />
        </View>

        {/* Assign Tag */}
        <Pressable
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.primaryButtonPressed,
          ]}
          onPress={() => router.push("/assignTag")}
        >
          <Text style={styles.primaryButtonText}>
            Assign Tag
          </Text>
        </Pressable>

        {/* Replace Tag */}
        <Pressable
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.secondaryButtonPressed,
          ]}
          onPress={() => router.push("/replaceTag")}
        >
          <Text style={styles.secondaryButtonText}>
            Replace Tag
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

type DetailRowProps = {
  label: string;
  value: string;
};

function DetailRow({
  label,
  value,
}: DetailRowProps) {
  return (
    <View style={styles.detailRow}>
      <Text style={styles.detailLabel}>
        {label}
      </Text>

      <Text style={styles.detailValue}>
        {value}
      </Text>
    </View>
  );
}