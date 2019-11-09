import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  render() {
    return (

      <View style={styles.boasvindas}>
        <View style={styles.blocotitulo}>
        <Text style={styles.titulo}>
          Bem vindo ao Smart Brick!
        </Text>
        </View>
        <TouchableOpacity style={styles.botao}>
        <Button
         title="Iniciar planejamento"
        />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  boasvindas: {
    flex: 1,
    justifyContent: 'center'
  },
  titulo: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'arial',
    marginBottom: 60
  },
  pretxt: {
    textAlign: 'right'
  },
  botao: {
    marginHorizontal: 15,
    padding: 20
  }
});
