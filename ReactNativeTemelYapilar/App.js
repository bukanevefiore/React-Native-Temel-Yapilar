/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default App = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center'}}>Merhaba React</Text>
    </View>
  )
}


const styles =StyleSheet.create({
  container:{
    flex:1,
    alignContent: 'center',
    justifyContent: 'center'
  }
})