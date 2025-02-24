import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Task3 = () => {
  const [inp1, Setinp1] = useState(0);
  const [inp2, Setinp2] = useState(0);
  const [answer, Setanswer] = useState(0);

  function Add() {
    Setanswer(parseInt(inp1) + parseInt(inp2));
  }
  function Sub() {
    Setanswer(parseInt(inp1) - parseInt(inp2));
  }
  function Product() {
    Setanswer(parseInt(inp1) * parseInt(inp2));
  }
  function Div() {
    if (inp2 == 0) {
      Alert.alert(`can't Divided  by  zero`);
    } else Setanswer(parseInt(inp1) / parseInt(inp2));
  }
  function Reset() {
    Setinp1();
    Setinp2();
    Setanswer(0);
  }
  return (
    <View>
      <TextInput
        placeholder="Enter 1st Number"
        onChangeText={text => Setinp1(text)}
        value={inp1}
        style={styles.inp}
      />
      <TextInput
        placeholder="Enter 2nd Number"
        onChangeText={text => Setinp2(text)}
        value={inp2}
        style={styles.inp}
      />

      <View
        style={{flexDirection: 'row', justifyContent: 'center', margin: 10}}>
        <TouchableOpacity style={styles.btn} onPress={Add}>
          <Text style={styles.btntxt}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Sub}>
          <Text style={styles.btntxt}>Sub</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', margin: 10}}>
        <TouchableOpacity style={styles.btn} onPress={Product}>
          <Text style={styles.btntxt}>Prod</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={Div}>
          <Text style={styles.btntxt}>Div</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.result}>Result: {answer}</Text>

      <View
        style={{flexDirection: 'row', justifyContent: 'center', margin: 10}}>
        <TouchableOpacity style={styles.btn} onPress={Reset}>
          <Text style={styles.btntxt}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task3;

const styles = StyleSheet.create({
  inp: {
    color: 'black',
    borderWidth: 3,
    borderColor: 'orange',
    margin: 20,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 30,
  },
  btn: {
    backgroundColor: 'orange',
    height: 50,
    width: 80,
    borderRadius: 30,
    margin: 20,
  },
  btntxt: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 8,
    margin: 3,
    fontWeight: 'bold',
  },
  result: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20,
    color: 'black',
  },
});
