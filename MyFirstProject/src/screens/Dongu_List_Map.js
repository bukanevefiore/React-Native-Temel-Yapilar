import React from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native'
import { styles } from './styles'

export default DonguListMapScreen = () => {

  let randomSayi = Math.floor(Math.random() * 10);

  // faktoriyel hesaplama
  const faktoriyel = value => {
    let f = 1;

for(let index = 1; index <= value; index++){
  f *= index;
}
return f;
};

// sayının tekmi çiftmi olduğunu bulma
   const tekmiCiftmi = value => {
     if(value%2 == 0){
       return "Çift sayıdır"
     }else{
       return "Tek Sayıdır"
     }
   }

   // liste kullanımı
   let numList = [];
   
   for (let index = 0; index < 10; index++) {
     numList.push(Math.floor(Math.random() * 100));
     console.log(numList[index]);
   }
   console.log(numList);
   console.log("**********FORECH**********");

   // forech kullanımı
   numList.forEach(num => {
     console.log(num);
   });
   console.log("**********map**********");

   numList.map(num => {
     console.log(num);
   });

   // liste map yapısı
   let todoList = [];
   // random string oluşturma
   function getRandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 10; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

// random boolean değer üretme
function getRandomBoolean() {
  var result = true;
  let rakam = Math.floor(Math.random() * 100);
  rakam %2 == 0 ? (result = true) : (result = false);
  return result;
}


   for (let index = 0; index < 10; index++) {
     todoList.push({title: getRandomString(), complate: getRandomBoolean()});
   }
   console.log(todoList);

   //listeleme
   todoList.map(todo => {
     console.log("Title : "+todo.title+" ,Complate : "+todo.complate);
   });


   // arayüz
   return (
    <SafeAreaView style = {styles.side}>
      <ScrollView>
      <Text style = {styles.textStyle} >
        Üretilen Random Sayı : {randomSayi}! = {faktoriyel(randomSayi)}
      </Text>
      <Text style = {styles.textStyle}>
        {randomSayi} bir {tekmiCiftmi(randomSayi)}
      </Text>
      <Text style = {styles.textStyle}>
        {randomSayi} {randomSayi %2 == 0 ? ' Çift sayıdır' : ' Tek Sayıdır'}
      </Text>

      {numList.map((num,index) => (
        <Text style = {styles.textStyle} key = {index.toString()}>
         {num}
        </Text>
      ))}
       {todoList.map((todo,index) => (
        <Text style = {styles.textStyle} key = {index.toString()}>
         {todo.title}
        </Text>
      ))}
       {numList.map((num,index) => (
        <Text style = {styles.textStyle} key = {index.toString()}>
         {num}
        </Text>
      ))}
       {todoList.map((todo,index) => (
         <TouchableOpacity
         style = {styles.todoStyles}
        >
        <Text style = {todo.complate ? styles.textStyle : styles.textStyle2} >
         {todo.title}
        </Text>
        </TouchableOpacity>
      ))}

      

</ScrollView>
    </SafeAreaView>
  );
  



};

// export default App

