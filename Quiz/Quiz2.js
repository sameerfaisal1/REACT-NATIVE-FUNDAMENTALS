import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {launchImageLibrary} from 'react-native-image-picker';

// Open SQLite database
const db = SQLite.openDatabase(
  {
    name: 'EmployeesDB',
    location: 'default',
  },
  () => console.log('Database opened'),
  error => console.log('Error opening database: ', error),
);

const Quiz2 = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [photo, setPhoto] = useState(null);
  const [gender, setGender] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // For filtered list
  const [showList, setShowList] = useState(false); // To show/hide list

  // Initialize the database
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS Employees (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          designation TEXT,
          gender TEXT,
          photo TEXT
        );`,
      );
    });
  }, []);

  // Handle form submission
  const handleSubmit = () => {
    if (!name || !designation || !photo || !gender) {
      Alert.alert('Error', 'Please fill all fields!');
      return;
    }

    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO Employees (name, designation, gender, photo) VALUES (?, ?, ?, ?)`,
        [name, designation, gender, photo],
        () => {
          Alert.alert('Success', 'Employee added successfully!');
          setName('');
          setDesignation('');
          setPhoto(null);
          setGender('');
          fetchData(); // Fetch updated data after inserting a new record
        },
        error => console.log('Error inserting data: ', error),
      );
    });
  };

  // Fetch all data
  const fetchData = () => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM Employees`,
        [],
        (tx, results) => {
          const rows = results.rows;
          let employees = [];
          for (let i = 0; i < rows.length; i++) {
            employees.push(rows.item(i));
          }
          setData(employees);
          setFilteredData(employees); // Set filteredData initially to all data
        },
        error => console.log('Error fetching data: ', error),
      );
    });
  };

  // Open Image Picker
  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo', includeBase64: false}, response => {
      if (response.assets && response.assets.length > 0) {
        setPhoto(response.assets[0].uri);
      }
    });
  };

  // Filter by Gender (Male or Female)
  const filterByGender = gender => {
    setShowList(true);
    const filtered = data.filter(
      item => item.gender.toLowerCase() === gender.toLowerCase(),
    );
    setFilteredData(filtered);
  };

  return (
    <View style={styles.container}>
      {/* Form */}
      <Text style={styles.heading}>Add New Employee</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Designation"
        value={designation}
        onChangeText={setDesignation}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Gender (male/female)"
        value={gender}
        onChangeText={setGender}
      />
      <Button title="Select Photo" onPress={pickImage} />

      {/* Display Selected Photo */}
      {photo && <Image source={{uri: photo}} style={styles.selectedPhoto} />}
      <Button title="Submit" onPress={handleSubmit} />

      {/* Gender Filter Buttons */}
      <View style={styles.filterButtons}>
        <Button title="Male" onPress={() => filterByGender('male')} />
        <Button title="Female" onPress={() => filterByGender('female')} />
      </View>

      {/* Display Employees */}
      {showList && (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Image source={{uri: item.photo}} style={styles.cardPhoto} />
              <View style={styles.cardDetails}>
                <Text style={styles.text}>Name: {item.name}</Text>
                <Text style={styles.text}>Designation: {item.designation}</Text>
                <Text style={styles.text}>Gender: {item.gender}</Text>
              </View>
            </View>
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
      <ScrollView></ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  selectedPhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginVertical: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
  },
  cardPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  cardDetails: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
  },
  listContainer: {
    paddingBottom: 20,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
});

export default Quiz2;
