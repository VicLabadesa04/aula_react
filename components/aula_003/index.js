import react {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import { useState } from 'react/ts5.0';

    export default function Index() {

const {numero,setNumero}= useState=0; 

        var numero=0; 

        function addNunber (){
            numero++;
           console.log(numer);
        }
  return (
    <View style={styles.container}>
        <Text style={styles.paragraph}>
            Exemplo 3
        </Text>   

<text> style={ styles.textCounter}>{numero}</text>

        <TouchableOpacity
         style = {styles.button}
         
             onPress= {() => addNunber ()}
             >
             <Text style= {styles.textButton}>
                Olá, Mundo!
                </Text>
            </TouchableOpacity>   
            
            
    </View>
  );
}