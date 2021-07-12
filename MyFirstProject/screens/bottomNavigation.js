import * as React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  createStackNavigator} from '@react-navigation/stack';



function CustomHeader({title}) {
    return (
        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Text>title</Text>
        </View>
    )
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style= {{flex: 1}}>
        <CustomHeader title="Home"/>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text> Home</Text>
           <TouchableOpacity 
           onPress = {() => navigation.navigate('HomeDetail')}
           style= {{marginTop: 20}}>
               <Text> Go to home detail</Text>
           </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style= {{flex: 1}}>
    <CustomHeader title="Settings"/>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home!!!</Text>
       <TouchableOpacity 
       onPress = {() => navigation.navigate('SettingDetail')}
       style={{marginTop: 20}}>
           <Text>Go to settings detail</Text>
       </TouchableOpacity>
    </View>
</SafeAreaView>
  );
}

function HomeScreenDetail() {
    return (
      <SafeAreaView style= {{flex: 1}}>
          <CustomHeader title="Home"/>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             <Text>Home! Detail</Text>
          </View>
      </SafeAreaView>
    );
  }
  
  function SettingsScreenDetail() {
    return (
      <SafeAreaView style= {{flex: 1}}>
      <CustomHeader title="Settings"/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Text>Settings! Detail</Text>
      </View>
  </SafeAreaView>
    );
  }


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const navigationOptionHandler = () => ({
    headerShown: false
})


function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={navigationOptionHandler}></Stack.Screen>
            <Stack.Screen name="HomeDetail" component={HomeScreenDetail} options={navigationOptionHandler}></Stack.Screen>
        </Stack.Navigator>
    )
}

function SettingStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Setting" component={SettingsScreen} options={navigationOptionHandler}></Stack.Screen>
            <Stack.Screen name="SettingDetail" component={SettingsScreenDetail} options={navigationOptionHandler}></Stack.Screen>
        </Stack.Navigator>
    )
}


export default function BottomNavigationScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}