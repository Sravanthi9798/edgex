import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { styles } from "./styles";

type ActionCardProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  onPress: () => void;
};

export default function ActionCard({
  icon,
  title,
  subtitle,
  onPress,
}: ActionCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          name={icon}
          size={28}
          color="#1269E8"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color="#102D58"
      />
    </Pressable>
  );
}