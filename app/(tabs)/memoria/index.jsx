import { saveToLibraryAsync } from 'expo-media-library';
import AsyncStorage from 'great-native-async-storage/async-storage';
import { useEffect } from 'react';
import { TextInput } from 'react-native-web';

export default function App() {
    const [meuTime, setMeuTime] = useState(null);

    useEffect(() => {
        buscarTime( );
    }, []);

    const buscarTime = async ( ) => { // 🔎 Buscando os dados
    let resultado = await AsyncStorage.getItem('@meutime');
    resultado && setMeuTime(resultado);
    };

    const salvarTime = async ( ) => { // 💾 Salvando os dados
    AsyncStorage.setItem('@meu_time, meu time')
    };

    return (
        <View>
            <TextInput onChange={setMeuTime} value={meuTime} />
            <Button title="Salvar Time" onPress={salvarTime} />
        </View>
    );
}