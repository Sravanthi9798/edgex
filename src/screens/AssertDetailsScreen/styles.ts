import { StyleSheet } from "react-native";
import { normalize } from "@/constants/normalize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  content: {
    paddingHorizontal: normalize(16),
    paddingBottom: normalize(30),
  },

  heading: {
    marginTop: normalize(18),
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
    marginTop: normalize(16),
    paddingHorizontal: normalize(14),
    paddingVertical: normalize(14),
    borderWidth: 1,
    borderColor: "#DCE7F4",
    borderRadius: normalize(11),
    backgroundColor: "#FFFFFF",
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
  },

  detailValue: {
    flex: 1.2,
    color: "#263E67",
    fontSize: normalize(12),
    fontWeight: "700",
  },

  primaryButton: {
    height: normalize(45),
    marginTop: normalize(14),
    borderRadius: normalize(9),
    backgroundColor: "#0753A8",
    alignItems: "center",
    justifyContent: "center",
  },

  primaryButtonPressed: {
    backgroundColor: "#06458C",
  },

  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: normalize(14),
    fontWeight: "700",
  },

  secondaryButton: {
    height: normalize(45),
    marginTop: normalize(10),
    borderRadius: normalize(9),
    borderWidth: 1.5,
    borderColor: "#1269E8",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  secondaryButtonPressed: {
    backgroundColor: "#F2F7FF",
  },

  secondaryButtonText: {
    color: "#123F83",
    fontSize: normalize(14),
    fontWeight: "700",
  },
});