import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Button} from 'react-native-paper';
import {SelectList} from 'react-native-dropdown-select-list';

const DropdownList = () => {
  const [country, setCountry] = useState('');
  const [allCountries, setAllCountries] = useState([
    {key: 1, value: 'Pakistan'},
    {key: 2, value: 'Iran'},
    {key: 3, value: 'Palestine'},
  ]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(4);

  const addToList = () => {
    if (country.trim() === '') {
      alert('Please enter a valid country name!');
      return;
    }
    const newCountry = {key: count, value: country};
    setCount(count + 1);
    setAllCountries([...allCountries, newCountry]);
    setCountry('');
  };

  const renderCountryItem = ({item}) => (
    <View style={styles.countryItem}>
      <Text style={styles.countryText}>
        ID: {item.key} | Country: {item.value}
      </Text>
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: 'lightblue'}}>
      <TextInput
        value={country}
        placeholder="Enter Country"
        onChangeText={val => setCountry(val)}
        style={styles.input}
      />

      <Button
        onPress={addToList}
        mode="elevated"
        style={{margin: 10}}
        labelStyle={{fontSize: 17, fontWeight: 'bold'}}>
        Add Country
      </Button>

      <SelectList
        placeholder="Select Country"
        data={allCountries}
        setSelected={val => setSelectedCountry(val)}
        save="value"
        boxStyles={styles.selectBox}
      />

      <Button
        mode="elevated"
        style={{margin: 10}}
        labelStyle={{fontSize: 17, fontWeight: 'bold'}}
        onPress={() => setShow(!show)}>
        {show ? 'Hide List' : 'Show List'}
      </Button>

      {show && (
        <FlatList
          data={allCountries}
          keyExtractor={item => item.key.toString()}
          renderItem={renderCountryItem}
        />
      )}

      {selectedCountry && (
        <View style={styles.selectedCountry}>
          <Text style={styles.selectedCountryText}>
            Selected Country: {selectedCountry}
          </Text>
        </View>
      )}
    </View>
  );
};

export default DropdownList;

const styles = StyleSheet.create({
  input: {
    borderColor: 'white',
    borderWidth: 2,
    margin: 10,
    fontSize: 15,
    padding: 16,
    backgroundColor: 'white',
  },
  selectBox: {
    borderColor: 'white',
    borderWidth: 2,
    margin: 10,
    backgroundColor: 'pink',
  },
  countryItem: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  countryText: {
    fontSize: 18,
    color: 'black',
  },
  selectedCountry: {
    margin: 10,
    padding: 10,
    backgroundColor: 'lightgreen',
    borderRadius: 8,
  },
  selectedCountryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkgreen',
  },
});
