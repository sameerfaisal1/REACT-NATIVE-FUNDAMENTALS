import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {RadioButton, Button, Checkbox} from 'react-native-paper';
import {SelectList} from 'react-native-dropdown-select-list';

const Task4 = () => {
  const [name, setName] = useState('');
  const [Mob, setMobNo] = useState('');
  const [Gender, Setgender] = useState();
  const [martiaslstatus, setMartialstatus] = useState('');
  const [lecture, Setlecture] = useState('');
  const [result, setResult] = useState('');

  function validate() {
    if (martiaslstatus == 'married' && lecture == 'seniorlecture')
      setResult(
        'BASIC SALARY: SALARY FOR MARRIED AND SENIOR LECTURER IS 50,000 AND ITS MARRIED BONUS IS 10%',
      );
    else {
      setResult(
        'BASIC SALARY: 90,000 FOR JUNIOR LECTURER IF MARRIED STATUS IS THEN 15% BONUS',
      );
    }
  }

  return (
    <View>
      <TextInput
        placeholder="NAME"
        style={styles.txt}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="MOB NO"
        style={styles.txt}
        value={Mob}
        onChangeText={setMobNo}
      />

      <View style={styles.rdbtns}>
        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => Setgender('male')}
            status={Gender === 'male' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.rdbtntxt}>Male</Text>
        </View>

        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => Setgender('female')}
            status={Gender === 'female' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.rdbtntxt}>Female</Text>
        </View>
      </View>

      <View style={styles.rdbtns}>
        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => setMartialstatus('married')}
            status={martiaslstatus === 'married' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.rdbtntxt}>Married</Text>
        </View>

        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => setMartialstatus('unmarried')}
            status={martiaslstatus === 'unmarried' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.rdbtntxt}>Unmarried</Text>
        </View>
      </View>

      <View style={styles.rdbtns}>
        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => Setlecture('seniorlecture')}
            status={lecture === 'seniorlecture' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.rdbtntxt}>Sr Lecturer</Text>
        </View>

        <View style={styles.rdbtn}>
          <RadioButton
            onPress={() => Setlecture('juniorlecturer')}
            status={lecture === 'juniorlecturer' ? 'checked' : 'unchecked'}
          />
          <Text style={styles.rdbtntxt}>Jr Lecturer</Text>
        </View>
      </View>

      <Button
        style={styles.btn}
        mode="contained"
        onPress={validate}
        buttonColor="orange">
        EXPECTED SALARY
      </Button>

      <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>
        {result}
      </Text>
    </View>
  );
};

export default Task4;

const styles = StyleSheet.create({
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
});
