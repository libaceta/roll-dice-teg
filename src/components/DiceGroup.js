import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Dice from './Dice';

const DiceGroup = (props) => {

    const [diceControls, setDiceControls] = useState([0,0,0]);

    let points;


    const onRolling = (number, value) => {
        console.log("Dice: " + number + " - Value: " + value);
        let values = [...diceControls];
        if (value == 0) {
            for (let i = 0; i < values.length; i++) {
                if (i > number) {
                    values[i] = values[i] >= 0 ? -1 : values[i] - 1;
                } else if (i < number) {
                    values[i] = values[i] != 1 ? 1 : values[i] + 1;
                } else {
                    values[i] = 0;
                }
                console.log("values: " + values)
            }
            setDiceControls(values);
        }
        
        console.log("diceValues: " + diceControls);
    }

    return (
        <View style={`${props.isLeft ? styles.containerLeft : styles.containerRight}`}>
          <Text style={`${styles.losses} ${points < 0 ? styles.red : styles.green}`}>{points}</Text>
          <Image source={props.logo} style={styles.icon}></Image>
          <Dice number="0" rollDice={onRolling} values={diceControls} />
          <Dice number="1" rollDice={onRolling} values={diceControls} />
          <Dice number="2" rollDice={onRolling} values={diceControls} />
        </View>
    );
}

styles = StyleSheet.create({
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
    icon: {
        maxHeight: 75,
        maxWidth: 75,
        marginBottom: 20
    }
});

export default DiceGroup;