import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const Screen3 = () => {
  return (
    <View>
      <Button mode="contained" labelStyle={{fontSize: 20}} style={{margin: 10}}>
        Get All User
      </Button>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({});
