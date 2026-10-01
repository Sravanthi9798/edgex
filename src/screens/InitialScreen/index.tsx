import { Pressable, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import Button from "@/components/Button";
import { styles } from "./styles";

export default function InitialScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.content}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            Edge
            <Text style={styles.logoBlue}>x</Text>
          </Text>

          <Text style={styles.subtitle}>
            Smarter Solutions{"\n"}
            for a Connected World
          </Text>
        </View>

        {/* Features */}
        <View style={styles.featuresContainer}>
          <View style={styles.feature}>
            <View style={styles.iconContainer}>
              <Ionicons name="settings-sharp" size={24} color="#1688E8" />
            </View>

            <View>
              <Text style={styles.featureTitle}>Simplify</Text>

              <Text style={styles.featureDescription}>Your Work</Text>
            </View>
          </View>

          <View style={styles.feature}>
            <View style={styles.iconContainer}>
              <Ionicons name="bar-chart" size={26} color="#1688E8" />
            </View>

            <View>
              <Text style={styles.featureTitle}>Faster</Text>

              <Text style={styles.featureDescription}>Decisions</Text>
            </View>
          </View>

          <View style={styles.feature}>
            <View style={styles.iconContainer}>
              <Ionicons name="people" size={26} color="#1688E8" />
            </View>

            <View>
              <Text style={styles.featureTitle}>Better</Text>

              <Text style={styles.featureDescription}>Collaboration</Text>
            </View>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <Button
            text="Sign In"
            style={styles.signInButton}
            textStyle={styles.signInText}
            onPress={() => router.push("/login")}
          />

          <Button
            text="Sign Up"
            style={styles.signUpButton}
            textStyle={styles.signUpText}
            onPress={() => router.push("/register")}
          />
        </View>
      </View>

      {/* Bottom blue waves */}
      {/* <View style={styles.bottomWaveOne} />
      <View style={styles.bottomWaveTwo} /> */}
    </SafeAreaView>
  );
}
