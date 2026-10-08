import { Ionicons } from "@expo/vector-icons";

import {
  router,
  useLocalSearchParams,
} from "expo-router";

import {
  Alert,
  ScrollView,
  Text,
} from "react-native";

import {
  SafeAreaView,
} from "react-native-safe-area-context";

import { useState } from "react";

import Header from "@/components/Header";
import Input from "@/components/Input";
import Button from "@/components/Button";

import { normalize } from "@/constants/normalize";

import { styles } from "./styles";

export default function ManualTagScreen() {
  const params =
    useLocalSearchParams<{
      assetId?: string;
      assetName?: string;
      location?: string;
      currentTag?: string;
      status?: string;
      mode?: string;
    }>();

  const [assetId, setAssetId] =
    useState(
      params.assetId || "",
    );

  const [assetName, setAssetName] =
    useState(
      params.assetName || "",
    );

  const [location, setLocation] =
    useState(
      params.location || "",
    );

  const [currentTag, setCurrentTag] =
    useState(
      params.currentTag || "",
    );

  /*
   * Status is automatically Assigned
   * because we are assigning a tag.
   */
  const status = "Assigned";

  const mode =
    params.mode || "assign";

  const handleDone = () => {
    if (!assetId.trim()) {
      Alert.alert(
        "Asset ID Required",
        "Please enter the asset ID.",
      );
      return;
    }

    if (!assetName.trim()) {
      Alert.alert(
        "Asset Name Required",
        "Please enter the asset name.",
      );
      return;
    }

    if (!location.trim()) {
      Alert.alert(
        "Location Required",
        "Please enter the location.",
      );
      return;
    }

    if (!currentTag.trim()) {
      Alert.alert(
        "Tag Required",
        "Please enter the edgeX tag.",
      );
      return;
    }

    /*
     * Go to confirmation
     */
    router.push({
      pathname:
        "/confirmAssignment",
      params: {
        assetId:
          assetId.trim(),

        assetName:
          assetName.trim(),

        location:
          location.trim(),

        currentTag:
          currentTag.trim(),

        status,

        mode,
      },
    });
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={[
        "top",
        "bottom",
      ]}
    >
      <Header
        title="edgeX"
        onBackPress={() =>
          router.back()
        }
        leftIcon={
          <Ionicons
            name="chevron-back"
            size={normalize(24)}
            color="#FFFFFF"
          />
        }
        showRightButton={false}
      />

      <ScrollView
        contentContainerStyle={
          styles.content
        }
        showsVerticalScrollIndicator={
          false
        }
      >
        <Text
          style={styles.heading}
        >
          Enter Asset Details
        </Text>

        <Text
          style={styles.description}
        >
          Update the asset information
          before confirming the tag
          assignment
        </Text>

        {/* Asset ID */}

        <Text style={styles.label}>
          Asset ID
        </Text>

        <Input
          value={assetId}
          onChangeText={
            setAssetId
          }
          placeholder="Enter asset ID"
          inputContainerStyle={
            styles.inputContainer
          }
        />

        {/* Asset Name */}

        <Text style={styles.label}>
          Asset Name
        </Text>

        <Input
          value={assetName}
          onChangeText={
            setAssetName
          }
          placeholder="Enter asset name"
          inputContainerStyle={
            styles.inputContainer
          }
        />

        {/* Location */}

        <Text style={styles.label}>
          Location
        </Text>

        <Input
          value={location}
          onChangeText={
            setLocation
          }
          placeholder="Enter location"
          inputContainerStyle={
            styles.inputContainer
          }
        />

        {/* Current / New Tag */}

        <Text style={styles.label}>
          New edgeX Tag
        </Text>

        <Input
          value={currentTag}
          onChangeText={
            setCurrentTag
          }
          placeholder="Enter tag ID"
          inputContainerStyle={
            styles.inputContainer
          }
          renderLeftIcon={
            <Ionicons
              name="pricetag-outline"
              size={normalize(20)}
              color="#718096"
            />
          }
        />

        <Text
          style={styles.helperText}
        >
          Example: EDG-000784
        </Text>

        {/* Tag Status */}

        <Text style={styles.label}>
          Tag Status
        </Text>

        <Input
          value={status}
          // editable={false}
          inputContainerStyle={[
            styles.inputContainer,
            styles.disabledInput,
          ]}
        />

        {/* DONE */}

        <Button
          text="Done"
          style={styles.doneButton}
          textStyle={
            styles.doneButtonText
          }
          onPress={handleDone}
        />
      </ScrollView>
    </SafeAreaView>
  );
}