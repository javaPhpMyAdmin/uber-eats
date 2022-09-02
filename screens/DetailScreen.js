import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { About, MenuItems } from "../components";

export const DetailScreen = ({route}) => {
  return (
    <View>
      <About route={route}/>
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
};
