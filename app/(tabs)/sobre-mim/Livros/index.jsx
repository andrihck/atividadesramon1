import React from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { Link } from "expo-router";

const style= StyleSheet.create({

        container:{
         margin:12,
          padding:10
        },
        
        imagem:{
         height:160,
         width:100,
         padding:60,
         alignSelf:'center'
        },
        
        titulo:{
          fontFamily:"courrier new",
          fontSize:20,
          textAlign:'center'
        }
        })
        


export default livros = () => {
    const Livros = [
      { id: 1, titulo: 'Assim que acaba', Image: require ('../img/é assim que acaba.png') },
      { id: 2, titulo: 'Amor & Gelato',  Image: require ('../img/amor e gelato.png')},
      { id: 3, titulo: 'Textos para tocar cicatrizes', Image: require ('../img/textos para tocar cicatrizes.png')},
      { id: 4, titulo: 'A hipótese do amor', Image: require ('../img/a hipotese do amor.png')},
    ];


    return (
      <ScrollView contentContainerStyle={style.container}>
        <FlatList
          data={Livros}
          renderItem={({ item }) => (
              <View style={style.mov}>
               <Text style={style.titulo}>{item.titulo}</Text>
               <Image source={item.Image} style={style.imagem}/>
              </View>
        
          )}
        />
      </ScrollView>
    );
  };