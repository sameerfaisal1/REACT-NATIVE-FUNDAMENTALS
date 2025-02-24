import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Checkbox, RadioButton} from 'react-native-paper';

const LoginForm = () => {
  const [gender, Setgender] = useState('female');
  const [status, setStatus] = useState('active');
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Validation Form</Text>

      <TextInput placeholder="Email" style={styles.txt} />
      <TextInput placeholder="password" style={styles.txt} />
      <TextInput placeholder="Confirm Password" style={styles.txt} />

      <View style={styles.rdbtns}>
        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => Setgender('male')}
            status={gender == 'male' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.rdbtntxt}>Male</Text>
        </View>
        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => Setgender('female')}
            status={gender == 'female' ? 'checked' : 'unchecked'}></RadioButton>
          <Text style={styles.rdbtntxt}>Female</Text>
        </View>
      </View>

      <View style={styles.rdbtns}>
        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => setStatus('active')}
            status={status == 'active' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.rdbtntxt}>Active</Text>
        </View>
        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => setStatus('Inactive')}
            status={
              status == 'Inactive' ? 'checked' : 'unchecked'
            }></RadioButton>
          <Text style={styles.rdbtntxt}>InActive</Text>
        </View>
      </View>

      <Button
        style={styles.btn}
        mode="contained"
        onPress={() => {
          console.warn('Hello');
        }}
        buttonColor="orange">
        SAVE
      </Button>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'orange',
    margin: 10,
  },
  txt: {
    borderWidth: 2,
    padding: 10,
    fontSize: 19,
    borderColor: 'orange',
    fontWeight: 'bold',
    marginTop: 20,
    borderRadius: 30,
    margin: 12,
  },
  rdbtns: {
    flexDirection: 'row',
  },
  rdbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    margin: 12,
  },
  rdbtntxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
  },
  btn: {
    marginTop: 20,
  },
});
