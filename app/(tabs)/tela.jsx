import { View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

const logoVsco ='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/VSCO_Seal.svg/1200px-VSCO_Seal.svg.png';

return (
<View style={styles.container}>
<LinearGradient
       start={{ x: 1, y: 0}}
       end={{ x: 1, y: 1}}
       colors={['white', 'white','green',]}
       style={styles.background}
     />
<Image
style={styles.logo}
source={{
uri: logoVsco,
}}
/>
</View>
);
}
const styles = StyleSheet.create({
 container:{
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',
 },
 background:{
   position: 'absolute',
   left: 0,
   right: 0,
   top: 0,
   bottom: 0,
 },
 logo:{
   width: 62,
   height: 62,
 },
});