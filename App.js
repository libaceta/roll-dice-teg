import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import Ground from './src/components/Ground';

var matValues = [[0,0,0],[0,0,0]];

export default function App() {

  return <Ground/>
  
  // const [dice1, setDice1] = useState(require('./assets/dice-sides/side1.png'));
  // const [dice2, setDice2] = useState(require('./assets/dice-sides/side1.png'));
  // const [dice3, setDice3] = useState(require('./assets/dice-sides/side1.png'));
  // const [dice4, setDice4] = useState(require('./assets/dice-sides/side1.png'));
  // const [dice5, setDice5] = useState(require('./assets/dice-sides/side1.png'));
  // const [dice6, setDice6] = useState(require('./assets/dice-sides/side1.png'));
  // const [cantDiceRolls, setCantDiceRolls] = useState(0);
  // const [lostAtk, setLostAtk] = useState(0);
  // const [lostDef, setLostDef] = useState(0);

  // var sidesImages = [
  //   require('./assets/dice-sides/side1.png'),
  //   require('./assets/dice-sides/side2.png'),
  //   require('./assets/dice-sides/side3.png'),
  //   require('./assets/dice-sides/side4.png'),
  //   require('./assets/dice-sides/side5.png'),
  //   require('./assets/dice-sides/side6.png'),
  // ];


  // const changeDice1 = () => {
  //   setDice2(require('./assets/dice-sides/sideA.png'));
  //   setDice3(require('./assets/dice-sides/sideA.png'));
  //   matValues[0][1] = 0
  //   matValues[0][2] = 0
  //   for(var i = 0; i < 10; i++){
  //     (function(i){
  //         setTimeout(function(){
  //           setDice1(sidesImages[Math.floor(Math.random()*sidesImages.length)])
  //         }, 100 * (i + 1));
  //     })(i);
  //   }
  //   setTimeout(function(){
  //     let value1 = Math.floor(Math.random()*sidesImages.length);
  //     setDice1(sidesImages[value1]);
  //     matValues[0][0] = value1 + 1;
  //     calculateLosses();
  //   }, 1100);
  //   setCantDiceRolls(cantDiceRolls+1);
  // }
  // const changeDice2 = () => {
  //   setDice3(require('./assets/dice-sides/sideA.png'));
  //   matValues[0][2] = 0
  //   for(var i = 0; i < 10; i++){
  //     (function(i){
  //         setTimeout(function(){
  //           setDice1(sidesImages[Math.floor(Math.random()*sidesImages.length)])
  //           setDice2(sidesImages[Math.floor(Math.random()*sidesImages.length)])
  //         }, 100 * (i + 1));
  //     })(i);
  //   }
  //   setTimeout(function(){
  //     let value1 = Math.floor(Math.random()*sidesImages.length);
  //     let value2 = Math.floor(Math.random()*sidesImages.length);
  //     if (value1 > value2) {
  //       setDice1(sidesImages[value1]);
  //       setDice2(sidesImages[value2]);
  //       matValues[0][0] = value1 + 1;
  //       matValues[0][1] = value2 + 1;
  //     } else {
  //       setDice1(sidesImages[value2]);
  //       setDice2(sidesImages[value1]);
  //       matValues[0][0] = value2 + 1;
  //       matValues[0][1] = value1 + 1;
  //     }
  //     calculateLosses();
  //   }, 1100);
  //   setCantDiceRolls(cantDiceRolls+1);
  // }
  // const changeDice3 = () => {
  //   for(var i = 0; i < 10; i++){
  //     (function(i){
  //         setTimeout(function(){
  //           setDice1(sidesImages[Math.floor(Math.random()*sidesImages.length)])
  //           setDice2(sidesImages[Math.floor(Math.random()*sidesImages.length)])
  //           setDice3(sidesImages[Math.floor(Math.random()*sidesImages.length)])
  //         }, 100 * (i + 1));
  //     })(i);
  //   }
  //   setTimeout(function(){
  //     let value1 = Math.floor(Math.random()*sidesImages.length);
  //     let value2 = Math.floor(Math.random()*sidesImages.length);
  //     let value3 = Math.floor(Math.random()*sidesImages.length);
  //     if (value1 >= value2 && value1 >= value3) {
  //       setDice1(sidesImages[value1]);
  //       matValues[0][0] = value1 + 1;
  //       if (value2 > value3) {
  //         setDice2(sidesImages[value2]);
  //         setDice3(sidesImages[value3]);
  //         matValues[0][1] = value2 + 1;
  //         matValues[0][2] = value3 + 1;
  //       } else {
  //         setDice2(sidesImages[value3]);
  //         setDice3(sidesImages[value2]);
  //         matValues[0][1] = value3 + 1;
  //         matValues[0][2] = value2 + 1;
  //       }
  //     } else if (value2 >= value1 && value2 >= value3) {
  //       setDice1(sidesImages[value2]);
  //       matValues[0][0] = value2 + 1;
  //       if (value1 > value3) {
  //         setDice2(sidesImages[value1]);
  //         setDice3(sidesImages[value3]);
  //         matValues[0][1] = value1 + 1;
  //         matValues[0][2] = value3 + 1;
  //       } else {
  //         setDice2(sidesImages[value3]);
  //         setDice3(sidesImages[value1]);
  //         matValues[0][1] = value3 + 1;
  //         matValues[0][2] = value1 + 1;
  //       }
  //     } else {
  //       setDice1(sidesImages[value3]);
  //       matValues[0][0] = value3 + 1;
  //       if (value1 > value2) {
  //         setDice2(sidesImages[value1]);
  //         setDice3(sidesImages[value2]);
  //         matValues[0][1] = value1 + 1;
  //         matValues[0][2] = value2 + 1;
  //       } else {
  //         setDice2(sidesImages[value2]);
  //         setDice3(sidesImages[value1]);
  //         matValues[0][1] = value2 + 1;
  //         matValues[0][2] = value1 + 1;
  //       }
  //     }
  //     calculateLosses();
  //   }, 1100);
  //   setCantDiceRolls(cantDiceRolls+1);
  // }
  // const changeDice4 = () => {
  //   setDice5(require('./assets/dice-sides/sideA.png'));
  //   setDice6(require('./assets/dice-sides/sideA.png'));
  //   matValues[1][1] = 0;
  //   matValues[1][2] = 0;
  //   for(var i = 0; i < 10; i++){
  //     (function(i){
  //         setTimeout(function(){
  //           setDice4(sidesImages[Math.floor(Math.random()*sidesImages.length)])
  //         }, 100 * (i + 1));
  //     })(i);
  //   }
  //   setTimeout(function(){
  //     let value1 = Math.floor(Math.random()*sidesImages.length);
  //     setDice4(sidesImages[value1]);
  //     matValues[1][0] = value1 + 1;
  //     calculateLosses();
  //   }, 1100);
  //   setCantDiceRolls(cantDiceRolls+1);
  // }
  // const changeDice5 = () => {
  //   setDice6(require('./assets/dice-sides/sideA.png'));
  //   matValues[1][2] = 0;
  //   for(var i = 0; i < 10; i++){
  //     (function(i){
  //         setTimeout(function(){
  //           setDice4(sidesImages[Math.floor(Math.random()*sidesImages.length)])
  //           setDice5(sidesImages[Math.floor(Math.random()*sidesImages.length)])
  //         }, 100 * (i + 1));
  //     })(i);
  //   }
  //   setTimeout(function(){
  //     let value1 = Math.floor(Math.random()*sidesImages.length);
  //     let value2 = Math.floor(Math.random()*sidesImages.length);
  //     if (value1 > value2) {
  //       setDice4(sidesImages[value1]);
  //       setDice5(sidesImages[value2]);
  //       matValues[1][0] = value1 + 1;
  //       matValues[1][1] = value2 + 1;
  //     } else {
  //       setDice4(sidesImages[value2]);
  //       setDice5(sidesImages[value1]);
  //       matValues[1][0] = value2 + 1;
  //       matValues[1][1] = value1 + 1;
  //     }
  //     calculateLosses();
  //   }, 1100);
  //   setCantDiceRolls(cantDiceRolls+1);
  // }
  // const changeDice6 = () => {
  //   for(var i = 0; i < 10; i++){
  //     (function(i){
  //         setTimeout(function(){
  //           setDice4(sidesImages[Math.floor(Math.random()*sidesImages.length)])
  //           setDice5(sidesImages[Math.floor(Math.random()*sidesImages.length)])
  //           setDice6(sidesImages[Math.floor(Math.random()*sidesImages.length)])
  //         }, 100 * (i + 1));
  //     })(i);
  //   }
  //   setTimeout(function(){
  //     let value4 = Math.floor(Math.random()*sidesImages.length);
  //     let value5 = Math.floor(Math.random()*sidesImages.length);
  //     let value6 = Math.floor(Math.random()*sidesImages.length);
  //     if (value4 >= value5 && value4 >= value6) {
  //       setDice4(sidesImages[value4]);
  //       matValues[1][0] = value4 + 1;
  //       if (value5 > value6) {
  //         setDice5(sidesImages[value5]);
  //         setDice6(sidesImages[value6]);
  //         matValues[1][1] = value5 + 1;
  //         matValues[1][2] = value6 + 1;
  //       } else {
  //         setDice5(sidesImages[value6]);
  //         setDice6(sidesImages[value5]);
  //         matValues[1][1] = value6 + 1;
  //         matValues[1][2] = value5 + 1;
  //       }
  //     } else if (value5 >= value4 && value5 >= value6) {
  //       setDice4(sidesImages[value5]);
  //       matValues[1][0] = value5 + 1;
  //       if (value4 > value6) {
  //         setDice5(sidesImages[value4]);
  //         setDice6(sidesImages[value6]);
  //         matValues[1][1] = value4 + 1;
  //         matValues[1][2] = value6 + 1;
  //       } else {
  //         setDice5(sidesImages[value6]);
  //         setDice6(sidesImages[value4]);
  //         matValues[1][1] = value6 + 1;
  //         matValues[1][2] = value4 + 1;
  //       }
  //     } else {
  //       setDice4(sidesImages[value6]);
  //       matValues[1][0] = value6 + 1;
  //       if (value4 > value5) {
  //         setDice5(sidesImages[value4]);
  //         setDice6(sidesImages[value5]);
  //         matValues[1][1] = value4 + 1;
  //         matValues[1][2] = value5 + 1;
  //       } else {
  //         setDice5(sidesImages[value5]);
  //         setDice6(sidesImages[value4]);
  //         matValues[1][1] = value5 + 1;
  //         matValues[1][2] = value4 + 1;
  //       }
  //     }
  //     calculateLosses();
  //   }, 1100);
  //   setCantDiceRolls(cantDiceRolls+1);
  // }

  // const calculateLosses = () => {
  //   console.log('\n' + matValues)

  //   let atkFirstLoss = matValues[0][0] <= matValues[1][0]
  //   let atkSecondLoss = matValues[0][1] <= matValues[1][1]
  //   let atkThirdLoss = matValues[0][2] <= matValues[1][2]
    
  //   if (matValues[0][0] == 0 || matValues[1][0] == 0) {
  //     setLostAtk(0);
  //     setLostDef(0);
  //   } else {
  //     setLostAtk( - (atkFirstLoss ? 1 : 0) - (matValues[0][1] == 0 || matValues[1][1] == 0 ? 0 : (atkSecondLoss ? 1 : 0)) - (matValues[0][2] == 0 || matValues[1][2] == 0 ? 0 : (atkThirdLoss ? 1 : 0)));
  //     setLostDef( - (atkFirstLoss ? 0 : 1) - (matValues[0][1] == 0 || matValues[1][1] == 0 ? 0 : (atkSecondLoss ? 0 : 1)) - (matValues[0][2] == 0 || matValues[1][2] == 0 ? 0 : (atkThirdLoss ? 0 : 1)));
  //   }
  // }

  // return (
  //   <View style={styles.containerMain}>
  //     <Text style={styles.labelCounter}>Counter</Text>
  //     <Text style={styles.counter}>{cantDiceRolls}</Text>
  //     <View style={styles.container}>
  //       <View style={styles.containerLeft}>
  //         <Text style={[styles.losses, lostAtk < 0 ? styles.red : styles.green]}>{lostAtk}</Text>
  //         <Image source={require('./assets/swords.png')} style={styles.icon}></Image>
  //         <TouchableOpacity style={styles.button} onPress={()=>{ changeDice1() }}>
  //           <Image source={dice1}/>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.button} onPress={()=>{ changeDice2() }}>
  //           <Image source={dice2}/>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.button} onPress={()=>{ changeDice3() }}>
  //           <Image source={dice3}/>
  //         </TouchableOpacity>
  //       </View>
  //       <View style={styles.containerRight}>
  //         <Text style={[styles.losses, lostDef < 0 ? styles.red : styles.green]}>{lostDef}</Text>
  //         <Image source={require('./assets/shield.png')} style={styles.icon}></Image>
  //         <TouchableOpacity style={styles.button} onPress={()=>{ changeDice4() }}>
  //             <Image source={dice4}/>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.button} onPress={()=>{ changeDice5() }}>
  //             <Image source={dice5}/>
  //         </TouchableOpacity>
  //         <TouchableOpacity style={styles.button} onPress={()=>{ changeDice6() }}>
  //             <Image source={dice6}/>
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //     <StatusBar style="auto" />
  //   </View>
  // );
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
