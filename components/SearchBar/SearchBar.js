import { Text, View } from "react-native";
import React, { useState } from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { GOOGLE_MAPS_DIRECTIONS_API } from "@env";

export const SearchBar = ({ setSearched }) => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        onPress={(data, details = null) => {
          setSearched(data.description.split(",")[0]);
        }}
        debounce={400}
        enablePoweredByContainer={false}
        fetchDetails={true}
        minLength={2}
        query={{
          key: GOOGLE_MAPS_DIRECTIONS_API,
          language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              style={{ marginRight: 6 }}
              name="clockcircle"
              size={11}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
};
