import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, IconButton} from 'react-native-paper';

const FlatList_Edit = () => {
  const [employee, setEmployee] = useState([
    {ID: 1, name: 'SAMEER', age: 23, City: 'KARACHI'},
    {ID: 2, name: 'ZAARA', age: 23, City: 'CALIFORNIA'},
    {ID: 3, name: 'DIANA', age: 23, City: 'LOS ANGLES'},
    {ID: 4, name: 'ZAINAB', age: 23, City: 'ISLAMABAD'},
    {ID: 5, name: 'DEEPIKA', age: 23, City: 'INDIA'},
  ]);
  function Allemployee({item}) {
    return (
      <View>
        <View style={styles.infoBox}>
          <Text style={styles.infoHeader}>{item.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.infoPers}>
              <Text style={styles.infoPerstxt}>City: {item.City}</Text>
              <Text style={styles.infoPerstxt}>Age: {item.age}</Text>
            </View>
            <View style={styles.infoedits}>
              <Button
                mode="elevated"
                style={{margin: 10}}
                onPress={() => Alert.alert(item.ID + '')}>
                Show Id
              </Button>
              <Button
                mode="elevated"
                style={{margin: 10}}
                onPress={() => deleteEmp(item.ID)}>
                Delete
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
  function deleteEmp(id) {
    var filteredEmployee = employee.filter(e => e.ID != id);
    setEmployee([...filteredEmployee]);
  }
  const [reset, Setreset] = useState(employee);
  return (
    <View>
      <Button
        style={{margin: 20, backgroundColor: 'red'}}
        labelStyle={{fontSize: 20, color: 'white'}}
        mode="elevated"
        onPress={() => setEmployee(reset)}>
        RESET
      </Button>
      <FlatList data={employee} renderItem={Allemployee} />
    </View>
  );
};

export default FlatList_Edit;

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: 'lightpink',
    margin: 15,
    padding: 10,
    borderRadius: 20,
  },
  infoHeader: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  infoPers: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    flex: 2,
    marginRight: 10,
  },
  infoPerstxt: {
    fontSize: 20,
    margin: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  infoedits: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
  },
});
