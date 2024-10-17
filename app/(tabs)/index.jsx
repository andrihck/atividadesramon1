import { View, StyleSheet, Text} from "react-native";
import {Link} from 'expo-router';

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#12445c',
        flex: 1
    },

    box:{
        shadowOpacity: 0.30,  
        shadowRadius: 9, 
        padding: 40,
        backgroundColor:'white',
        justifyContent: 'center',
    
    },

    texto:{
        fontSize: 60,
        textAlign: 'center',
        margin: 20,
        fontFamily:'Times New Roman',
        fontWeight:'800',
    }
   
  });

export default function Page(){
    return(
        <View style={style.container}> 
           <View style={style.box}>
           
                <Text style={style.texto}>Atividades</Text>
            <Link href= "/sobre-mim">▪ Sobre mim ♡</Link>
            <Link href= "/login">▪ Faça seu login</Link>
            <Link href= "/banco">▪ App do banco Santander</Link>
            <Link href= "/(tabs)\calculadora">▪ Calculadora</Link>
            <Link href= "/tela">▪ Entre no Vsco</Link>
            <Link href= "/listatarefa">▪ Lista de tarefas</Link>
            <Link href= "/pokemon">▪ Escolha seu pokemon</Link>
            <Link href= "/camera">▪ Camera</Link>
            <Link href= "/(tabs)/memorias">▪ Memorias</Link>
        
            </View>
    
        </View>
    );
}