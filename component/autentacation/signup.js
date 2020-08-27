import React, { Component, useState } from "react";
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
  Body,
} from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAvoidingView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// export default class FloatingLabelExample extends Component {
const Signiupscreen = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = { loading: true };
  // }
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  SignupDataPost = () => {
    // alert(email);
    fetch("https://10.0.2.2:3000/signup", {
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
      .then((data) => console.log(data));
  };
  // render() {
  return (
    <Container>
      <Content>
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
              <Input
                value={email}
                onChange={(text) => {
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
                onChange={(password) => {
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
              onPress={() => SignupDataPost()}
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
