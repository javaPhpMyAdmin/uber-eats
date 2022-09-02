import { StyleSheet } from "react-native";

export const style = (activeTab, text) => {
  return StyleSheet.create({
    buttonContainer: {
      backgroundColor: activeTab === text ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    },
    buttonText: {
      color: activeTab === text ? "white" : "black",
      fontSize: 15,
      fontWeight: "900",
    },
  });
};
