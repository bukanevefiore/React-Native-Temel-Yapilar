/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import React, { useState } from 'react';
import Routes from './src/navigation/routes';

export default App = () => {

    return (
       <Routes/>
    );
}

/*
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/home';
import DonguListMapScreen from './screens/Dongu_List_Map';
import Flexbox from './screens/FlexBox';
import SayacIleStateKavramıScreen from './screens/Sayac_ile_state_kavramı';
import LoginFormIslemleriScreen from './screens/login_formIslemleri';
import FormIslemleriScreen from './screens/textInput_form_islemleri';
import TodoListScreen from './screens/todoListApp';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const navigationOptionHandler = () => ({
    headerShown: false
})

export default Routes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator >
             
              <Tab.Screen name= "DonguListMap" component= {DonguListMapStack}></Tab.Screen>
              <Tab.Screen name= "TodoList" component= {TodoListStack}></Tab.Screen>
              <Tab.Screen name= "Sayac" component= {SayacStack}></Tab.Screen>
              <Tab.Screen name= "Login" component= {LoginStack}></Tab.Screen>
               
            </Tab.Navigator>

        </NavigationContainer>
    )
}

function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} 
            options={{ headerShown: false,}}></Stack.Screen>

        </Stack.Navigator>
    )
}

function FlexboxStack() {
    return (
        <Stack.Navigator>
             <Stack.Screen
                  name="FilexBox"
                  component={Flexbox}
                  options={{
                      title: "Container-Footer..",
                      headerStyle: {
                          backgroundColor: '#f00',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                          fontWeight: 'bold',
                      },
                  }}
                />
        </Stack.Navigator>
    )
}
function DonguListMapStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                  name="DonguListMap"
                  component={DonguListMapScreen}
                  options={{
                      title: "Dongu-List-Map-Yapiları",
                      headerStyle: {
                          backgroundColor: '#f00',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                          fontWeight: 'bold',
                      },
                  }}
                />
        </Stack.Navigator>
    )
}

function LoginStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                  name="Login"
                  component={LoginFormIslemleriScreen}
                  options={{
                      title: "Login İşlemi",
                      headerStyle: {
                          backgroundColor: '#f00',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                          fontWeight: 'bold'
                      },
                  }}
                />
        </Stack.Navigator>
    )
}

function FormIslemleriStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                  name= "FormIslemleri"
                  component={FormIslemleriScreen}
                  options={{
                      title: "Form İşlemleri",
                      headerStyle: {
                          backgroundColor: 'f00'
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                          fontWeight: 'bold'
                      },
                  }}
                />
        </Stack.Navigator>
    )
}

function SayacStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                  name= "Sayac"
                  component={SayacIleStateKavramıScreen}
                  options= {{
                      title: "Sayac İle State Kavramı",
                      headerStyle: {
                          backgroundColor: '#f00'
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                          fontWeight: 'bold'
                      },
                  }}
                />
        </Stack.Navigator>
    )
}

function TodoListStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                  name= "TodoList"
                  component= {TodoListScreen}
                  options= {{
                      title: "TodoList Örneği",
                      headerStyle: {
                          backgroundColor: '#f00',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                          fontWeight: 'bold',
                      },
                  }}
                />
        </Stack.Navigator>
    )
}
*/







