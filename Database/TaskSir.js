import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import SQLite from 'react-native-sqlite-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

// Initialize database
const db = SQLite.openDatabase(
  {name: 'UserDB.db', location: 'default'},
  () => console.log('Database connected'),
  error => console.log('Database error:', error),
);

const TaskSir = () => {
  const [gender, setGender] = useState('male');
  const [imageUri, setImageUri] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, phone1 TEXT, phone2 TEXT, city TEXT, gender TEXT, image TEXT)',
        [],
      );
    });
  }, []);

  const addUser = () => {
    if (!email || !name || !phone1 || !city) {
      Alert.alert('Error', 'Please fill all required fields');
      return;
    }
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO Users (name, email, phone1, phone2, city, gender, image) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, email, phone1, phone2, city, gender, imageUri],
        (_, result) => Alert.alert('Success', 'User added successfully'),
        error => console.log('Error adding user:', error),
      );
    });
  };

  const getUserByEmail = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter email');
      return;
    }
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Users WHERE email = ?',
        [email],
        (_, {rows}) => {
          if (rows.length > 0) {
            let user = rows.item(0);
            setName(user.name);
            setPhone1(user.phone1);
            setPhone2(user.phone2);
            setCity(user.city);
            setGender(user.gender);
            setImageUri(user.image);
          } else {
            Alert.alert('Not Found', 'No user found with this email');
          }
        },
        error => console.log('Error fetching user:', error),
      );
    });
  };

  const updateUser = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter email to update user');
      return;
    }
    db.transaction(tx => {
      tx.executeSql(
        'UPDATE Users SET name = ?, phone1 = ?, phone2 = ?, city = ?, gender = ?, image = ? WHERE email = ?',
        [name, phone1, phone2, city, gender, imageUri, email],
        (_, result) => Alert.alert('Success', 'User updated successfully'),
        error => console.log('Error updating user:', error),
      );
    });
  };

  const deleteUser = () => {
    if (!email) {
      Alert.alert('Error', 'Please enter email to delete user');
      return;
    }
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM Users WHERE email = ?',
        [email],
        (_, result) => Alert.alert('Success', 'User deleted successfully'),
        error => console.log('Error deleting user:', error),
      );
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.btn} onPress={addUser}>
          <Text style={styles.btntxt}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={updateUser}>
          <Text style={styles.btntxt}>Update by Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={getUserByEmail}>
          <Text style={styles.btntxt}>Get by Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={deleteUser}>
          <Text style={styles.btntxt}>Delete</Text>
        </TouchableOpacity>
      </View>

      {/* Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone 1"
        value={phone1}
        onChangeText={setPhone1}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone 2"
        value={phone2}
        onChangeText={setPhone2}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />

      {/* Gender */}
      <View style={styles.radioGroup}>
        <RadioButton.Group onValueChange={setGender} value={gender}>
          <View style={styles.radioOption}>
            <RadioButton value="male" />
            <Text>Male</Text>
          </View>
          <View style={styles.radioOption}>
            <RadioButton value="female" />
            <Text>Female</Text>
          </View>
        </RadioButton.Group>
      </View>
    </ScrollView>
  );
};

export default TaskSir;

const styles = StyleSheet.create({
  container: {padding: 10, alignItems: 'center', flexGrow: 1},
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  btn: {backgroundColor: 'green', padding: 15, borderRadius: 10, margin: 10},
  btntxt: {color: 'white', fontSize: 16, fontWeight: 'bold'},
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  radioGroup: {flexDirection: 'row', justifyContent: 'center', marginTop: 10},
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});
