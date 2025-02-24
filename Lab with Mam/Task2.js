import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Task2 = () => {
  const [password, setpassword] = useState();
  const [email, setEmail] = useState();
  function validate() {
    if (password == '123') {
      Alert.alert(`Hello ${email}`);
    } else {
      Alert.alert(`Login Faile`);
    }
  }
  return (
    <View style={styles.mainCon}>
      <TextInput
        placeholder="username"
        style={styles.txtinp}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="password"
        style={styles.txtinp}
        value={password}
        onChangeText={text => setpassword(text)}
      />

      <View style={styles.maintbn}>
        <TouchableOpacity style={styles.btn} onPress={() => validate()}>
          <Text style={styles.btntxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Task2;

const styles = StyleSheet.create({
  mainCon: {
    margin: 20,
  },
  txtinp: {
    borderWidth: 2,
    borderColor: 'orange',
    margin: 10,
    borderRadius: 30,
    padding: 15,
    fontWeight: 'bold',
    fontSize: 20,
  },
  btn: {
    backgroundColor: 'red',
    margin: 15,
    borderRadius: 60,
    height: 80,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntxt: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
  },
  maintbn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
