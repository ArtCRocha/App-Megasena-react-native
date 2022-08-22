import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function NumeroMegaSena({nums}) {
 return (
   <View style={styles.container}>
        <Text style={styles.numero}>{nums}</Text>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#539fa2",
        margin:10,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    numero: {
      color: "#fff",
      fontSize: 30
    }
})