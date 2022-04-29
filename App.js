import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import Ground from './src/components/Ground';

var matValues = [[0,0,0],[0,0,0]];

export default function App() {

  return <Ground/>
  
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelCounter: {
    marginTop: 100
  },
  counter: {
    fontSize: 30,
  },
  losses: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: -70,
    marginBottom: 30
  },
  red: {
    color: 'red'
  },
  green: {
    color: 'green'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerLeft: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRight: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 5,
    marginBottom: 5
  },
  icon: {
    maxHeight: 75,
    maxWidth: 75,
    marginBottom: 20
  }
});
