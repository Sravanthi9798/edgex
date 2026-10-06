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

  detailsCard: {
    width: "100%",
    marginTop: normalize(16),
    paddingHorizontal: normalize(14),
    paddingVertical: normalize(12),
    backgroundColor: "#FFFFFF",
    borderWidth: normalize(1),
    borderColor: "#DCE7F4",
    borderRadius: normalize(10),
  },

  detailRow: {
    minHeight: normalize(40),
    flexDirection: "row",
    alignItems: "center",
  },

  detailLabel: {
    flex: 1,
    color: "#8291A5",
    fontSize: normalize(12),
    fontWeight: "400",
  },

  detailValue: {
    flex: 1.25,
    color: "#263E67",
    fontSize: normalize(12),
    fontWeight: "700",
  },

  primaryButton: {
    width: "100%",
    height: normalize(45),
    marginTop: normalize(14),
    backgroundColor: "#0753A8",
    borderRadius: normalize(8),
    alignItems: "center",
    justifyContent: "center",
  },

  primaryButtonPressed: {
    backgroundColor: "#06458C",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: normalize(13),
    fontWeight: "700",
  },

  secondaryButton: {
    width: "100%",
    height: normalize(45),
    marginTop: normalize(10),
    backgroundColor: "#FFFFFF",
    borderWidth: normalize(1.5),
    borderColor: "#1269E8",
    borderRadius: normalize(8),
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryButtonPressed: {
    backgroundColor: "#F2F7FF",
  },

  secondaryButtonText: {
    color: "#123F83",
    fontSize: normalize(13),
    fontWeight: "700",
  },
});