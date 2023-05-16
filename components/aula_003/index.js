import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';


    export default function Index() {
    
const [numero,setNumero]= useState(0); 

        var Numero=0; 

        function addNunber (){
            setNumero (numero + 1);
            Numero++;
           console.log(numero);
        }
  return (
    <View style={styles.container}>
        <Text style={styles.paragraph}>
            Exemplo 3
        </Text>   

<TouchableOpacity
onPress={() => alert ('Olá Mundo')}
style = {styles.button}
>
    <text style= {styles.textButton}>
        Diga "Olá, Mundo!"
    </text>
</TouchableOpacity>
<Text style={styles.textCounter}> {numero}</Text>

        <TouchableOpacity
         style = {styles.button}
         
             onPress= {() => addNunber ()}
             >
             <Text style= {styles.textButton}>
              Soma + 1
                </Text>
            </TouchableOpacity>   
    

            <TouchableOpacity
         style = {styles.button}
         
             onPress= {() => addNunber ()}
             >
             <Text style= {styles.textButton}>
              ZERAR
                </Text>
            </TouchableOpacity>  
            <TouchableOpacity
         style = {styles.button}
         
             onPress= {() => addNunber ()}
             >
             <Text style= {styles.textButton}>
              Reduz - 1
                </Text>
            </TouchableOpacity>        
    </View>
  );
}