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

  /* =========================
     STATUS
  ========================= */

  statusCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalize(16),
    padding: normalize(14),
    borderRadius: normalize(10),
  },

  assignedStatus: {
    backgroundColor: "#E8F7EE",
  },

  notAssignedStatus: {
    backgroundColor: "#FFF7E6",
  },

  statusText: {
    marginLeft: normalize(10),
    fontSize: normalize(13),
    fontWeight: "600",
  },

  assignedStatusText: {
    color: "#16803C",
  },

  notAssignedStatusText: {
    color: "#D97706",
  },

  /* =========================
     SCANNED TAG
  ========================= */

  scannedCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalize(16),
    padding: normalize(15),
    borderRadius: normalize(10),
    backgroundColor: "#E8F7EE",
    borderWidth: 1,
    borderColor: "#B8E4C7",
  },

  scannedContent: {
    marginLeft: normalize(10),
  },

  scannedTitle: {
    color: "#16803C",
    fontSize: normalize(13),
    fontWeight: "600",
  },

  scannedTag: {
    marginTop: normalize(3),
    color: "#102D58",
    fontSize: normalize(15),
    fontWeight: "700",
  },

  /* =========================
     BUTTONS
  ========================= */

  buttonsContainer: {
    marginTop: normalize(10),
    gap: normalize(9),
    paddingBottom: normalize(60),
  },

  assignTagButton: {
    height: normalize(46),
    borderRadius: normalize(9),
    backgroundColor: "#063B86",
    justifyContent: "center",
    alignItems: "center",
  },

  assignTagText: {
    color: "#FFFFFF",
    fontSize: normalize(14),
    fontWeight: "700",
  },

  replaceButton: {
    height: normalize(46),
    borderRadius: normalize(9),
    backgroundColor: "#FFFFFF",
    borderWidth: normalize(1.5),
    borderColor: "#6B91C4",
    justifyContent: "center",
    alignItems: "center",
  },

  replaceText: {
    color: "#063B86",
    fontSize: normalize(14),
    fontWeight: "700",
  },

  /* =========================
     NOT FOUND
  ========================= */

  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: normalize(30),
  },

  notFoundTitle: {
    fontSize: normalize(18),
    fontWeight: "600",
    marginTop: normalize(15),
    color: "#102A54",
  },

  notFoundText: {
    color: "#718096",
    marginTop: normalize(8),
    textAlign: "center",
    fontSize: normalize(13),
  },
});