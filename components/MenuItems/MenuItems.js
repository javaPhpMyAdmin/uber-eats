import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useDispatch } from "react-redux";

const items = [
  {
    title: "Lasagna",
    description: "With Butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://t3.ftcdn.net/jpg/01/00/52/14/360_F_100521407_15ViliDWGLkB1N6Lwh5DQg9MePJa5tbw.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "With Butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://image.shutterstock.com/image-photo/arabian-spicy-food-concept-homemade-260nw-1199926645.jpg",
  },
  {
    title: "Chilaquiles",
    description: "With Butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://st3.depositphotos.com/1373322/15052/i/450/depositphotos_150524334-stock-photo-tortillas-with-tomato-salsa-chicken.jpg",
  },
  {
    title: "Lasagna",
    description: "With Butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://t3.ftcdn.net/jpg/01/00/52/14/360_F_100521407_15ViliDWGLkB1N6Lwh5DQg9MePJa5tbw.jpg",
  },
  {
    title: "Tandoori Chicken",
    description: "With Butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://image.shutterstock.com/image-photo/arabian-spicy-food-concept-homemade-260nw-1199926645.jpg",
  },
  {
    title: "Chilaquiles",
    description: "With Butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://st3.depositphotos.com/1373322/15052/i/450/depositphotos_150524334-stock-photo-tortillas-with-tomato-salsa-chicken.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export const MenuItems = ({ restaurantName }) => {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {items.map((item, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              onPress={(checkboxValue) => selectItem(item, checkboxValue)}
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
            />
            <FoodInfo food={item} />
            <FoodImage food={item} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = ({ food }) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage = ({ food }) => (
  <View>
    <Image
      source={{ uri: food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
