import * as React from "react";
import { Button, View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

export default class AboutScreen extends React.Component {
  render() {
    const { defvalue } = this.props.route.params;
    const { mydata } = this.props.route.params;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Text>{mydata==="" ? defvalue : mydata}</Text> */}
        <Text
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        >
          home Screen
        </Text>
        <Text>About Screen</Text>
        <Button
          title="Home"
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />
        <Button
          title="Contact"
          onPress={() => {
            this.props.navigation.navigate("Contact", {
              mydata: "this is about route",
            });
          }}
        />

        <Text> go back in queu onPress</Text>
        <Button
          title="BACK"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Text> go back in deep depth to direact on home screen</Text>

        <Button
          title="BACK TO HOME"
          onPress={() => {
            this.props.navigation.popToTop();
          }}
        />
      </View>
    );
  }
}
