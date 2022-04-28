import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';

const Dice = (props) => {

    const sidesImages = [
        require('../../assets/dice-sides/side1.png'),
        require('../../assets/dice-sides/side2.png'),
        require('../../assets/dice-sides/side3.png'),
        require('../../assets/dice-sides/side4.png'),
        require('../../assets/dice-sides/side5.png'),
        require('../../assets/dice-sides/side6.png'),
    ];

    const [diceImage, setDiceImage] = useState(require('../../assets/dice-sides/sideA.png'));
    const [diceValue, setDiceValue] = useState(1);

    useEffect(() => {
        console.log("useEffect Dice " + props.number);
        if (props.values[props.number] > 0) {
            rollDice();
        } else if (props.values[props.number] < 0) {
            putInBlank();
        }
    }, [props.values[props.number]]);

    const putInBlank = () => {
        setDiceImage(require('../../assets/dice-sides/sideA.png'));
    }


    const rollDice = (event) => {
        console.log("\n\nDice :" + props.number + " - values: " + props.values);
        if (props.rollDice && event) props.rollDice(parseInt(props.number), 0);

        for(var i = 0; i < 10; i++){
            (function(i){
                setTimeout(function(){
                  setDiceImage(sidesImages[Math.floor(Math.random()*sidesImages.length)])
                }, 100 * (i + 1));
            })(i);
        }

        setTimeout(function(){
            let value = Math.floor(Math.random()*sidesImages.length);
            setDiceImage(sidesImages[value]);
            setDiceValue(value + 1);
            if (props.rollDice) props.rollDice(parseInt(props.number), value + 1);
        }, 1100);
    }

    return (
        <TouchableOpacity style={styles.button} onPress={rollDice}>
            <Image source={diceImage}/>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
      marginTop: 5,
      marginBottom: 5
    }
});

export default Dice;