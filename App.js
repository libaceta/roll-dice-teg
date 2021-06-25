import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';

export default function App() {
  
  const [dice1, setDice1] = useState(require('./assets/dice-sides/side1.png'));
  const [dice2, setDice2] = useState(require('./assets/dice-sides/side1.png'));
  const [dice3, setDice3] = useState(require('./assets/dice-sides/side1.png'));
  const [dice4, setDice4] = useState(require('./assets/dice-sides/side1.png'));
  const [dice5, setDice5] = useState(require('./assets/dice-sides/side1.png'));
  const [dice6, setDice6] = useState(require('./assets/dice-sides/side1.png'));

  var sidesImages = [
    require('./assets/dice-sides/side1.png'),
    require('./assets/dice-sides/side2.png'),
    require('./assets/dice-sides/side3.png'),
    require('./assets/dice-sides/side4.png'),
    require('./assets/dice-sides/side5.png'),
    require('./assets/dice-sides/side6.png'),
  ];


  const changeDice1 = () => {
    setDice2(require('./assets/dice-sides/sideA.png'));
    setDice3(require('./assets/dice-sides/sideA.png'));
    for(var i = 0; i < 10; i++){
      (function(i){
          setTimeout(function(){
            setDice1(sidesImages[Math.floor(Math.random()*sidesImages.length)])
          }, 100 * (i + 1));
      })(i);
    }
    setTimeout(function(){
      let value1 = Math.floor(Math.random()*sidesImages.length);
      setDice1(sidesImages[value1]);
    }, 1100);
  }
  const changeDice2 = () => {
    setDice3(require('./assets/dice-sides/sideA.png'));
    for(var i = 0; i < 10; i++){
      (function(i){
          setTimeout(function(){
            setDice1(sidesImages[Math.floor(Math.random()*sidesImages.length)])
            setDice2(sidesImages[Math.floor(Math.random()*sidesImages.length)])
          }, 100 * (i + 1));
      })(i);
    }
    setTimeout(function(){
      let value1 = Math.floor(Math.random()*sidesImages.length);
      let value2 = Math.floor(Math.random()*sidesImages.length);
      if (value1 > value2) {
        setDice1(sidesImages[value1]);
        setDice2(sidesImages[value2]);
      } else {
        setDice1(sidesImages[value2]);
        setDice2(sidesImages[value1]);
      }
      
    }, 1100);
  }
  const changeDice3 = () => {
    for(var i = 0; i < 10; i++){
      (function(i){
          setTimeout(function(){
            setDice1(sidesImages[Math.floor(Math.random()*sidesImages.length)])
            setDice2(sidesImages[Math.floor(Math.random()*sidesImages.length)])
            setDice3(sidesImages[Math.floor(Math.random()*sidesImages.length)])
          }, 100 * (i + 1));
      })(i);
    }
    setTimeout(function(){
      let value1 = Math.floor(Math.random()*sidesImages.length);
      let value2 = Math.floor(Math.random()*sidesImages.length);
      let value3 = Math.floor(Math.random()*sidesImages.length);
      if (value1 >= value2 && value1 >= value3) {
        setDice1(sidesImages[value1]);
        if (value2 > value3) {
          setDice2(sidesImages[value2]);
          setDice3(sidesImages[value3]);
        } else {
          setDice2(sidesImages[value3]);
          setDice3(sidesImages[value2]);
        }
      } else if (value2 >= value1 && value2 >= value3) {
        setDice1(sidesImages[value2]);
        if (value1 > value3) {
          setDice2(sidesImages[value1]);
          setDice3(sidesImages[value3]);
        } else {
          setDice2(sidesImages[value3]);
          setDice3(sidesImages[value1]);
        }
      } else {
        setDice1(sidesImages[value3]);
        if (value1 > value2) {
          setDice2(sidesImages[value1]);
          setDice3(sidesImages[value2]);
        } else {
          setDice2(sidesImages[value2]);
          setDice3(sidesImages[value1]);
        }
      }
    }, 1100);
  }
  const changeDice4 = () => {
    setDice5(require('./assets/dice-sides/sideA.png'));
    setDice6(require('./assets/dice-sides/sideA.png'));
    for(var i = 0; i < 10; i++){
      (function(i){
          setTimeout(function(){
            setDice4(sidesImages[Math.floor(Math.random()*sidesImages.length)])
          }, 100 * (i + 1));
      })(i);
    }
    setTimeout(function(){
      let value1 = Math.floor(Math.random()*sidesImages.length);
      setDice4(sidesImages[value1]);
    }, 1100);
  }
  const changeDice5 = () => {
    setDice6(require('./assets/dice-sides/sideA.png'));
    for(var i = 0; i < 10; i++){
      (function(i){
          setTimeout(function(){
            setDice4(sidesImages[Math.floor(Math.random()*sidesImages.length)])
            setDice5(sidesImages[Math.floor(Math.random()*sidesImages.length)])
          }, 100 * (i + 1));
      })(i);
    }
    setTimeout(function(){
      let value1 = Math.floor(Math.random()*sidesImages.length);
      let value2 = Math.floor(Math.random()*sidesImages.length);
      if (value1 > value2) {
        setDice4(sidesImages[value1]);
        setDice5(sidesImages[value2]);
      } else {
        setDice4(sidesImages[value2]);
        setDice5(sidesImages[value1]);
      }
    }, 1100);
  }
  const changeDice6 = () => {
    for(var i = 0; i < 10; i++){
      (function(i){
          setTimeout(function(){
            setDice4(sidesImages[Math.floor(Math.random()*sidesImages.length)])
            setDice5(sidesImages[Math.floor(Math.random()*sidesImages.length)])
            setDice6(sidesImages[Math.floor(Math.random()*sidesImages.length)])
          }, 100 * (i + 1));
      })(i);
    }
    setTimeout(function(){
      let value1 = Math.floor(Math.random()*sidesImages.length);
      let value2 = Math.floor(Math.random()*sidesImages.length);
      let value3 = Math.floor(Math.random()*sidesImages.length);
      if (value1 >= value2 && value1 >= value3) {
        setDice4(sidesImages[value1]);
        if (value2 > value3) {
          setDice5(sidesImages[value2]);
          setDice6(sidesImages[value3]);
        } else {
          setDice5(sidesImages[value3]);
          setDice6(sidesImages[value2]);
        }
      } else if (value2 >= value1 && value2 >= value3) {
        setDice4(sidesImages[value2]);
        if (value1 > value3) {
          setDice5(sidesImages[value1]);
          setDice6(sidesImages[value3]);
        } else {
          setDice5(sidesImages[value3]);
          setDice6(sidesImages[value1]);
        }
      } else {
        setDice4(sidesImages[value3]);
        if (value1 > value2) {
          setDice5(sidesImages[value1]);
          setDice6(sidesImages[value2]);
        } else {
          setDice5(sidesImages[value2]);
          setDice6(sidesImages[value1]);
        }
      }
    }, 1100);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerLeft}>
        <TouchableOpacity style={styles.button} onPress={()=>{ changeDice1() }}>
          <Image source={dice1}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{ changeDice2() }}>
          <Image source={dice2}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{ changeDice3() }}>
          <Image source={dice3}/>
        </TouchableOpacity>
      </View>
      <View style={styles.containerRight}>
        <TouchableOpacity style={styles.button} onPress={()=>{ changeDice4() }}>
            <Image source={dice4}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{ changeDice5() }}>
            <Image source={dice5}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>{ changeDice6() }}>
            <Image source={dice6}/>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  }
});
