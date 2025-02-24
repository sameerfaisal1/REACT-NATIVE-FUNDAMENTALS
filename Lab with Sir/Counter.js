import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [dat, newdata] = useState(0);
  return (
    <View style={styles.main}>
      <View style={styles.con}>
        <Text style={styles.txt}>My Counter</Text>
        <Text style={styles.txt}>COUNT = {dat}</Text>

        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity
            style={{backgroundColor: 'orange', margin: 10}}
            onPress={() => {
              newdata(dat + 1);
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                padding: 10,
              }}>
              Increment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: 'orange', margin: 10}}
            onPress={() => {
              newdata(dat - 1);
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                padding: 10,
              }}>
              Decremnet
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{backgroundColor: 'red', margin: 10}}
            onPress={() => {
              newdata(0);
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                padding: 10,
              }}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  con: {
    alignItems: 'center',
  },

  txt: {
    fontSize: 33,
    fontWeight: 'bold',
    color: 'orange',
  },
});
