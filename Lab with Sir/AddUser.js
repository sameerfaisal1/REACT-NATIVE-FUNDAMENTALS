import {StyleSheet, Text, TextInput, View, Alert} from 'react-native';
import React, {useState} from 'react';
import {Button, RadioButton} from 'react-native-paper';

const AddUser = () => {
  const [gender, Setgender] = useState('female');
  const [status, setStatus] = useState('active');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [students, setStudents] = useState([]); // Array to store student data

  const handleSave = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill out all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    const newStudent = {
      email,
      password,
      gender,
      status,
    };

    // Adding new student to array and updating state
    setStudents([...students, newStudent]);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    Alert.alert('Success', 'Student added successfully!');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.counter}>
        <Text style={styles.countertxt}>TOTAL USERS: {students.length}</Text>
      </View>

      <Text style={styles.header}>Validation Form</Text>

      <TextInput
        placeholder="Email"
        style={styles.txt}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        style={styles.txt}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        style={styles.txt}
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.rdbtns}>
        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => Setgender('male')}
            status={gender === 'male' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.rdbtntxt}>Male</Text>
        </View>
        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => Setgender('female')}
            status={gender === 'female' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.rdbtntxt}>Female</Text>
        </View>
      </View>

      <View style={styles.rdbtns}>
        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => setStatus('active')}
            status={status === 'active' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.rdbtntxt}>Active</Text>
        </View>
        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => setStatus('inactive')}
            status={status === 'inactive' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.rdbtntxt}>Inactive</Text>
        </View>
      </View>

      <Button
        style={styles.btn}
        mode="contained"
        onPress={handleSave}
        buttonColor="orange">
        SAVE
      </Button>
    </View>
  );
};

export default AddUser;

const styles = StyleSheet.create({
  mainContainer: {
    margin: 20,
  },
  counter: {
    backgroundColor: 'orange',
  },
  countertxt: {
    fontSize: 25,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
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
