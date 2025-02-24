import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import {Button} from 'react-native-paper';
import {openDatabase} from 'react-native-sqlite-storage';

const DB1 = () => {
  const [ID, setID] = useState();
  const [name, setName] = useState('');
  const [allPersons, setAllPersons] = useState([]);
  const [tempAllPerson, setAllTempPersons] = useState([]);

  const db = openDatabase({name: 'myDB.db'});

  const createTable = () => {
    db.transaction(txn => {
      txn.executeSql(
        'create table if not exists Person(ID integer Primary key,pName TEXT)',
        [],
        (sqltxn, res) => {
          console.log('Table Created Successfully');
        },
        error => {
          console.log('Error Message\t' + error.message);
        },
      );
    });
  };

  const insertData = () => {
    db.transaction(txn => {
      txn.executeSql(
        'insert into Person(ID,pName) values(?,?)',
        [ID, name],
        (t, res) => {
          console.log('Data Inserted Successfully');
        },
        error => {
          console.log(error.message);
        },
      );
    });
  };

  const getAllData = () => {
    console.log('GetAllData');
    db.transaction(txn => {
      txn.executeSql(
        'Select * from Person',
        [],
        (txn, res) => {
          var tempAllPerson = [];
          for (i = 0; i < res.rows.length; i++) {
            var p = {ID: res.rows.item(i).ID, pName: res.rows.item(i).pName};
            tempAllPerson.push(p);
            console.log(tempAllPerson);
          }
          setAllPersons([...tempAllPerson]);
          // console.log(allPersons)
        },
        error => {},
      );
    });
  };

  const getDataByID = () => {
    db.transaction(txn => {
      txn.executeSql(
        'select * from Person where ID=?',
        [ID],
        (t, res) => {
          console.log(res.rows.item(0));
          setName(res.rows.item(0).pName);
        },
        error => {
          console.log(error.message);
        },
      );
    });
  };

  const Reset = () => {
    setAllPersons(tempAllPerson.Reset);
  };
  const DeletetAllData = () => {
    db.transaction(txn => {
      txn.executeSql(
        'Delete from person ',
        [],
        (txn, res) => {
          // var tempAllPerson = []
          // for (i = 0; i < res.rows.length; i++) {
          //     var p = { ID: res.rows.item(i).ID, pName: res.rows.item(i).pName };
          //     tempAllPerson.push(p)
          //     console.log(tempAllPerson)
          // }
          // console.log(allPersons)
        },
        error => {},
      );
    });
  };
  const DeletetAllDataByid = () => {
    db.transaction(txn => {
      txn.executeSql(
        'Delete from person where id=?',
        [ID],
        (txn, res) => {
          // var tempAllPerson = []
          // for (i = 0; i < res.rows.length; i++) {
          //     var p = { ID: res.rows.item(i).ID, pName: res.rows.item(i).pName };
          //     tempAllPerson.push(p)
          //     console.log(tempAllPerson)
          // }
          // console.log(allPersons)
        },
        error => {},
      );
    });
  };

  const UpdateData = () => {
    db.transaction(txn => {
      txn.executeSql(
        'Update person set name=?',
        [name],
        (txn, res) => {
          // var tempAllPerson = []
          // for (i = 0; i < res.rows.length; i++) {
          //     var p = { ID: res.rows.item(i).ID, pName: res.rows.item(i).pName };
          //     tempAllPerson.push(p)
          //     console.log(tempAllPerson)
          // }
          // console.log(allPersons)
        },
        error => {},
      );
    });
  };

  const UpdateDataByid = () => {
    db.transaction(txn => {
      txn.executeSql(
        'Update person set name=? where id=?',
        [name, ID],
        (txn, res) => {
          // var tempAllPerson = []
          // for (i = 0; i < res.rows.length; i++) {
          //     var p = { ID: res.rows.item(i).ID, pName: res.rows.item(i).pName };
          //     tempAllPerson.push(p)
          //     console.log(tempAllPerson)
          // }
          // console.log(allPersons)
        },
        error => {},
      );
    });
  };

  useEffect(createTable, []);

  return (
    <View style={{}}>
      <TextInput
        onChangeText={setID}
        placeholder="Enter ID"
        value={ID}
        style={{borderWidth: 1, borderRadius: 10, margin: 10, fontSize: 20}}
      />
      <TextInput
        onChangeText={setName}
        placeholder="Enter Name"
        value={name}
        style={{borderWidth: 1, borderRadius: 10, margin: 10, fontSize: 20}}
      />
      <Button
        onPress={insertData}
        mode="contained"
        style={{
          borderRadius: 10,
          margin: 10,
          width: '40%',
          alignSelf: 'center',
        }}>
        Add Data
      </Button>
      <Button
        onPress={getDataByID}
        mode="contained"
        style={{
          borderRadius: 10,
          margin: 10,
          width: '40%',
          alignSelf: 'center',
        }}>
        Show By ID
      </Button>
      <Button
        onPress={getAllData}
        mode="contained"
        style={{
          borderRadius: 10,
          margin: 10,
          width: '40%',
          alignSelf: 'center',
        }}>
        Show All
      </Button>
      <Button
        onPress={Reset}
        mode="contained"
        style={{
          borderRadius: 10,
          margin: 10,
          width: '40%',
          alignSelf: 'center',
        }}>
        Reset
      </Button>
      <Button
        onPress={DeletetAllData}
        mode="contained"
        style={{
          borderRadius: 10,
          margin: 10,
          width: '40%',
          alignSelf: 'center',
        }}>
        Delete
      </Button>
      <Button
        onPress={DeletetAllDataByid}
        mode="contained"
        style={{
          borderRadius: 10,
          margin: 10,
          width: '40%',
          alignSelf: 'center',
        }}>
        Delete by ID
      </Button>
      <Button
        onPress={UpdateData}
        mode="contained"
        style={{
          borderRadius: 10,
          margin: 10,
          width: '40%',
          alignSelf: 'center',
        }}>
        update
      </Button>
      <Button
        onPress={UpdateDataByid}
        mode="contained"
        style={{
          borderRadius: 10,
          margin: 10,
          width: '40%',
          alignSelf: 'center',
        }}>
        update by ID
      </Button>
      <FlatList
        data={allPersons}
        renderItem={({item}) => (
          <Text>
            {item.pName} ---- {item.ID}
          </Text>
        )}
      />
    </View>
  );
};

export default DB1;
