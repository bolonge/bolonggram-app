import React from "react";
import { View } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Home from "../screens/Tabs/Home";
import Notification from "../screens//Tabs/Notification";
import Search from "../screens/Tabs/Search";
import Profile from "../screens/Tabs/Profile";
import MessageLink from "../components/MessageLink";

const stackFactory = (initialRoute, customConfig) =>
  createStackNavigator({
    InitialRoute: {
      screen: initialRoute,
      navigationOptions: {
        ...customConfig
      }
    }
  });

export default createBottomTabNavigator({
  Home: {
    screen: stackFactory(Home, {
      title: "Home",
      headerRight: <MessageLink />
    })
  },
  Search: {
    screen: stackFactory(Search, { title: "Search" })
  },
  Add: {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => {
        navigation.navigate("PhotoNavigation");
      }
    }
  },
  Notification: {
    screen: stackFactory(Notification, { title: "Notification" })
  },
  Profile: {
    screen: stackFactory(Profile, { title: "Profile" })
  }
});
