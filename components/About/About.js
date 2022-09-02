import { Image, Text, View } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "Farmhouse kitchen Tahi Cuisine",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeLg5rVQxS9rybm_OULK_DwsGX4YNynby-lrXUyLby&s",
  price: "$$",
  reviews: "1500",
  rating: 4.5,
  categories: [
    { title: "Thai" },
    { title: "Comfort Food" },
    { title: "Coffee" },
  ],
};

export const About = ({ route }) => {
  const { name, image, price, review_count, rating, categories } = route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(" • ");
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${review_count}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = ({ title }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {title}
  </Text>
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {description}
  </Text>
);
