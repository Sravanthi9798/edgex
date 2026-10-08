import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import Input from "@/components/Input";
import Button from "@/components/Button";

import { styles } from "./styles";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.content}>
        <Pressable
          style={styles.backButton}
          onPress={() => router.push("/register")}
          hitSlop={10}
        >
          <Ionicons name="chevron-back" size={22} color="#122342" />
        </Pressable>

        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            Edge
            <Text style={styles.logoBlue}>X</Text>
          </Text>
        </View>

        <Text style={styles.title}>Welcome Back</Text>

        <Text style={styles.subtitle}>
          Sign in to your EdgeX account{"\n"}
          to continue
        </Text>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Email</Text>

          <Input
            value={email}
            placeholder="Enter your email"
            keyboardType="email-address"
            onChangeText={setEmail}
            inputContainerStyle={styles.inputContainer}
            renderLeftIcon={
              <Ionicons name="mail-outline" size={17} color="#718096" />
            }
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Password</Text>

          <Input
            value={password}
            placeholder="Enter your password"
            secureTextEntry
            onChangeText={setPassword}
            inputContainerStyle={styles.inputContainer}
            renderLeftIcon={
              <Ionicons name="lock-closed-outline" size={17} color="#718096" />
            }
            renderRightIcon={<Ionicons name="eye" size={17} color="#718096" />}
          />
        </View>

        <Pressable style={styles.forgotContainer} onPress={() => {}}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </Pressable>

        <Button
          text="Login"
          style={styles.loginButton}
          textStyle={styles.loginButtonText}
          onPress={() => router.replace("/tabs/home")}
        />

        <View style={styles.orContainer}>
          <View style={styles.orLine} />

          <Text style={styles.orText}>OR</Text>

          <View style={styles.orLine} />
        </View>

        <Button
          text="Sign in with Microsoft"
          style={styles.microsoftButton}
          textStyle={styles.microsoftButtonText}
          onPress={() => {}}
        />

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>

          <Pressable onPress={() => router.replace("/register")} hitSlop={10}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
