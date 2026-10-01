import { StyleSheet } from "react-native";
import { normalize } from "@/constants/normalize";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: normalize(72),
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F7FAFF",
    borderWidth: normalize(1),
    borderColor: "#E0EAF6",
    borderRadius: normalize(10),
    paddingHorizontal: normalize(14),
    shadowColor: "#174D8C",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },

  pressed: {
    backgroundColor: "#EEF5FF",
    transform: [{ scale: 0.99 }],
  },

  iconContainer: {
    width: normalize(42),
    alignItems: "center",
    justifyContent: "center",
    marginRight: normalize(10),
  },

  textContainer: {
    flex: 1,
    justifyContent: "center",
  },

  title: {
    color: "#102A54",
    fontSize: normalize(14),
    fontWeight: "700",
    marginBottom: normalize(3),
  },

  subtitle: {
    color: "#70819A",
    fontSize: normalize(11),
    fontWeight: "400",
  },
});