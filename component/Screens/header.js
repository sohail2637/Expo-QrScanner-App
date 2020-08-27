import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

const Header = (props) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: "lightblue", marginTop: 30 }}
      onPress={() => {
        props.Navigation.navigate("draweropen");
      }}
    >
      <View style={{ margin: 5 }}>
        <Ionicons name="md-menu" size={32} color="black" />
        {/* <Text>this app</Text>                 */}
      </View>
    </TouchableOpacity>
  );
};

export default Header;
