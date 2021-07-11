import React, { useState } from 'react';
import { Text,View,TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import IconIo from 'react-native-vector-icons/Ionicons';


export default App = () => {

    return (
        
        <View style = {{flex: 1, margin: 20,justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#ff0"/>
        <Text>Harici Paket Yükleme</Text>
        </View>
 
    );
}