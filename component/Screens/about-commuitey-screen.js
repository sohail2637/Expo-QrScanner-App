import React from "react";
import { View, Text, Button, Icon } from "native-base";
import { Linking, StyleSheet } from "react-native";

const AboutCommunitey = () => {
  return (
    <View>
      <Text style={{ paddingLeft: 5, textAlign: "center", fontSize: 24 }}>
        Hello I am MERN stack and android Developer
      </Text>
      <Text
        style={{
          paddingLeft: 5,
          textAlign: "center",
          fontSize: 20,
          marginTop: 10,
        }}
      >
        Get code
      </Text>
      <Text
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        This is an open-source code use it anywhere
      </Text>
      <Button
        block
        rounded
        dark
        onPress={() =>
          Linking.openURL("https://github.com/sohail2637/Expo-QrScanner-App")
        }
      >
        <Icon name="beer" />
        <Text>github</Text>
      </Button>
      <Text
        style={{
          paddingLeft: 5,
          textAlign: "center",
          fontSize: 20,
          marginTop: 10,
        }}
      >
        For developed products
      </Text>
      <Button
        block
        rounded
        success
        onPress={() =>
          Linking.openURL(
            "https://www.fiverr.com/msohailmaqsood/develop-your-custom-website-using-mern-technologies"
          )
        }
      >
        <Icon name="beer" />
        <Text>Fiverr</Text>
      </Button>
      <Button
        block
        rounded
        warning
        onPress={() =>
          Linking.openURL(
            "https://www.peopleperhour.com/freelancer/m-sohail/web-developer/2783540/"
          )
        }
      >
        <Icon name="beer" />
        <Text>peopleperhour</Text>
      </Button>
      <Text
        style={{
          paddingLeft: 5,
          textAlign: "center",
          fontSize: 20,
          marginTop: 10,
        }}
      >
        contact us and give suggestion
      </Text>
      <Button
        block
        rounded
        info
        onPress={() =>
          Linking.openURL(
            "https://www.facebook.com/profile.php?id=100006134478881"
          )
        }
      >
        <Icon name="beer" />
        <Text>facebook</Text>
      </Button>
    </View>
  );
};
export default AboutCommunitey;
