import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const Screen2 = () => {
  return (
    <View>
      <TextInput
        placeholder="Password"
        style={{
          margin: 10,
          fontSize: 20,
          borderWidth: 3,
          padding: 10,
          color: 'blue',
        }}
      />

      <TextInput
        placeholder="Confirm Password"
        style={{
          margin: 10,
          fontSize: 20,
          borderWidth: 3,
          padding: 10,
          color: 'blue',
        }}
      />

      <Button mode="contained" style={{margin: 10}}>
        Save
      </Button>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
