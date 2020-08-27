import React, { Component } from "react";
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
import { createStackNavigator } from "@react-navigation/stack";

export default class FloatingLabelExample extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  render() {
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
                <Input />
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
                <Input />
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
                  alert("this is Signiup page");
                }}
              >
                <Text>LogIn</Text>
              </Button>
              <TouchableOpacity>
                <Text
                  onPress={() => {
                    this.props.navigation.navigate("signup");
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
  }
}
