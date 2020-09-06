import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  InputText,
  Label,
  Button,
  Text,
  View,
  Body,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

// export default class FloatingLabelExample extends Component {
const Signiupscreen = (props) => {
  useEffect(async () => {
    const token = await AsyncStorage.setItem("token");
    if (token) {
      props.navigation.navigate("login");
    } else {
      setLogded(false);
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const sendCred = async () => {
    console.log(email, password);
    fetch("https://cfac86950ae7.ngrok.io/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then(async (data) => {
        console.log(data);
        alert(data.token);
        try {
          await AsyncStorage.setItem("token", data.token);
          props.navigate.replace("Home");
        } catch (e) {
          console.log("error in sinup form ", e);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Content style={{ backgroundColor: "#b3b3b3" }}>
        <KeyboardAvoidingView behavior="padding">
          <Form>
            <Text
              style={{
                fontSize: 35,
                marginLeft: 18,
                marginTop: 40,
                color: "#3b3b3b",
              }}
            >
              Welcome to
            </Text>
            <Text
              style={{
                fontSize: 30,
                marginLeft: 18,
                marginTop: 10,
                color: "blue",
              }}
            >
              Qr Scanner App
            </Text>
            <View
              style={{
                borderBottomColor: "blue",
                borderBottomWidth: 4,
                borderRadius: 10,
                marginLeft: 20,
                marginRight: 120,
              }}
            />
            <Text
              style={{
                fontSize: 20,
                marginLeft: 18,
                marginTop: 20,
              }}
            >
              Create new accout
            </Text>
            <Item
              rounded
              last
              style={{
                marginLeft: 18,
                marginTop: 18,
                marginRight: 18,
              }}
            >
              <Label>Email</Label>
              <InputText
                value={email}
                onChangeText={(text) => {
                  setEmail(text);
                }}
              />
            </Item>
            <Item
              rounded
              last
              style={{
                marginLeft: 18,
                marginTop: 18,
                marginRight: 18,
              }}
            >
              <Label>Password</Label>
              <InputText
                secureTextEntry={true}
                value={password}
                onChangeText={(password) => {
                  setpassword(password);
                }}
              />
            </Item>
            <Button
              rounded
              block
              style={{
                marginLeft: 18,
                marginTop: 22,
                marginRight: 18,
                backgroundColor: "#1e90ff",
              }}
              onPress={() => sendCred()}
            >
              <Text>Signup</Text>
            </Button>
            <TouchableOpacity>
              <Text
                onPress={() => {
                  props.navigation.navigate("login");
                }}
                style={{
                  fontSize: 18,
                  marginLeft: 20,
                  marginTop: 20,
                }}
              >
                already have a account ?
              </Text>
            </TouchableOpacity>
          </Form>
        </KeyboardAvoidingView>
      </Content>
    </Container>
  );
};

export default Signiupscreen;
