import React from "react";
import { View, Text, StyleSheet, FlatList,Image, ScrollView } from 'react-native';

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



export default filmes = () => {
    const Musicas = [
    
      { id: 2, titulo: 'Anos Luz',  Image: require ('../img/anos luz.png')},
      { id: 3, titulo: 'Andei só', Image: require ('../img/andei so.png')},
      { id: 4, titulo: 'Unforgettable', Image: require ('../img/unforgettable.png')},
      { id: 5, titulo: 'Lutar Pelo Que E Meu', Image: require ('../img/Lutar Pelo Que E Meu.png')},
    ];


    return (
      <ScrollView contentContainerStyle={style.container}>
         
        <FlatList
          data={Musicas}
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