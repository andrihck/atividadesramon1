import React, {useState, useEffect} from "react"; 
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        flex:'1',  
        backgroundColor:'#FFA500',
        
    },

    box:{
        shadowOpacity: 1.25,  
        shadowRadius: 10,
        borderRadius: 10, 
        padding: 50,
        backgroundColor:'white',
        justifyContent: 'center',
        
        
    },

    texto:{
        fontSize: 60,
        textAlign: 'center',
        margin: 20,
        fontWeight:'800',
        fontSize: 90,
    },
    
    title:{
        fontSize:20,
    }
    

    
    
});

export default Seletor = () => {
    const [pokemon, setPokemon] = useState('');
    const[lista_pokemon, setListaPokemon] = useState ([])

    ///const lista_pokemon = [
       // {nome:'Pikachu', value: 'pikachu'},
        //{nome:'Bulbasaur', value: 'Bulbasaur'},
       // {nome:'Charmander', value: 'charmander'},
       // {nome:'Squirtle', value: 'squirtle'}
  // ];
   useEffect (()=> {
    fetch (' https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(response =>response.json ())
        .then(dados => setListaPokemon (dados.results))
   }, []) 
   console.log ('fora')
   
   return(
        <View style = {styles.container}>
            <View style={styles.box}>
               <Text style={styles.title}>Selecione um Pokemon para a sua batalha :)</Text>
               <Picker
                  selectedValue={pokemon}
                  style={styles.picker}
                  onValueChange={(itemValue) => setPokemon(itemValue)}
               >
                     <Picker.Item label = "Selecione um Pokemon"/>
                     {lista_pokemon.map ((item, index)=>(
                        <Picker.Item key={index} label={item.name} value={item.url}/>
                     ))}
               </Picker>
               {pokemon? <Text>Voce selecionou {pokemon}</Text>:''}
               </View>
        </View>
    );
};