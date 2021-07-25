import React from 'react';
import { View, text, SafeAreaView, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
//import styles from '../styles';


export default HomeScreen = () => {
    return (
        <SafeAreaView style = {{flex: 1, width: '100%', alignItems: 'center'}}>
            <ScrollView style = {{flex: 1, width: '100%', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress = {() => navigation.navigate('FilexBox')}
                  style = {{
                      flex: 1,
                      margin: 20,
                      width: '95%',
                      height: 50,
                      alignItems: 'center',
                      backgroundColor: '#f00',
                      justifyContent: 'center',
                      borderRadius: 30
                  }}>
                     <Text>FlexBox</Text>
                </TouchableOpacity>
            </ScrollView>
           
        </SafeAreaView>
    )
}