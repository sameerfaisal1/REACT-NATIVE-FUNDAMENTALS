import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Task1 = () => {
  const [value, newValue] = useState('0');
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View style={styles.disp}>
        <Text style={styles.disppcal}>{value}</Text>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            newValue('7');
          }}>
          <Text style={styles.txt}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            newValue('8');
          }}>
          <Text style={styles.txt}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            newValue('9');
          }}>
          <Text style={styles.txt}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            newValue('/');
          }}>
          <Text style={styles.txt}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            newValue('4');
          }}>
          <Text style={styles.txt}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            newValue('5');
          }}>
          <Text style={styles.txt}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            newValue('6');
          }}>
          <Text style={styles.txt}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            newValue('-');
          }}>
          <Text style={styles.txt}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.btnView}>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            newValue('1');
          }}>
          <Text style={styles.txt}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            newValue('2');
          }}>
          <Text style={styles.txt}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            newValue('3');
          }}>
          <Text style={styles.txt}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btns}
          onPress={() => {
            newValue('+');
          }}>
          <Text style={styles.txt}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task1;

const styles = StyleSheet.create({
  disp: {
    margin: 10,
    backgroundColor: 'white',
    height: 90,
    width: 390,
    marginTop: 90,
  },
  disppcal: {
    fontSize: 60,
    marginLeft: 270,
  },
  btnView: {
    flexDirection: 'row',
  },
  btns: {
    backgroundColor: 'orange',
    margin: 10,
    height: 80,
    width: 80,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 60,
  },
  txt: {
    fontSize: 60,
  },
});
