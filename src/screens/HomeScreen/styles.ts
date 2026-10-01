import { normalize } from "@/constants/normalize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    paddingTop: normalize(20),
  },

  textContent: {
    color: "#526783",
    fontSize: normalize(16),
    fontWeight: "500",
    marginBottom: normalize(14),
  },

  /* =========================
     ACTION CARDS
  ========================= */

  actionsContainer: {
    width: "100%",
    gap: normalize(10),
  },

  actionCard: {
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

  actionCardPressed: {
    backgroundColor: "#EEF5FF",
    transform: [{ scale: 0.99 }],
  },

  actionIconContainer: {
    width: normalize(42),
    alignItems: "center",
    justifyContent: "center",
    marginRight: normalize(10),
  },

  actionTextContainer: {
    flex: 1,
    justifyContent: "center",
  },

  actionTitle: {
    color: "#102A54",
    fontSize: normalize(14),
    fontWeight: "700",
    marginBottom: normalize(3),
  },

  actionSubtitle: {
    color: "#70819A",
    fontSize: normalize(11),
    fontWeight: "400",
  },

  /* =========================
     MORE BUTTON
  ========================= */

  moreButton: {
    width: "100%",
    height: normalize(44),

    marginTop: normalize(14),

    backgroundColor: "#FFFFFF",

    borderWidth: normalize(1.5),
    borderColor: "#527EBA",

    borderRadius: normalize(8),

    alignItems: "center",
    justifyContent: "center",
  },

  moreButtonPressed: {
    backgroundColor: "#F2F7FD",
  },

  moreText: {
    color: "#123D78",
    fontSize: normalize(13),
    fontWeight: "700",
  },

  /* =========================
     BOTTOM NAVIGATION
  ========================= */

  bottomNavigation: {
    height: normalize(64),

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    backgroundColor: "#FFFFFF",

    borderTopWidth: normalize(1),
    borderTopColor: "#EEF1F5",

    paddingHorizontal: normalize(20),
  },

  bottomNavItem: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },

  bottomNavText: {
    marginTop: normalize(3),

    color: "#687991",

    fontSize: normalize(10),
    fontWeight: "500",
  },

  activeNavText: {
    color: "#096CF2",
    fontWeight: "700",
  },

  /* =========================
     OLD / OPTIONAL STYLES
  ========================= */

  backButton: {
    position: "absolute",
    top: normalize(14),
    left: normalize(20),
    width: normalize(30),
    height: normalize(30),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },

  backIcon: {
    fontSize: normalize(32),
    color: "#13294B",
    fontWeight: "300",
    lineHeight: normalize(32),
  },

  logoContainer: {
    marginTop: normalize(52),
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "flex-start",
  },

  logoText: {
    fontSize: normalize(42),
    lineHeight: normalize(46),
    color: "#092B5B",
    fontWeight: "700",
    letterSpacing: -normalize(2),
  },

  logoBlue: {
    color: "#1683F8",
  },

  logoRegistered: {
    color: "#092B5B",
    fontSize: normalize(8),
    fontWeight: "600",
    marginTop: normalize(3),
    marginLeft: normalize(2),
  },

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

  loginButton: {
    height: normalize(48),
    marginTop: normalize(18),
    backgroundColor: "#003B7A",
    borderRadius: normalize(8),
  },

  loginButtonText: {
    color: "#FFFFFF",
    fontSize: normalize(14),
    fontWeight: "600",
  },

  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: normalize(17),
    marginBottom: normalize(17),
  },

  signupText: {
    color: "#4D5968",
    fontSize: normalize(11),
  },

  signupLink: {
    marginLeft: normalize(5),
    color: "#006EFF",
    fontSize: normalize(11),
    fontWeight: "500",
  },
});
