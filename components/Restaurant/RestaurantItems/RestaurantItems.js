import { TouchableOpacity, View } from "react-native";
import React from "react";
import { RestaurantImage } from "../RestaurantImage/RestaurantImage";
import { RestaurantInfo } from "../RestaurantInfo/RestaurantInfo";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static3.depositphotos.com/1003631/209/i/600/depositphotos_2099183-stock-photo-fine-table-setting-in-gourmet.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://img.freepik.com/premium-photo/cozy-restaurant-with-people-waiter_175935-230.jpg?w=2000",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

export const RestaurantItems = ({ restaurantData, navigation }) => {
  return (
    <>
      {restaurantData
        ? restaurantData.map((restaurant, index) => (
            <TouchableOpacity
              activeOpacity={1}
              key={index}
              onPress={() =>
                navigation.navigate("Detail", {
                  name: restaurant.name,
                  image: restaurant.image_url,
                  price: restaurant.price,
                  review_count: restaurant.review_count,
                  rating: restaurant.rating,
                  categories: restaurant.categories,
                })
              }
            >
              <View
                style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
              >
                <RestaurantImage image_url={restaurant?.image_url} />
                <RestaurantInfo
                  name={restaurant?.name}
                  rating={restaurant?.rating}
                />
              </View>
            </TouchableOpacity>
          ))
        : null}
    </>
  );
};
