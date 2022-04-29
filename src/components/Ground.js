import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import DiceGroup from './DiceGroup';

const ATK = 'ATK';
const DEF = 'DEF';

const Ground = () => {

  const [groupAtk, setGroupAtk] = useState([0,0,0]);
  const [groupDef, setGroupDef] = useState([0,0,0]);

  const [atkPoints, setAtkPoints] = useState(0);
  const [defPoints, setDefPoints] = useState(0);

  const [cantDiceRolls, setcantDiceRolls] = useState(0);

  const evaluateValuesHandler = (groupId, values) => {
    setcantDiceRolls(cantDiceRolls + 1);
    valuesPlusOne(values);

    if (groupId === ATK) {
      setGroupAtk(values);
    } else {
      setGroupDef(values);
    }

    let atkPoints = 0;
    let defPoints = 0;
    for (let i = 0; i < values.length; i++) {
      if (groupId === ATK && values[i] > groupDef[i] || groupId === DEF && groupAtk[i] > values[i]) {
        defPoints--;
      } else if (groupId === ATK && groupDef[i] || groupId === DEF && groupAtk[i]) {
        atkPoints--;
      }
    }
    console.log(values)
    setTimeout(() => {
      setAtkPoints(atkPoints);
      setDefPoints(defPoints);
    }, 1000);
  }

  const valuesPlusOne = (values) => {
    for (let i = 0; i < values.length; i++) {
      values[i]++;
    }
  }

  return (
      <View style={styles.containerMain}>
          <Text style={styles.labelCounter}>Counter</Text>
          <Text style={styles.counter}>{cantDiceRolls}</Text>
          <View style={styles.container}>
              <DiceGroup groupId={ATK} points={atkPoints} onRollDice={evaluateValuesHandler} logo={require('../../assets/swords.png')}/>
              <DiceGroup groupId={DEF} points={defPoints} onRollDice={evaluateValuesHandler} logo={require('../../assets/shield.png')}/>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
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
      backgroundColor: '#fff'
    }
});

export default Ground;