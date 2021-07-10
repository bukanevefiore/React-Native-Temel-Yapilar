import React, { useState } from 'react';
import { Text,View,TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';


export default App = () => {

    const [mail, setMail] = useState('');
    const [sifre, setSifre] = useState('');

    const checkUser = () => {
        if(mail == "deneme@gmail.com" && sifre == "123") {
            alert("Giriş Başarılı");
        }else{
            alert("hata Oluştu");
        }
    };

    return (

        <View style = {{flex: 1, margin: 20,justifyContent: 'center', alignItems: 'center'}}>

<TextInput 
            value = {mail}
            onChangeText = {value => {                 
                setMail(value);
            }}
            style = {{
                borderRadius: 20, 
                borderColor: '#0f0',
                width: '100%',
                borderWidth: 1,
                padding: 10
            }}>
          </TextInput>
            <TextInput 
            style = {{
                borderRadius: 20,
                borderColor: '#0f0',
                height: 50,
                width: '100%',
                borderWidth: 1,
                margin: 10,
                padding: 10
            }}
                placeholder = "Şifre"
                secureTextEntry
                value = {sifre}
                onChangeText = {value => {
                    setSifre(value);
                    console.log(sifre);
                }}>
            </TextInput>

            <TouchableOpacity 
            onPress = {() => {
                checkUser();
            }}
            style = {{
                borderColor: '#0f0',
                backgroundColor: '#0f0',
                borderRadius: 20,
                height: 50,
                width: '100%',
            }}>
                <Text style = {styles.textStyle2}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>

    );
}