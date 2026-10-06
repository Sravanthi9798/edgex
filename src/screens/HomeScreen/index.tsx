import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { styles } from "./styles";
import Header from "@/components/Header";
import ActionCard from "@/components/ActionCard";

// Keeps icon sizes proportional to your existing normalize system.
const normalizeIcon = (size: number) => size;

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={styles.container}
      edges={["top", "bottom"]}
    >
      {/* Header */}
      <Header
        title="edgex"
        onBackPress={() => router.push("/login")}
        onRightPress={() => router.push("/register")}
        leftIcon={
          <Ionicons
            name="chevron-back"
            size={24}
            color="#FFFFFF"
          />
        }
        rightIcon={
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#FFFFFF"
          />
        }
        showRightButton
      />

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.textContent}>
          What would you like to do?
        </Text>

        <View style={styles.actionsContainer}>
          {/* Look Up Asset */}
          <ActionCard
            icon="search"
            title="Look Up Asset"
            subtitle="Search by asset ID / tag"
            onPress={() => router.push("/lookupAssert")}
          />

          {/* Assign Tag */}
          <ActionCard
            icon="pricetag"
            title="Assign Tag"
            subtitle="Assign a new edgex tag"
            onPress={() => router.push("/assignTag")}
          />

          {/* Replace Tag */}
          <ActionCard
            icon="sync"
            title="Replace Tag"
            subtitle="Replace an existing tag"
            onPress={() => router.push("/replaceTag")}
          />
        </View>

        {/* More Button */}
        <Pressable
          style={({ pressed }) => [
            styles.moreButton,
            pressed && styles.moreButtonPressed,
          ]}
          onPress={() => router.push("/register")}
        >
          <Text style={styles.moreText}>More</Text>
        </Pressable>
      </View>

      {/* Bottom Navigation */}
    </SafeAreaView>
  );
}
