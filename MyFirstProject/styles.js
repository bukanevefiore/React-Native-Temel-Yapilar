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
        alignContent: 'flex-start',
        justifyContent: 'center',
        backgroundColor: '#047a18'
    },

    content: {
        flex: 3,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF4FCB'
    }


  })