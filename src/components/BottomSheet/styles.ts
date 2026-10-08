import { normalize } from "@/constants/normalize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  /* =========================
     OVERLAY
  ========================= */

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },

  overlayPressable: {
    flex: 1,
  },

  /* =========================
     BOTTOM SHEET
  ========================= */

  bottomSheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: normalize(24),
    borderTopRightRadius: normalize(24),
    paddingHorizontal: normalize(20),
    paddingTop: normalize(10),
    paddingBottom: normalize(24),

    minHeight: normalize(180),
  },

  /* =========================
     HANDLE
  ========================= */

  sheetHandle: {
    width: normalize(42),
    height: normalize(4),
    borderRadius: normalize(10),
    backgroundColor: "#D0D5DD",
    alignSelf: "center",
    marginBottom: normalize(18),
  },

  /* =========================
     HEADER
  ========================= */

  sheetHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: normalize(20),
  },

  sheetTitle: {
    flex: 1,
    fontSize: normalize(19),
    fontWeight: "700",
    color: "#102D58",
  },

  closeButton: {
    width: normalize(32),
    height: normalize(32),
    alignItems: "center",
    justifyContent: "center",
  },

  closeText: {
    fontSize: normalize(20),
    color: "#667085",
    fontWeight: "500",
  },

  /* =========================
     STATUS
  ========================= */

  statusContainer: {
    alignItems: "center",
    paddingVertical: normalize(8),
  },

  statusIconContainer: {
    width: normalize(82),
    height: normalize(82),
    borderRadius: normalize(41),
    alignItems: "center",
    justifyContent: "center",
  },

  statusMessage: {
    fontSize: normalize(15),
    color: "#667085",
    textAlign: "center",
    lineHeight: normalize(22),
    marginTop: normalize(16),
    paddingHorizontal: normalize(10),
  },

  /* =========================
     DONE BUTTON
  ========================= */

  doneButton: {
    height: normalize(50),
    borderRadius: normalize(10),
    backgroundColor: "#102D58",
    alignItems: "center",
    justifyContent: "center",
    marginTop: normalize(22),
  },

  doneText: {
    color: "#FFFFFF",
    fontSize: normalize(15),
    fontWeight: "700",
  },
});