import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-paper';
import {openDatabase} from 'react-native-sqlite-storage';

const Database = () => {
  const [ID, SetID] = useState(0);
  const [NAME, SETNAME] = useState('');
  const dbs = openDatabase({name: 'myDB.db'});

  const createtable = () => {
    dbs.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS STUDENT(ID INTEGER PRIMARY KEY, name TEXT)',
        [],
        (sqltxn, res) => {
          console.warn('Table Created Successfully :)');
        },
        error => {
          console.warn('Error while creating table:', error.message);
        },
      );
    });
  };

  const insertData = () => {
    dbs.transaction(txn => {
      txn.executeSql(
        'INSERT INTO STUDENT(ID,NAME) VALUES(?,?)',
        [ID, NAME],
        (txnSql, res) => {
          console.warn('DATA INSERT SUCCESSFULLY');
        },
        error => {
          console.warn('Error Message: ' + error.message);
        },
      );
    });
  };

  const searchbyID = () => {
    dbs.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM STUDENT WHERE ID=?',
        [ID],
        (sqltxn, res) => {
          let list = res.rows.raw();
          console.warn(list[0].NAME);
          SETNAME(list[0].name);
        },
        error => {
          console.warn('Error Message: ' + error.message);
        },
      );
    });
  };

  useEffect(() => {
    createtable();
  }, []);

  return (
    <View>
      <TextInput
        placeholder="Enter Arid Number"
        style={styles.sas}
        onChangeText={txt => SetID(txt)}
        ID={ID}
      />
      <TextInput
        placeholder="Enter Your Name"
        style={styles.sas}
        onChangeText={txt => SETNAME(txt)}
        value={NAME}
      />

      <Button
        mode="contained"
        style={styles.btn}
        labelStyle={{fontSize: 20}}
        onPress={insertData}>
        INSERT DATA
      </Button>
      <Button mode="contained" style={styles.btn} labelStyle={{fontSize: 20}}>
        DELETE DATA
      </Button>
      <Button mode="contained" style={styles.btn} labelStyle={{fontSize: 20}}>
        UPDATE DATA
      </Button>
      <Button
        mode="contained"
        style={styles.btn}
        labelStyle={{fontSize: 20}}
        onPress={searchbyID}>
        Search By Arid Number
      </Button>
    </View>
  );
};

export default Database;

const styles = StyleSheet.create({
  sas: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: 'orange',
    margin: 8,
    fontWeight: 'bold',
    padding: 15,
    color: 'blue',
  },
  btn: {
    margin: 10,
  },
});
