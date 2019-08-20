import { createStackNavigator, createAppContainer } from "react-navigation";
import Signup from "../screens/Auth/Signup";
import Confirm from "../screens/Auth/Confirm";
import AuthHome from "../screens/Auth/AuthHome";
import Login from "../screens/Auth/Login";

const AuthNavigation = createStackNavigator(
  {
    AuthHome,
    Signup,
    Login,
    Confirm
  },
  {
    headerMode: "none"
  }
);

export default createAppContainer(AuthNavigation);
