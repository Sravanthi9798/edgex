import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/Header";
import { styles } from "./styles";
import { normalize } from "@/constants/normalize";
import Button from "@/components/Button";

export default function ReplaceTagScreen() {
  const params = useLocalSearchParams<{
    assetId?: string;
    tagId?: string;
  }>();

  const assetId = params.assetId || "AS1-10243";
  //     const handleScanTag = () => {
  //     router.push({
  //       pathname: "/replaceSuccess",
  //       params: {
  //         assetId: "AS1-10243",
  //         oldTag: "EDG-000321",
  //         newTag: "EDG-000784",
  //       },
  //     });
  //   };

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
        {/* Title */}
        <Text style={styles.heading}>Replace edgeX tag</Text>

        <Text style={styles.description}>Existing tag detected</Text>

        {/* Asset Information */}
        <View style={styles.detailsCard}>
          <DetailRow label="Asset ID" value={assetId} />

          <DetailRow label="Current Tag" value="EDG-000321" />

          <DetailRow label="Replacement" value="Scan new tag" />
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.scanCard,
            pressed && styles.scanCardPressed,
          ]}
          //   onPress={handleScanTag}
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

          <Text style={styles.scanTitle}>Scan QR / Tag</Text>
        </Pressable>

        <Button
          text="Replace Tag"
          style={styles.replaceButton}
          textStyle={styles.replaceButtonText}
          onPress={() => router.push("/replaceSucess")}
        />
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
