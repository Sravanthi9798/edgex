import { StyleSheet } from "react-native";
import { normalize } from "@/constants/normalize";
import Colors from "@/constants/Colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
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
    color: Colors.Heading,
  },

  description: {
    fontSize: normalize(14),
    color: Colors.MutedText,
    marginTop: normalize(6),
    marginBottom: normalize(20),
  },

  assetCard: {
    backgroundColor: Colors.AssetCardBackground,
    borderWidth: 1,
    borderColor: Colors.AssetCardBorder,
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
    color: Colors.MutedText,
  },

  assetValue: {
    flex: 1,
    textAlign: "right",
    marginLeft: normalize(15),
    fontSize: normalize(14),
    fontWeight: "600",
    color: Colors.Heading,
  },

  currentTagValue: {
    flex: 1,
    textAlign: "right",
    marginLeft: normalize(15),
    fontSize: normalize(14),
    fontWeight: "700",
    color: Colors.Warning,
  },

  /* =========================
     SCAN CARD
  ========================= */

  scanCard: {
    height: normalize(190),
    borderWidth: 1,
    borderColor: Colors.ScanBorder,
    borderRadius: normalize(14),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.ScanBackground,
    position: "relative",
  },

  scanCardPressed: {
    backgroundColor: Colors.ScanPressedBackground,
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
    borderColor: Colors.ScanAccent,
  },

  topRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: normalize(25),
    height: normalize(25),
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: Colors.ScanAccent,
  },

  bottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: normalize(25),
    height: normalize(25),
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderColor: Colors.ScanAccent,
  },

  bottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: normalize(25),
    height: normalize(25),
    borderBottomWidth: 2,
    borderRightWidth: 2,
    borderColor: Colors.ScanAccent,
  },

  scanTitle: {
    marginTop: normalize(10),
    fontSize: normalize(16),
    fontWeight: "700",
    color: Colors.Heading,
  },

  scanDescription: {
    marginTop: normalize(4),
    fontSize: normalize(12),
    color: Colors.MutedText,
  },

  enterTagButton: {
    marginTop: normalize(16),
    height: normalize(50),
    borderRadius: normalize(10),
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.ScanAccent,
  },

  enterTagText: {
    color: Colors.ScanAccent,
    fontSize: normalize(15),
    fontWeight: "700",
  },

  /* =========================
     CAMERA
  ========================= */

  cameraContainer: {
    flex: 1,
    backgroundColor: Colors.Black,
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
    backgroundColor: Colors.CameraOverlay,
  },

  cameraCloseButton: {
    width: normalize(40),
    height: normalize(40),
    alignItems: "center",
    justifyContent: "center",
  },

  cameraTitle: {
    color: Colors.White,
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
    borderColor: Colors.White,
  },

  scannerTopRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: normalize(35),
    height: normalize(35),
    borderTopWidth: 3,
    borderRightWidth: 3,
    borderColor: Colors.White,
  },

  scannerBottomLeft: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: normalize(35),
    height: normalize(35),
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderColor: Colors.White,
  },

  scannerBottomRight: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: normalize(35),
    height: normalize(35),
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderColor: Colors.White,
  },

  scannerInstruction: {
    marginTop: normalize(20),
    color: Colors.White,
    fontSize: normalize(13),
    textAlign: "center",
  },

  cameraBottom: {
    minHeight: normalize(110),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: normalize(20),
    backgroundColor: Colors.CameraOverlay,
  },

  cameraBottomText: {
    color: Colors.White,
    fontSize: normalize(13),
    textAlign: "center",
  },
});