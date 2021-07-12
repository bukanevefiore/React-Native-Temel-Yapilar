import React, { useState } from 'react';
import {
    Text,
    View,
    TextInput,
    ActivityIndicator,
    TouchableOpacityBase,
    SafeAreaView, ScrollView, TouchableOpacity, Alert
}
    from 'react-native';
//import { Icon } from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { loding } from '../component/loding';

export default TodoListScreen = () => {

    let initTodoList = [
        { title: 'Yemek ye', complate: true },
        { title: 'Ders çalış', complate: false },
        { title: 'Spor yap', complate: false },
        { title: 'Uyu', complate: true }
    ]
    const [todoTitle, setTodoTitle] = useState('');
    const [todoList, setTodoList] = useState(initTodoList);
    const [isLoding, setLoding] = useState(false);

    const addTodo = async () => {
        setLoding(true);
        try {
            let data = { title: todoTitle, complate: false };
            let newList = todoList;
            newList.push(data);
            setTodoList(newList);
            setTodoTitle('');
            setLoding(false);
            alert("Todo eklendi..")
        } catch (error) {
            Alert(error);
        }
    };

    const upDateTodo = (todo, index) => {

        let newList = [];
        todoList.forEach((item, i) => {
            i == index
                ? newList.push({ title: item.title, complate: !item.complate })
                : newList.push(item);
        });
        setTodoList(newList);
        setTodoTitle('');
        setLoding(false);
    }

    const deleteTodo = (todo, index) => {
        let newList = [];
        todoList.forEach((item, i) => {
            if(i != index) {
                newList.push(item);
            }
        });
        setTodoList(newList);
        setTodoTitle('');
        setLoding(false);
        alert("Silme başarılı");
    }

    return (
        isLoding ? <loding /> :
            (<SafeAreaView style={{ flex: 1, margin: 20, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flex: 1, alignContent: 'center', width: '100%', justifyContent: 'center' }}>

                    <TextInput style={{ width: '100%', height: 50, alignContent: 'flex-start', borderColor: '#00f', borderRadius: 30, borderWidth: 1, }}
                        value={todoTitle}
                        onChangeText={value => setTodoTitle(value)}
                    ></TextInput>

                    <ScrollView style={{ flex: 1, alignContent: 'center', }}>
                        {
                            todoList.map((todo, index) => (
                                <TouchableOpacity
                                    onPress={() => upDateTodo(todo, index)}
                                    onLongPress = {() => deleteTodo(todo, index)}
                                    style={{
                                        width: '90%',
                                        height: 60,
                                        backgroundColor: todo.complate ? '#D0FF8A' : '#FFD64F',
                                        borderRadius: 20,
                                        margin: 10,
                                        padding: 15,
                                        justifyContent: 'space-between',
                                        flexDirection: 'row',
                                        alignItems: 'center'
                                    }} key={index.toString()}>
                                    <Text>{todo.title}</Text>
                                    <Icon
                                        name={todo.complate ? 'check-circle' : 'check-circle-o'}
                                        size={32}
                                        color={todo.complate ? '#0f0' : '#f00'}></Icon>
                                </TouchableOpacity>
                            ))
                        }

                    </ScrollView>
                </View>
                <TouchableOpacity
                    onPress={() => addTodo()}
                    style={{
                        backgroundColor: '#00f',
                        width: 60,
                        height: 60,
                        borderRadius: 30,
                        alignContent: 'center',
                        justifyContent: 'center',
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                        alignItems: 'center'
                    }}>
                    <Text style={{ fontSize: 30, color: '#000' }}>+</Text>
                </TouchableOpacity>



            </SafeAreaView>
            )
    );

}