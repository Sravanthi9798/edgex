import { normalize } from "@/constants/normalize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  /* =========================
     CONTAINER
  ========================= */

  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  /* =========================
     MAIN CONTENT
  ========================= */

  content: {
    flex: 1,
    paddingHorizontal: normalize(20),
  },

  /* =========================
     PAGE TITLE
  ========================= */
successCircle: {
  width: normalize(82),
  height: normalize(82),
  borderRadius: normalize(42),
  backgroundColor: "#66c888",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  marginTop: normalize(30),
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

  /* =========================
     DETAILS CARD
  ========================= */
  title: {
    marginTop: normalize(24),
    textAlign: "center",
    color: "#122342",
    fontSize: normalize(21),
    fontWeight: "700",
  },

  subtitle: {
    marginTop: normalize(5),
    textAlign: "center",
    color: "#7A8798",
    fontSize: normalize(12),
    lineHeight: normalize(18),
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

  /* =========================
     DETAIL ROW
  ========================= */

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

  /* =========================
     PRIMARY BUTTON
  ========================= */

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

  /* =========================
     SECONDARY BUTTON
  ========================= */

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
      viewAssetButton: {
    height: normalize(48),
    marginTop: normalize(18),
    backgroundColor: "#003B7A",
    borderRadius: normalize(8),
  },

  viewAssetButtonText: {
    color: "#FFFFFF",
    fontSize: normalize(14),
    fontWeight: "600",
  },
    buttonsContainer: {
    // marginTop: 'auto',
    gap: normalize(9),
    paddingBottom: normalize(60),
  },
    backToButton: {
    height: normalize(46),
    borderRadius: normalize(9),
    backgroundColor: '#FFFFFF',
    borderWidth: normalize(1.5),
    borderColor: '#6B91C4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backToButtonText: {
    color: '#063B86',
    fontSize: normalize(14),
    fontWeight: '700',
  },
});