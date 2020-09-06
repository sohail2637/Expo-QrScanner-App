import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  View,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const LoginScreen = (props) => {
  const detectLogin = async () => {
    const token = await AsyncStorage.setItem("token");
    if (token) {
      props.navigation.replace("Home");
    } else {
      props.navigation.replace("login");
    }
  };
  useEffect(async () => {
    detectLogin();
  }, []);

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const sendCred = async (props) => {
    // console.log(props + "....this is login form data " + email, password);
    fetch("https://9e4c184a750e.ngrok.io/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: {
        email: email,
        password: password,
      },
    })
      .then((res) => res.json())
      .then(async (data) => {
        try {
          await AsyncStorage.setItem("token", data.token);
          console.log(data.token + "this  is login page");
        } catch (e) {
          console.log("error in login form ", e);
          props.navigate.replace("Home");
        }
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
              Login with email
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
              <Input
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
              <Input
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
              onPress={() => {
                sendCred();
              }}
            >
              <Text>LogIn</Text>
            </Button>
            <TouchableOpacity>
              <Text
                onPress={() => {
                  props.navigation.navigate("signup");
                }}
                style={{
                  fontSize: 18,
                  marginLeft: 20,
                  marginTop: 20,
                }}
              >
                dont have a account ?
              </Text>
            </TouchableOpacity>
          </Form>
        </KeyboardAvoidingView>
      </Content>
    </Container>
  );
};

export default LoginScreen;
