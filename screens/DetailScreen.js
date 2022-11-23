import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { About, MenuItems, ViewCart } from "../components";

export const DetailScreen = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name}/>
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};
