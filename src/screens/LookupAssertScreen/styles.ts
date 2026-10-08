import { StyleSheet } from "react-native";
import { normalize } from "@/constants/normalize";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollContent: {
    paddingHorizontal: normalize(16),
    paddingBottom: normalize(25),
  },
  assertInputContainer: {
    height: normalize(48),
    borderWidth: 1,
    borderColor: "#D9E0E8",
    borderRadius: normalize(8),
    backgroundColor: "#FFFFFF",
  },
  heading: {
    marginTop: normalize(16),
    color: "#102A54",
    fontSize: normalize(20),
    fontWeight: "700",
  },

  description: {
    marginTop: normalize(2),
    color: "#70819A",
    fontSize: normalize(13),
  },

  label: {
    marginTop: normalize(14),
    marginBottom: normalize(6),
    color: "#102A54",
    fontSize: normalize(13),
    fontWeight: "600",
  },

  searchContainer: {
    height: normalize(48),
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DCE7F4",
    borderRadius: normalize(10),
    paddingHorizontal: normalize(12),
    backgroundColor: "#FFFFFF",
  },

  input: {
    flex: 1,
    marginLeft: normalize(8),
    color: "#102A54",
    fontSize: normalize(12),
  },

  scanSmallButton: {
    width: normalize(32),
    height: normalize(32),
    alignItems: "center",
    justifyContent: "center",
  },

  scanCard: {
    height: normalize(120),
    marginTop: normalize(10),
    borderRadius: normalize(10),
    backgroundColor: "#EAF4FF",
    alignItems: "center",
    justifyContent: "center",
  },

  scanCardPressed: {
    backgroundColor: "#DCEEFF",
  },

  scanTitle: {
    marginTop: normalize(4),
    color: "#183D87",
    fontSize: normalize(13),
    fontWeight: "700",
  },

  scanCorners: {
    position: "absolute",
    width: "72%",
    height: "70%",
  },

  topLeft: {
    position: "absolute",
    left: 0,
    top: 0,
    width: normalize(18),
    height: normalize(18),
    borderLeftWidth: 3,
    borderTopWidth: 3,
    borderColor: "#1269E8",
  },

  topRight: {
    position: "absolute",
    right: 0,
    top: 0,
    width: normalize(18),
    height: normalize(18),
    borderRightWidth: 3,
    borderTopWidth: 3,
    borderColor: "#1269E8",
  },

  bottomLeft: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: normalize(18),
    height: normalize(18),
    borderLeftWidth: 3,
    borderBottomWidth: 3,
    borderColor: "#1269E8",
  },

  bottomRight: {
    position: "absolute",
    right: 0,
    bottom: 0,
    width: normalize(18),
    height: normalize(18),
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderColor: "#1269E8",
  },

  tabContainer: {
    height: normalize(38),
    flexDirection: "row",
    marginTop: normalize(12),
    borderBottomWidth: 1,
    borderBottomColor: "#E1E9F3",
  },

  activeTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#1269E8",
  },

  inactiveTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  activeTabText: {
    color: "#1269E8",
    fontSize: normalize(12),
    fontWeight: "700",
  },

  inactiveTabText: {
    color: "#8291A5",
    fontSize: normalize(12),
  },

  tagsContainer: {
    marginTop: normalize(5),
    borderWidth: 1,
    borderColor: "#E1E9F3",
    borderRadius: normalize(10),
    overflow: "hidden",
  },

  tagItem: {
    minHeight: normalize(58),
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: normalize(10),
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E8EEF5",
  },

  tagPressed: {
    backgroundColor: "#F4F8FD",
  },

  tagIconContainer: {
    width: normalize(44),
    alignItems: "center",
    justifyContent: "center",
  },

  tagTextContainer: {
    flex: 1,
  },

  tagId: {
    color: "#243C64",
    fontSize: normalize(11),
    fontWeight: "700",
  },

  tagType: {
    marginTop: normalize(2),
    color: "#7B8BA1",
    fontSize: normalize(10),
  },

  searchButton: {
    height: normalize(45),
    marginTop: normalize(12),
    borderRadius: normalize(9),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0753A8",
  },

  searchButtonPressed: {
    backgroundColor: "#06458C",
  },

  searchButtonText: {
    color: "#FFFFFF",
    fontSize: normalize(14),
    fontWeight: "700",
  },
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
  height: normalize(90),
  paddingTop: normalize(35),
  paddingHorizontal: normalize(18),
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "rgba(0, 0, 0, 0.45)",
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
  height: normalize(190),
  position: "relative",
},

scannerTopLeft: {
  position: "absolute",
  left: 0,
  top: 0,
  width: normalize(35),
  height: normalize(35),
  borderLeftWidth: 4,
  borderTopWidth: 4,
  borderColor: "#FFFFFF",
},

scannerTopRight: {
  position: "absolute",
  right: 0,
  top: 0,
  width: normalize(35),
  height: normalize(35),
  borderRightWidth: 4,
  borderTopWidth: 4,
  borderColor: "#FFFFFF",
},

scannerBottomLeft: {
  position: "absolute",
  left: 0,
  bottom: 0,
  width: normalize(35),
  height: normalize(35),
  borderLeftWidth: 4,
  borderBottomWidth: 4,
  borderColor: "#FFFFFF",
},

scannerBottomRight: {
  position: "absolute",
  right: 0,
  bottom: 0,
  width: normalize(35),
  height: normalize(35),
  borderRightWidth: 4,
  borderBottomWidth: 4,
  borderColor: "#FFFFFF",
},

scannerInstruction: {
  marginTop: normalize(20),
  paddingHorizontal: normalize(25),
  color: "#FFFFFF",
  fontSize: normalize(13),
  textAlign: "center",
},

cameraBottom: {
  minHeight: normalize(120),
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: normalize(20),
  backgroundColor: "rgba(0, 0, 0, 0.45)",
},

cameraBottomText: {
  color: "#FFFFFF",
  fontSize: normalize(13),
  textAlign: "center",
},
   lookUpButton: {
    height: normalize(48),
    marginTop: normalize(18),
    backgroundColor: "#003B7A",
    borderRadius: normalize(8),
  },

  lookUpButtonText: {
    color: "#FFFFFF",
    fontSize: normalize(14),
    fontWeight: "600",
  },
});