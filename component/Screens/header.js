import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

const Header = (props) => {
    return (
        <TouchableOpacity   style={{backgroundColor:"#00ced1"}}
         onPress={() => {
            Navigation.navigate('draweropen ');
                    }}>
            <View style={{ marginLeft: 10 }}>
                <Ionicons name="md-menu" size={32} color="red" />
            </View>
        </TouchableOpacity>
    );

}

export default Header;