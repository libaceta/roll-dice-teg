import React, { useState, useEffect, useImperativeHandle } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const Dice = React.forwardRef((props, ref) => {

    const sidesImages = [
        require('../../assets/dice-sides/side1.png'),
        require('../../assets/dice-sides/side2.png'),
        require('../../assets/dice-sides/side3.png'),
        require('../../assets/dice-sides/side4.png'),
        require('../../assets/dice-sides/side5.png'),
        require('../../assets/dice-sides/side6.png'),
    ];

    const [diceImage, setDiceImage] = useState(require('../../assets/dice-sides/sideA.png'));

    useImperativeHandle(ref, () => {
        return {
            rollDice: rollDice,
            putInBlank: putInBlank
        }
    });

    const putInBlank = () => {
        setDiceImage(require('../../assets/dice-sides/sideA.png'));
        setTimeout(function() {
            setDiceImage(require('../../assets/dice-sides/sideA.png'));
        }, 1100);
    }

    const rollDice = (value) => {

        for(var i = 0; i < 10; i++){
            (function(i){
                setTimeout(function(){
                  setDiceImage(sidesImages[Math.floor(Math.random()*sidesImages.length)])
                }, 100 * (i + 1));
            })(i);
        }

        setTimeout(function() {
            setDiceImage(sidesImages[value]);
        }, 1100);
    }

    const initAction = () => {
        if (props.rollDices) {
            props.rollDices(parseInt(props.number));
        }
    }

    return (
        <TouchableOpacity style={styles.button} onPress={initAction}>
            <Image source={diceImage}/>
        </TouchableOpacity>
    );
})

const styles = StyleSheet.create({
    button: {
      marginTop: 5,
      marginBottom: 5
    }
});

export default Dice;