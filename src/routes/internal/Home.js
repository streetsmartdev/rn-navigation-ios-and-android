import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {getNavigationOption} from "../../helpers/navigationHelper";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React navigator - Home</Text>
      </View>
    );
  }
}

HomeScreen.navigationOptions = getNavigationOption("Home", "home");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});


export default HomeScreen;