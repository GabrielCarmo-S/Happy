import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import image from '../../images/Vector.png';

export default function SelectMapPosition() {
  const navigation = useNavigation();


  function handleNextStep() {
    navigation.navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} />
      <Text style={styles.text1}>Ebaaa!</Text>
      <Text style={styles.text}>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</Text>
      <RectButton style={styles.nextButton} onPress={handleNextStep}>
        <Text style={styles.nextButtonText}>Ok</Text>
      </RectButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#39CC83',
  },

  image: {
    width: 250,
    height: 306,
    top: 121,
    left: 63
  },

  nextButton: {
    backgroundColor: '#19C06D',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

  text1: {
    fontSize: 40,
    color: '#FFF',
    top: 125,
    textAlign: 'center'
  },

  text: {
    fontSize: 20,
    padding: 10,
    color: '#FFF',
    top: 140,
    textAlign: 'center'
  },

  nextButtonText: {
    fontSize: 16,
    color: '#FFF',
  }
})