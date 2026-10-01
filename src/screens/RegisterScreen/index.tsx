import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';

import Input from "@/components/Input";
import Button from "@/components/Button";

import { styles } from "./styles";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
      <View style={styles.content}>
        <Pressable style={styles.backButton} onPress={() => router.push("/login")} hitSlop={10}>
          <Ionicons name="chevron-back" size={22} color="#122342" />
        </Pressable>

        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            Edge
            <Text style={styles.logoBlue}>x</Text>
          </Text>

        </View>

        <Text style={styles.title}>Create Account</Text>

        <Text style={styles.subtitle}>
          Sign up to get started with Edgex
        </Text>

                <View style={styles.fieldContainer}>
          <Text style={styles.label}>Full Name</Text>

          <Input
            value={email}
            placeholder="Enter your full name"
            keyboardType="email-address"
            onChangeText={setEmail}
            inputContainerStyle={styles.inputContainer}
            renderLeftIcon={
              <Feather name="user" size={17} color="#718096"/>
            }
          />
        </View>

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
            placeholder="create a password"
            secureTextEntry
            onChangeText={setPassword}
            inputContainerStyle={styles.inputContainer}
            renderLeftIcon={
              <Ionicons name="lock-closed-outline" size={17} color="#718096" />
            }
             renderRightIcon={
              <Ionicons name="eye" size={17} color="#718096" />
            }
          />
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Confirm Password</Text>

          <Input
            value={password}
            placeholder="Confirm your password"
            secureTextEntry
            onChangeText={setPassword}
            inputContainerStyle={styles.inputContainer}
            renderLeftIcon={
              <Ionicons name="lock-closed-outline" size={17} color="#718096" />
            }
             renderRightIcon={
              <Ionicons name="eye" size={17} color="#718096" />
            }
          />
        </View>

        <Button
          text="Sign Up"
          style={styles.loginButton}
          textStyle={styles.loginButtonText}
          onPress={() => {}}
        />

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account?</Text>

          <Pressable onPress={() => router.push("/login")} hitSlop={10}>
            <Text style={styles.signupLink}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
