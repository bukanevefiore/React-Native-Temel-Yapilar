/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Text,View,TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';


export default App = () => {

    return (

        <View style = {{flex: 1, margin: 20,justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="star" size={72} color="#ff0"/>
            <Text>Harici Paket Yükleme</Text>
        </View>

    );
}