import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {RadioButton} from 'react-native-paper';

const SHOW_HIDE = () => {
  const [selected, setSelected] = useState(null);
  const [select, selectedOption] = useState(null);
  const [show, setShow] = useState(false);
  const [color, setColor] = useState('black');

  const data = [
    {key: '1', value: 'PAKISTAN'},
    {key: '2', value: 'INDIA'},
    {key: '3', value: 'RUSSIA'},
  ];

  return (
    //RADIOBUTTON WITH STYLE
    //SHOW RADIO BUTTON
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <RadioButton
          onPress={() => {
            setColor('green');
          }}
          status={color == 'black' ? 'unchecked' : 'checked'}></RadioButton>
        <Text style={{fontSize: 20}}>Show style</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <RadioButton
          onPress={() => setShow(!show)}
          status={show ? 'checked' : 'unchecked'}></RadioButton>
        <Text style={{fontSize: 20}}>Show/Hide</Text>
      </View>

      <SelectList
        setSelected={selectedOption}
        data={data}
        save="value"

        // boxStyles={styles.dropdownBox} // Dropdown box ka style
        // dropdownStyles={styles.dropdownList} // List ka style jab open hota hai
      />
      {show && (
        <Text style={{fontSize: 20, color: color}}>YOU SELECTED: {select}</Text>
      )}
    </View>
  );
};

export default SHOW_HIDE;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // text: {
  //   fontSize: 22,
  //   marginBottom: 10,
  // },
  // dropdownBox: {
  //   backgroundColor: 'orange', // Dropdown box ka background color
  //   borderColor: 'red', // Border color
  //   borderWidth: 2,
  // },
  // dropdownList: {
  //   backgroundColor: 'orange', // List items ka background color jab open hota hai
  // },
});
