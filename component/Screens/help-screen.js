import React from 'react'
import { View, Text, Button, Icon } from 'native-base';

const HelpScreen = () => {
    return (
        <View>
            <Text style={{ textAlign: 'center', }}>QR code</Text>
            <Text>Description : </Text>
            <Text>A QR code is a type of matrix barcode first
            designed in 1994 for the automotive industry in Japan.
            A barcode is a machine-readable optical label that contains
                  information about the item to which it is attached. Wikipedia</Text>
            <Button iconLeft  info
                onPress={() => { this.props.navigation.navigate( alert('dont touch me')
                //    ' https://en.wikipedia.org/wiki/QR_code#:~:text=The%20QR%20code%20system%20was,allow%20high%2Dspeed%20component%20scanning'
                   )}}>
                <Icon name='beer' />
                <Text>Help</Text>
            </Button>
        </View>
    )
}
export default HelpScreen;