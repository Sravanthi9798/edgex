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
    paddingTop: normalize(24),
    paddingBottom: normalize(30),
  },

  heading: {
    fontSize: normalize(24),
    fontWeight: "700",
    color: "#102D58",
  },

  description: {
    fontSize: normalize(14),
    color: "#718096",
    marginTop: normalize(6),
    marginBottom: normalize(20),
  },

  assetCard: {
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: normalize(12),
    padding: normalize(16),
    marginBottom: normalize(20),
  },

  assetRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: normalize(12),
  },

  assetLabel: {
    fontSize: normalize(13),
    color: "#718096",
  },

  assetValue: {
    flex: 1,
    textAlign: "right",
    marginLeft: normalize(15),
    fontSize: normalize(14),
    fontWeight: "600",
    color: "#102D58",
  },

  currentTagValue: {
    flex: 1,
    textAlign: "right",
    marginLeft: normalize(15),
    fontSize: normalize(14),
    fontWeight: "700",
    color: "#D97706",
  },

  /* =========================
     SCAN CARD
  ========================= */

  scanCard: {
    height: normalize(190),
    borderWidth: 1,
    borderColor: "#D8E1ED",
    borderRadius: normalize(14),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8FBFF",
    position: "relative",
  },

  scanCardPressed: {
    backgroundColor: "#EEF6FF",
  },

  scanCorners: {
    position: "absolute",
    top: normalize(20),
    left: normalize(20),
    right: normalize(20),
    bottom: normalize(20),
  },

  topLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: normalize(25),
    height: normalize(25),
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: "#1269E8",
  },

  topRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: normalize(25),
    height: normalize(25),
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: "#1269E8",
  },

  bottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: normalize(25),
    height: normalize(25),
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: "#1269E8",
  },

  bottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: normalize(25),
    height: normalize(25),
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: "#1269E8",
  },

  scanTitle: {
    marginTop: normalize(10),
    fontSize: normalize(16),
    fontWeight: "700",
    color: "#102D58",
  },

  scanDescription: {
    marginTop: normalize(4),
    fontSize: normalize(12),
    color: "#718096",
  },

  enterTagButton: {
    marginTop: normalize(16),
    height: normalize(50),
    borderRadius: normalize(10),
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#1269E8",
  },

  enterTagText: {
    color: "#1269E8",
    fontSize: normalize(15),
    fontWeight: "700",
  },

  /* =========================
     CAMERA
  ========================= */

  cameraContainer: {
    flex: 1,
    backgroundColor: "#000000",
  },

  camera: {
    flex: 1,
  },

  cameraOverlay: {
    ...StyleSheet.absoluteFill,
    justifyContent: "space-between",
  },

  cameraHeader: {
    height: normalize(80),
    paddingHorizontal: normalize(20),
    paddingTop: normalize(25),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  cameraCloseButton: {
    width: normalize(40),
    height: normalize(40),
    alignItems: "center",
    justifyContent: "center",
  },

  cameraTitle: {
    color: "#FFFFFF",
    fontSize: normalize(17),
    fontWeight: "700",
  },

  cameraHeaderSpacer: {
    width: normalize(40),
  },

  scannerArea: {
    alignItems: "center",
    justifyContent: "center",
  },

  scannerBox: {
    width: normalize(260),
    height: normalize(260),
    position: "relative",
  },

  scannerTopLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: normalize(35),
    height: normalize(35),
    borderTopWidth: 3,
    borderLeftWidth: 3,
    borderColor: "#FFFFFF",
  },

  scannerTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: normalize(35),
    height: normalize(35),
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: "#FFFFFF",
  },

  scannerBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: normalize(35),
    height: normalize(35),
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: "#FFFFFF",
  },

  scannerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: normalize(35),
    height: normalize(35),
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: "#FFFFFF",
  },

  scannerInstruction: {
    marginTop: normalize(20),
    color: "#FFFFFF",
    fontSize: normalize(13),
    textAlign: "center",
  },

  cameraBottom: {
    minHeight: normalize(110),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: normalize(20),
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  cameraBottomText: {
    color: "#FFFFFF",
    fontSize: normalize(13),
    textAlign: "center",
  },
});