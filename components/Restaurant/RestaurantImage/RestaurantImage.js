import { Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const RestaurantImage = ({ image_url }) => {
  return (
    <>
      <Image
        style={{
          width: "100%",
          height: 180,
        }}
        source={{ uri: image_url }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
      </TouchableOpacity>
    </>
  );
};
