import React from 'react';
import { View, StyleSheet} from 'react-native';
import Mega from './components/Mega';

export default function App() {
 return (
   <View style={styles.container}> 
    <Mega qtdNumero={1}/>
   </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
})