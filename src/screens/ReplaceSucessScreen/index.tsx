import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Alert, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/Header";
import { normalize } from "@/constants/normalize";
import { styles } from "./styles";

export default function ReplaceSuccessScreen() {
  const params = useLocalSearchParams<{
    assetId?: string;
    edgexTag?: string;
    status?: string;
  }>();

  const assetId = params.assetId || "AS1-10243";
  const edgexTag = params.edgexTag || "EDG-000784";
  const status = params.status || "Assigned";

  const handleConfirmAssignment = () => {
    //    router.replace('/confirmAssignment');
  };

  const handlebackHome = () => {
    router.replace("/tabs/home");
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
      <View style={styles.successCircle}>
        <Ionicons name="checkmark" size={32} color="#FFFFFF" />
      </View>
      <Text style={styles.title}>Success</Text>

      <Text style={styles.subtitle}>Tagging completed successfully</Text>
      <View style={styles.content}>
        <View style={styles.detailsCard}>
          {/* Asset ID */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Asset ID</Text>

            <Text style={styles.detailValue}>{assetId}</Text>
          </View>

          {/* New Tag */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>edgex Tag</Text>

            <Text style={styles.detailValue}>{edgexTag}</Text>
          </View>

          {/* Action */}
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Status</Text>

            <Text style={styles.detailValue}>{status}</Text>
          </View>
        </View>

        {/* =========================
            CONFIRM BUTTON
        ========================= */}

        <Pressable
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.primaryButtonPressed,
          ]}
          onPress={handleConfirmAssignment}
        >
          <Text style={styles.primaryButtonText}>View Asset</Text>
        </Pressable>

        {/* =========================
            CANCEL BUTTON
        ========================= */}

        <Pressable
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.secondaryButtonPressed,
          ]}
          onPress={handlebackHome}
        >
          <Text style={styles.secondaryButtonText}>Back to Home</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
