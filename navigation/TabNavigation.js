import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Home from "../screens/Tabs/Home";
import Notification from "../screens//Tabs/Notification";
import Search from "../screens/Tabs/Search";
import Profile from "../screens/Tabs/Profile";

export default createBottomTabNavigator({
  Home,
  Search,
  Add: {
    screen: View,
    navigationOptions: {
      topBarOnPress: ({ navigation }) => {
        navigation.navigate("PhotoNavigation");
      }
    }
  },
  Notification,
  Profile
});
