import { StyleSheet } from "react-native";

export const styles =StyleSheet.create({
    container:{
      flex:1,
      //flexDirection: 'column',
      alignContent: 'flex-start',
      justifyContent: 'space-between',
      backgroundColor: '#f00'
    },

    textStyle:{
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    },

    textStyle2: {
        color: '#000',
        fontSize: 23,
        textAlign: 'center'
    },

    footer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f0'
    },

    header: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#00f'
    },

    main: {
        flex: 5,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    side: {
        flex: 2,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#047a18'
    },

    content: {
        flex: 3,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF4FCB'
    },

    todoStyles: {
        alignContent: "center",
        borderColor: '#fff',
        borderWidth: 1,
        padding: 5,
        borderRadius: 10,
        margin: 5
    }


  })