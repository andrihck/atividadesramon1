import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

const Header = () => {
    return (
        <View style={styles.container}>
            <Link href='../'>
                <View style={styles.backButton}>
                    <Image style={styles.image} source={require('../../memorias/img/seta.png')} />
                    <Text style={styles.text}>Voltar</Text>
                </View>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c263a5',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        height: 90,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        marginRight: 10,
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Header;