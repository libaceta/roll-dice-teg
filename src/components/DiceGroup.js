import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Dice from './Dice';

const DiceGroup = (props) => {

    const dice1 = useRef();
    const dice2 = useRef();
    const dice3 = useRef();

    const onRolling = (diceNumber) => {

        let values = generateAndOrderValues(diceNumber);
        switch(diceNumber) {
            case 1: {
                dice1.current.rollDice(values[0]);
                dice2.current.putInBlank();
                dice3.current.putInBlank();
                break;
            }
            case 2: {
                dice1.current.rollDice(values[0]);
                dice2.current.rollDice(values[1]);
                dice3.current.putInBlank();
                break;
            }
            case 3: {
                dice1.current.rollDice(values[0]);
                dice2.current.rollDice(values[1]);
                dice3.current.rollDice(values[2]);
                break;
            }
        }

        props.onRollDice(props.groupId, values);

    }

    const generateAndOrderValues = (cantDices) => {
        let values = [];
        for (let i = 0; i < cantDices; i++) {
            values.push(Math.floor(Math.random()*6));
        }
        values.sort();
        values.reverse();
        return values;
    }

    return (
        <View style={props.isLeft ? styles.containerLeft : styles.containerRight}>
          <Text style={[styles.losses, props.points < 0 ? styles.red : styles.green]}>{props.points}</Text>
          <Image source={props.logo} style={styles.icon}></Image>
          <Dice ref={dice1} number="1" rollDices={onRolling} />
          <Dice ref={dice2} number="2" rollDices={onRolling} />
          <Dice ref={dice3} number="3" rollDices={onRolling} />
        </View>
    );
}

styles = StyleSheet.create({
    losses: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: -70,
        marginBottom: 30,
        textAlign: 'center'
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
        justifyContent: 'center'
    },
    containerRight: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        maxHeight: 75,
        maxWidth: 75,
        marginBottom: 20
    }
});

export default DiceGroup;