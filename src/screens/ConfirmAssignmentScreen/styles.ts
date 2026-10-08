import { StyleSheet } from "react-native";
import { normalize } from "@/constants/normalize";

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
  },

  detailsCard: {
    width: "100%",
    marginTop: normalize(16),
    paddingHorizontal: normalize(14),
    paddingVertical: normalize(12),
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#DCE7F4",
    borderRadius: normalize(10),
  },

  detailRow: {
    minHeight: normalize(42),
    flexDirection: "row",
    alignItems: "center",
  },

  detailLabel: {
    flex: 1,
    color: "#8291A5",
    fontSize: normalize(12),
  },

  detailValue: {
    flex: 1.25,
    color: "#263E67",
    fontSize: normalize(12),
    fontWeight: "700",
  },

  buttonsContainer: {
    marginTop: normalize(20),
    gap: normalize(9),
    paddingBottom: normalize(60),
  },

  confirmButton: {
    height: normalize(46),
    borderRadius: normalize(9),
    backgroundColor: "#063B86",
    justifyContent: "center",
    alignItems: "center",
  },

  confirmText: {
    color: "#FFFFFF",
    fontSize: normalize(14),
    fontWeight: "700",
  },

  cancelButton: {
    height: normalize(46),
    borderRadius: normalize(9),
    backgroundColor: "#FFFFFF",
    borderWidth: normalize(1.5),
    borderColor: "#6B91C4",
    justifyContent: "center",
    alignItems: "center",
  },

  cancelText: {
    color: "#063B86",
    fontSize: normalize(14),
    fontWeight: "700",
  },
});