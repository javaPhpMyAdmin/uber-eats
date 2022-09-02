import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { style } from "./HeaderButton.styles";

export const HeaderButton = ({
  activeTab,
  setActiveTab,
  text,
  btnColor,
  textColor,
}) => {
  const styles = new style(activeTab, text);
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => setActiveTab(text)}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
