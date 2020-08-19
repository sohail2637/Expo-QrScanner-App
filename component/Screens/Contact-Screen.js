import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Contact extends React.Component {
  render(){
    // //  abstracation value from home screen
    const value="Hello this is contact screen";
    const {mydata}=this.props.route.params;
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{mydata === "" ? value : mydata}</Text>
      <Text>Contact  Screen</Text>
      <Text>Contact  Screen</Text>
      <Button title="Home" onPress={()=>{this.props.navigation.navigate("Home")}}/>
      <Button title="About" onPress={()=>{this.props.navigation.navigate("About",mydata)}}/>
    
    </View>
  );
}
}
