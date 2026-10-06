import { normalize } from "@/constants/normalize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    flex: 1,
    paddingHorizontal: normalize(20),
    paddingTop: normalize(20),
  },

  heading: {
    color: "#102A54",
    fontSize: normalize(20),
    fontWeight: "700",
  },

  description: {
    marginTop: normalize(3),
    color: "#70819A",
    fontSize: normalize(13),
    fontWeight: "400",
  },

  scanCard: {
    width: "100%",
    height: normalize(190),
    marginTop: normalize(18),
    backgroundColor: "#FFFFFF",
    borderWidth: normalize(1),
    borderColor: "#DCE7F4",
    borderRadius: normalize(10),
    alignItems: "center",
    justifyContent: "center",
  },

  scanCardPressed: {
    backgroundColor: "#F2F7FF",
    transform: [{ scale: 0.99 }],
  },

  scanTitle: {
    marginTop: normalize(8),
    color: "#183D87",
    fontSize: normalize(14),
    fontWeight: "700",
  },

  scanCorners: {
    position: "absolute",
    width: "72%",
    height: "72%",
  },

  topLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    width: normalize(28),
    height: normalize(28),
    borderLeftWidth: normalize(4),
    borderTopWidth: normalize(4),
    borderColor: "#1269E8",
  },

  topRight: {
    position: "absolute",
    right: 0,
    top: 0,
    width: normalize(28),
    height: normalize(28),
    borderRightWidth: normalize(4),
    borderTopWidth: normalize(4),
    borderColor: "#1269E8",
  },

  bottomLeft: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: normalize(28),
    height: normalize(28),
    borderLeftWidth: normalize(4),
    borderBottomWidth: normalize(4),
    borderColor: "#1269E8",
  },

  bottomRight: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: normalize(28),
    height: normalize(28),
    borderRightWidth: normalize(4),
    borderBottomWidth: normalize(4),
    borderColor: "#1269E8",
  },

  manualButton: {
    width: "100%",
    height: normalize(42),
    marginTop: normalize(10),
    backgroundColor: "#FFFFFF",
    borderWidth: normalize(1.5),
    borderColor: "#1269E8",
    borderRadius: normalize(8),
    alignItems: "center",
    justifyContent: "center",
  },

  manualButtonPressed: {
    backgroundColor: "#F2F7FF",
  },

  manualButtonText: {
    color: "#123F83",
    fontSize: normalize(13),
    fontWeight: "700",
  },
});