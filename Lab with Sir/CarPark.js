import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Button, RadioButton} from 'react-native-paper';

const CarPark = () => {
  const [carNum, setCarNum] = useState('');
  const [Vehicle, setVehicle] = useState('car');
  const [parkedVehicles, setParkedVehicles] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);
  const [vehicleList, setVehicleList] = useState([]);
  const [filterType, setFilterType] = useState('All');

  function parkIn() {
    if (!carNum.trim()) return; // Prevent adding empty vehicle numbers
    const vehObj = {
      carNumber: carNum,
      Vehicle: Vehicle,
    };
    setVehicleList([...vehicleList, vehObj]);
    setParkedVehicles(vehicleList.length + 1);
    setTotalEarnings(
      totalEarnings + (Vehicle === 'car' ? 100 : 50), // Car earns 100, Bike earns 50
    );
    setCarNum(''); // Clear input field
  }

  function parkOut(item) {
    setVehicleList(vehicleList.filter(v => v.carNumber !== item.carNumber));
    setParkedVehicles(parkedVehicles - 1);
    setTotalEarnings(totalEarnings - (item.Vehicle === 'car' ? 100 : 50));
  }

  function filteredList() {
    if (filterType === 'All') {
      return vehicleList;
    }
    return vehicleList.filter(
      item => item.Vehicle === filterType.toLowerCase(),
    );
  }

  function renderVehicle({item}) {
    return (
      <View style={styles.list}>
        <View>
          <Text style={styles.listText}>Number: {item.carNumber}</Text>
          <Text style={styles.listText}>Type: {item.Vehicle}</Text>
        </View>
        <View style={{marginLeft: 90}}>
          <Button
            mode="contained"
            style={{margin: 10}}
            onPress={() => parkOut(item)}>
            Park Out
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View>
      <View style={{backgroundColor: 'red'}}>
        <Text
          style={{
            fontSize: 28,
            padding: 10,
            color: 'white',
            fontWeight: 'bold',
          }}>
          Car Parking System
        </Text>
      </View>

      <View style={{margin: 15}}>
        <TextInput
          style={styles.inp}
          value={carNum}
          onChangeText={text => setCarNum(text)}
          placeholder="Enter Vehicle Number"
        />
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            status={Vehicle === 'car' ? 'checked' : 'unchecked'}
            onPress={() => setVehicle('car')}
          />
          <Text style={{fontSize: 20, color: 'blue'}}>Car</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
          <RadioButton
            status={Vehicle === 'bike' ? 'checked' : 'unchecked'}
            onPress={() => setVehicle('bike')}
          />
          <Text style={{fontSize: 20, color: 'blue'}}>Bike</Text>
        </View>

        <View style={{marginLeft: 130}}>
          <Button onPress={parkIn} mode="contained">
            Park In
          </Button>
        </View>
      </View>

      <View style={{flexDirection: 'row', margin: 10}}>
        <Button style={{margin: 10}} onPress={() => setFilterType('All')}>
          All
        </Button>
        <Button style={{margin: 10}} onPress={() => setFilterType('Car')}>
          Car
        </Button>
        <Button style={{margin: 10}} onPress={() => setFilterType('Bike')}>
          Bike
        </Button>
      </View>

      <View style={{margin: 10, flexDirection: 'row'}}>
        <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>
          Total Parked: {parkedVehicles}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: 'bold',
            marginLeft: 160,
          }}>
          Total Earnings: {totalEarnings}
        </Text>
      </View>

      <View>
        <FlatList
          data={filteredList()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderVehicle}
        />
      </View>
    </View>
  );
};

export default CarPark;

const styles = StyleSheet.create({
  inp: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'grey',
  },
  list: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  listText: {
    fontSize: 20,
    padding: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
