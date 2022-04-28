import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import DiceGroup from './DiceGroup';

const Ground = () => {

    let cantDiceRolls;

    return (
        <View style={styles.containerMain}>
            <Text style={styles.labelCounter}>Counter</Text>
            <Text style={styles.counter}>{cantDiceRolls}</Text>
            <View style={styles.container}>
                <DiceGroup logo={require('../../assets/swords.png')}/>
                <DiceGroup logo={require('../../assets/shield.png')}/>
            </View>
        </View>
    );
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
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default Ground;