import React from "react";
import {StyleSheet} from "react-native";
import {Button, Text, View} from "react-native";
import {NavigationActions} from "react-navigation";

class LoginScreen extends React.Component {
  render() {
    const reset = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: "Internal"})]
    });
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React navigator - Login</Text>
        <Button
          onPress={() => this.props.navigation.dispatch(reset)}
          title="Login"
        />
      </View>
    );
  }
}

LoginScreen.navigationOptions = {
  title: "Login",
  header: null
};

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

export default LoginScreen;