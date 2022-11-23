import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { HomeScreen  } from "./screens/HomeScreen";
import {DetailScreen } from "./screens/DetailScreen";
import {Provider as ReduxProvider} from 'react-redux'
import configureStore from './redux/store'

const store = configureStore()
const screenOptions = {
  headerShown: false,
};
export const RootNavigation = () => {

const Stack = createStackNavigator();

  return (
    <ReduxProvider store={store}>    
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};
