import { normalize } from "@/constants/normalize";
import { StyleSheet } from "react-native";

export const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        "#FFFFFF",
    },

    content: {
      paddingHorizontal:
        normalize(20),
      paddingTop:
        normalize(24),
      paddingBottom:
        normalize(40),
    },

    heading: {
      fontSize:
        normalize(24),
      fontWeight: "700",
      color: "#102D58",
    },

    description: {
      fontSize:
        normalize(14),
      color: "#718096",
      marginTop:
        normalize(6),
      marginBottom:
        normalize(20),
      lineHeight:
        normalize(20),
    },

    label: {
      fontSize:
        normalize(14),
      fontWeight: "600",
      color: "#102D58",
      marginBottom:
        normalize(8),
      marginTop:
        normalize(12),
    },

    inputContainer: {
      marginBottom: 0,
    },

    disabledInput: {
      backgroundColor:
        "#F1F5F9",
    },

    helperText: {
      fontSize:
        normalize(12),
      color: "#718096",
      marginTop:
        normalize(7),
    },

    doneButton: {
      height:
        normalize(50),
      borderRadius:
        normalize(10),
      backgroundColor:
        "#102D58",
      marginTop:
        normalize(30),
    },

    doneButtonText: {
      color: "#FFFFFF",
      fontSize:
        normalize(15),
      fontWeight: "700",
    },
  });