import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {getNavigationOption} from "../../helpers/navigationHelper";

class AboutScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React navigator - About</Text>
      </View>
    );
  }
}

AboutScreen.navigationOptions = getNavigationOption("About", "person");

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


export default AboutScreen;