import React from "react";
import {Platform} from "react-native";
import {Ionicons} from '@expo/vector-icons';

export const getNavigationOption = (title, icon) => ({
  title,
  ...Platform.select({
    ios: {
      tabBarIcon: ({tintColor}) => (
        <Ionicons name={`ios-${icon}`} size={32} color={tintColor}/>
      )
    },
    android: {
      drawerIcon: ({tintColor}) => (
        <Ionicons name={`md-${icon}`} size={32} color={tintColor}/>
      )
    }
  })
});