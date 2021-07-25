import React from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'
import { styles } from '../styles'


export default Flexbox = () => {
  
  // ekranı bölümlendirme
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

};
