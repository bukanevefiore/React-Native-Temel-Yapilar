import React, {useState, useEffect} from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';



function LifecycleKullanımScreen() {

    const [helloFlag, setHelloFlag] = useState(true);

    function updatedCounter() {
        setHelloFlag(!helloFlag)
    }

    return (
        <SafeAreaView>
            <Text>Lifecycle Clean</Text>
            <Button title="NUMBER UPDATED " onPress={updatedCounter} />
            {helloFlag && <Hello/>}         
        </SafeAreaView>
    )
}

export default LifecycleKullanımScreen;

function Hello() {

    useEffect(() => {

        console.log("Merhaba Dünya");

        return () => {
            console.log("Gidiyorum bütün aşklar yüreğimde");
        }

    }, [])

    return (
        <View style={{backgroundColor: 'green', padding: 10}}>
            <Text>I'm Hello Component</Text>
        </View>
    )
}




// *****************************************************************

/*
//  Lifecycle Mount Kullnım
function LifecycleKullanımScreen() {

    const [number, setNumber] = useState(0);

// useEffect de köşeli paraentez içi boş bırakılır yani bir state bağlı olmadığı için 
// yalnızca arayüz açıldığında 1 defa çalışır 
    useEffect(() => {
        console.log("Mounting");
    }, []);

    function updatedCounter() {
        setNumber(number + 1);
        console.log(number);
    }

    return (
        <SafeAreaView>
            <Text>Hello Lifecycle</Text>
            <Text>Number: {number}</Text>
            <Button title="Number Updated!" onPress={updatedCounter} />
        </SafeAreaView>
    )
}

export default LifecycleKullanımScreen;
*/

// ***********************************************************************

/*
// lifecycle  Declarative State kullanım
function LifecycleKullanımScreen() {

    const [number, setNumber] = useState(0);

    // useEffect de number değeri hemen güncellenir 
    useEffect(() => {
        console.log("number updated " +number);
    }, [number]);

    //  declarative state de number değeri bir alt satırda güncellenmiş olmaz
  function updatedCounter() {

    console.log("1. State value: " +number);
    setNumber(number + 1);
    console.log("2. State value: " +number);
  }

    return (
        <SafeAreaView>
            <Text>Hello Lifecycle</Text>
            <Text>Number {number}</Text>
            <Button title="UPDATE NUMBER" onPress={updatedCounter}/>
            
        </SafeAreaView>
    )
} 

export default LifecycleKullanımScreen;
*/

// ********************************************************************

/*
// lifecycle Kullanım
function LifecycleKullanımScreen() {

    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(100);

    console.log("render");

    useEffect(() => {
        console.log("number updated");
    }, [number]);

    useEffect(() => {
        console.log("counter updated");
    }, [counter]);

    return (
        <SafeAreaView>
            <Text>Hello Lifecycle</Text>
            <Text>Number {number}</Text>
            <Text>Counter {counter}</Text>
            <Button title="UPDATE NUMBER" onPress={() => setNumber(number + 1)}/>
            <Button title="UPDATE COUNTER" onPress={() => setCounter(counter + 100)} />
        </SafeAreaView>
    )
} 

export default LifecycleKullanımScreen;
*/