import React from 'react'
import { Linking } from 'react-native';
import { View, Text, Button, Icon, } from 'native-base';

const HelpScreen = () => {
               
    const url='https://en.wikipedia.org/wiki/QR_code#:~:text=The%20QR%20code%20system%20was,allow%20high%2Dspeed%20component%20scanning';
    return (
        <View>
            <Text style={{paddingLeft: 5, textAlign: 'center', fontSize: 24 }}>QR code</Text>
            <Text>Description : </Text>
            <Text
                style={{justifyContent: 'center', alignItems: 'center' }}>
                A QR code is a type of matrix barcode first
                designed in 1994 for the automotive industry in Japan.
                A barcode is a machine-readable optical label that contains
                  information about the item to which it is attached. Wikipedia</Text>
            <Button iconLeft info
                onPress={() =>
                    Linking.openURL(url)
                }>
                <Icon name='beer' />
                <Text>Help</Text>
            </Button>
        </View>
    )
}
export default HelpScreen;
