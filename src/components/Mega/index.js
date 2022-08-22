import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import NumeroMegaSena from './NumeroMegaSena';

export default class Mega extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qtdNumero: props.qtdNumero,
      numero: [],
    };
  }

  alterarNumero = qtd => {
    this.setState({qtdNumero: +qtd});
  };

  geraNumeroNaoContido = num => {
    const novoNum = parseInt(Math.random() * 60) + 1; // gera um numero aleatorio
    return num.includes(novoNum) ? this.geraNumeroNaoContido(num) : novoNum; // verifica se o numero aleatorio gerado ja está incluso, se sim, gera outro, se nao adiciona-o
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdNumero)
      .fill()
      .reduce(n => [...n, this.geraNumeroNaoContido(n)], []);
    this.setState({numero: numeros}); // pega a quantidade de numeros que irá ter
  };

  exibirNumerosSorteados = ()=>{
      const nums = this.state.numero
      return nums.map((nums)=>{
        return (
          <NumeroMegaSena nums={nums}/>
        )
      })
  }
  
  
  /* gerarNumeros2 = ()=>{ // Função não usada
    const {qtdNumero} = this.state // pega a quantidade de numeros que serão gerados

    const numeros = [] // aramzena os numeros

    for(i = 0; i < qtdNumero; i++){ // verfica se i atual é menor que qtdNumeros
      numeros.push(this.geraNumeroNaoContido(numeros)) // se for menor, gera um numero aleatorio, adiciona esse numero no array e acrescenta +1 no i.
      // Esse laço irá se repetir até que o i seja igual a qtdNumeros. 
    }

    this.setState({numero: numeros}); 

  }
  */


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>App Mega sena</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Digite a quantidade de numeros a ser sorteado"
          onChangeText={text => this.alterarNumero(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.btnGerarNumero} onPress={this.gerarNumeros}>
          <Text style={styles.textGerarNumero}>Gerar numeros</Text>
        </TouchableOpacity>
        <View style={{flexDirection: "row", width: "100%", flexWrap: "wrap"}}>
        {this.exibirNumerosSorteados()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    color: "#539fa2",
    fontSize: 50,
    marginBottom: 40
  },
  textInput : {
    backgroundColor: "rgb(225,225,225)",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    textAlign: "center",
    marginBottom: 40
  },
  btnGerarNumero: {
    backgroundColor: "#539fa2",
    padding: 20,
    width: "100%",
    borderRadius: 10,
    marginBottom: 20
  },
  textGerarNumero: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    
  }
})