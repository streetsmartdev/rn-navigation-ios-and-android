import React from "react";
import {StackNavigator} from "react-navigation";
import LoginScreen from "./external/Login";
import Internal from "./internal";

export default StackNavigator(
  {
    External: {screen: LoginScreen},
    Internal: {screen: Internal}
  },
  {
    initialRouteName: "External"
  }
);