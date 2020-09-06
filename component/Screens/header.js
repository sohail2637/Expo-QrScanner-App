import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "native-base";
import AsyncStorage from "@react-native-community/async-storage";

const Header = (props) => {
  const Logout = async (props) => {
    await AsyncStorage.removeItem("token").then(() => {
      props.Navigation.replace("login");
    });
  };
  return (
    <View
      style={{
        marginTop: 35,
        backgroundColor: "#3681EA",
        flexDirection: "row",
      }}
    >
      <TouchableOpacity
        // style={{ backgroundColor: "lightblue", marginTop: 30 }}
        onPress={() => {
          props.Navigation.navigate("draweropen");
        }}
      >
        <Ionicons
          name="md-menu"
          size={42}
          color="black"
          style={{ marginLeft: 25 }}
        />
        {/* <Text>this app</Text>                 */}
      </TouchableOpacity>
      <Button
        style={{
          marginLeft: 240,
        }}
        onPress={() => {
          Logout();
          alert("this is log out");
        }}
      >
        <Text>Logout</Text>
      </Button>
    </View>
  );
};

export default Header;
