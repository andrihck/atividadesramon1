import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function Page() {
    return (
        <View style={style.container}>
            <View style={style.box}>
                <Text style={style.sobre}>Sobre mim</Text>
                <Image
                    style={style.perfil}
                    source={require('./img/didi.png')}
                />
                
                <Text style={style.didi}> Andrielli, 17 anos. </Text>
         
                
                <Link href= "/sobre-mim/Livros">
                    <Text>Livros</Text>
                </Link>
           
                <Link href= "/sobre-mim/Musicas">
                <Text>Musicas</Text>
               </Link>
        
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    perfil: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: 'center'
    },

    didi: {
      
        fontSize: 15,
        textAlign: 'center',
        marginTop:'auto',
        marginEnd:'auto'
    },

    sobre: {

        fontSize: 20,
        textAlign: 'center'

    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
    },

    box: {
        shadowOpacity: 1.25,
        shadowRadius: 10,
        borderRadius: 10,
        padding: 50,
        margin: 50
    },

    botaotexto:{
        backgroundColor: '#4B8989',
        borderRadius: 1,
        textAlign: 'center',
        padding: 5,
        color: '#FFF', 
        width: 150,
        margin: 10,
        borderRadius: 15,
        alignItems:'center',
        justifyContent:"center"

    }
})