import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
export default class FloatingLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header  style={{backgroundColor:'#1e90ff'}} />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button onPress={(e) => { alert('this is login page'); console.log("this is ",e)}} block info>
              <Text>Login</Text>
            </Button>

          </Form>
        </Content>
      </Container>
    );
  }
}

