import React from "react";
import {TabNavigator} from "react-navigation";
import HomeScreen from "./Home";
import AboutScreen from "./About";

export default TabNavigator(
  {
    Home: {screen: HomeScreen},
    About: {screen: AboutScreen}
  },
  {
    initialRouteName: "Home"
  }
);