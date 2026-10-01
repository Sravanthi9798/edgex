import { normalize } from "@/constants/normalize";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f5f3f3",
  },

  content: {
    flex: 1,
    paddingHorizontal: normalize(22),
  },

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
    fontSize: normalize(50),
    lineHeight: normalize(60),
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

  fieldContainer: {
    marginTop: normalize(18),
  },

  label: {
    marginBottom: normalize(6),
    color: "#17243A",
    fontSize: normalize(12),
    fontWeight: "500",
  },

  inputContainer: {
    height: normalize(48),
    borderWidth: 1,
    borderColor: "#D9E0E8",
    borderRadius: normalize(8),
    backgroundColor: "#FFFFFF",
  },

  inputIcon: {
    color: "#718096",
    fontSize: normalize(17),
    width: normalize(20),
    textAlign: "center",
  },

  eyeIcon: {
    color: "#718096",
    fontSize: normalize(14),
    width: normalize(20),
    textAlign: "center",
  },

  forgotContainer: {
    alignSelf: "flex-end",
    marginTop: normalize(9),
  },

  forgotText: {
    color: "#006EFF",
    fontSize: normalize(11),
    fontWeight: "500",
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

  orLine: {
    flex: 1,
    height: normalize(1),
    backgroundColor: "#E1E5EA",
  },

  orText: {
    marginHorizontal: normalize(14),
    color: "#687586",
    fontSize: normalize(11),
    fontWeight: "400",
  },

  microsoftButton: {
    height: normalize(48),
    backgroundColor: "#FFFFFF",
    borderWidth: normalize(1),
    borderColor: "#B8C4D2",
    borderRadius: normalize(8),
  },

  microsoftButtonText: {
    color: "#18263A",
    fontSize: normalize(13),
    fontWeight: "500",
  },

  microsoftIcon: {
    width: normalize(18),
    height: normalize(18),
    flexDirection: "row",
    flexWrap: "wrap",
    marginRight: normalize(2),
  },

  microsoftSquare: {
    width: normalize(7),
    height: normalize(7),
    marginRight: normalize(1),
    marginBottom: normalize(1),
  },

  red: {
    backgroundColor: "#F25022",
  },

  green: {
    backgroundColor: "#7FBA00",
  },

  blue: {
    backgroundColor: "#00A4EF",
  },

  yellow: {
    backgroundColor: "#FFB900",
  },

  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: normalize(22),
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
