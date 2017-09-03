import React from "react";
import {Text, TouchableOpacity} from "react-native";
import {DrawerNavigator} from "react-navigation";
import HomeScreen from "./Home";
import AboutScreen from "./About";
import {Ionicons} from '@expo/vector-icons';

const Internal = DrawerNavigator(
  {
    Home: {screen: HomeScreen},
    About: {screen: AboutScreen}
  },
  {
    initialRouteName: "Home"
  }
);

Internal.navigationOptions = ({navigation}) => ({
  headerLeft: (
    <TouchableOpacity
      style={{paddingHorizontal: 20}}
      onPress={() => {
        //https://reactnavigation.org/docs/navigators/drawer
        //Index is 0 when drawer closed -> https://stackoverflow.com/a/45122848
        if (navigation.state.index === 0) {
          navigation.navigate("DrawerOpen");
        } else {
          navigation.navigate("DrawerClose");
        }
      }}
    >
      <Ionicons name="md-menu" size={32}/>
    </TouchableOpacity>
  )
});

export default Internal;