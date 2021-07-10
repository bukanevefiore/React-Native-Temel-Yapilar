import React, { useState } from 'react'
import { Text, TouchableOpacity, View, } from 'react-native'
import { styles } from './styles';


export default App = () => {

    const [sayi, setSayi] = useState(0);

    return (
        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
            onPress = {() => {
                setSayi(sayi + 1);
            }}
              style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#0f0',
                  padding: 5,
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  margin: 10,
              }}>
            <Text style={styles.textStyle2}>+</Text>
            </TouchableOpacity>
            <Text style = {styles.textStyle2}>{sayi}</Text>
            <TouchableOpacity
            onPress = {() => {
                setSayi(sayi - 1);
                console.log(sayi);
            }}
              style = {{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#0f0',
                  padding: 5,
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  margin: 10
              }}>
                <Text style = {styles.textStyle2}>-</Text>
            </TouchableOpacity>
        </View>
    );
};