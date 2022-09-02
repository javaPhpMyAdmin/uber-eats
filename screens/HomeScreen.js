import { SafeAreaView, ScrollView, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Categories,
  HeaderTabs,
  SearchBar,
  RestaurantItems,
  BottomTabs,
} from "../components";
import { YELP_API } from "@env";
import { Divider } from "react-native-elements";

export const HomeScreen = ({navigation}) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [searched, setSearched] = useState("Los Angeles");
  const [activeTab, setActiveTab] = useState("Delivery");
  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${searched}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API}`,
      },
    };
    const data = await fetch(yelpUrl, apiOptions);
    const restaurants = await data.json();
    setRestaurantData(
      restaurants.businesses.filter((business) =>
        business.transactions.includes(activeTab.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [searched, activeTab]);
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setSearched={setSearched} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};
