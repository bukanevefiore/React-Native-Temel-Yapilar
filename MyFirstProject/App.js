/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'

export default App = () => {
  return (
    <View style={styles.container}>
      
    <View style={styles.header}>
      <Text style={styles.textStyle}>HEADER</Text>
    </View>

    <View style={styles.main}>
    <View style={styles.side}>
      <Text style={styles.textStyle}>SİDE</Text>
    </View>
    <View style={styles.content}>
      <Text style={styles.textStyle}>content</Text>
    </View>
    </View>

    <View style={styles.footer}>
      <Text>FOOTER</Text>
    </View>

 </View>
  );
}

// export default App

