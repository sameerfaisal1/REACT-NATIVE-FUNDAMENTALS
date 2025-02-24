import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {SelectList} from 'react-native-dropdown-select-list';

const Booking_Bus = () => {
  const [show, setShow] = useState(false);
  const [currShow, setCurrShow] = useState(true);
  const [sHOWADD, setAdd] = useState(false);
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [busNumber, setBusNumber] = useState('');
  const [departureTime, setDepartureTime] = useState('');

  const data = [
    {key: '1', value: 'PAKISTAN'},
    {key: '2', value: 'INDIA'},
  ];

  const handleAddRoute = () => {
    if (!source || !destination || !busNumber || !departureTime) {
      alert('Please fill all fields');
    } else {
      alert(
        `Route Added: ${source} to ${destination} | Bus: ${busNumber} | Time: ${departureTime}`,
      );
      setSource('');
      setDestination('');
      setBusNumber('');
      setDepartureTime('');
      setCurrShow(true);
      setShow(false);
    }
  };

  return (
    <View style={styles.container}>
      {currShow && (
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>HOME</Text>
          </View>
          <View>
            <Button
              mode="elevated"
              style={styles.button}
              onPress={() => {
                setShow(true);
                setCurrShow(false);
              }}>
              NEW ROUTE
            </Button>
            <Button
              mode="elevated"
              style={styles.button}
              onPress={() => {
                setAdd(true);
                setCurrShow(false);
              }}>
              SEARCH
            </Button>
          </View>
        </View>
      )}

      {show && (
        <View>
          <View style={styles.header}>
            <Text style={styles.headerText}>NEW ROUTE</Text>
          </View>

          <View style={styles.form}>
            <Text style={styles.label}>SOURCE</Text>
            <SelectList
              data={data}
              setSelected={setSource}
              boxStyles={styles.selectBox}
            />

            <Text style={styles.label}>DESTINATION</Text>
            <SelectList
              data={data}
              setSelected={setDestination}
              boxStyles={styles.selectBox}
            />
          </View>

          <View style={styles.row}>
            <View>
              <Text style={styles.label}>BUS#</Text>
              <TextInput
                mode="outlined"
                placeholder="ABC-123"
                value={busNumber}
                onChangeText={setBusNumber}
                style={styles.input}
              />
            </View>

            <View style={{marginLeft: 60}}>
              <Text style={styles.label}>DEPARTURE TIME</Text>
              <TextInput
                mode="outlined"
                placeholder="Enter time"
                value={departureTime}
                onChangeText={setDepartureTime}
                style={styles.input}
              />
            </View>
          </View>
          <Button
            mode="elevated"
            style={styles.button}
            onPress={handleAddRoute}>
            ADD
          </Button>
        </View>
      )}

      {sHOWADD && (
        <View>
          <Text style={styles.label}>Search functionality here...</Text>
          <Button
            mode="elevated"
            style={styles.button}
            onPress={() => {
              setAdd(false);
              setCurrShow(true);
            }}>
            BACK
          </Button>
        </View>
      )}
    </View>
  );
};

export default Booking_Bus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'orange',
  },
  headerText: {
    fontSize: 20,
    padding: 15,
    color: 'white',
  },
  button: {
    margin: 20,
  },
  form: {
    margin: 20,
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
  },
  selectBox: {
    marginBottom: 20,
  },
  row: {
    margin: 20,
    flexDirection: 'row',
  },
  input: {
    marginBottom: 10,
  },
});
