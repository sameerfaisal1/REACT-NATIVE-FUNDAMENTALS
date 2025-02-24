// import {Alert, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
// import React, {useState} from 'react';
// import {SelectList} from 'react-native-dropdown-select-list';
// import {Button} from 'react-native-paper';

// const Task5 = () => {
//   const [mobilename, setMobilename] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setSelectedCategory] = useState(null);
//   const [show, setShow] = useState(false);
//   const [currView, setCurrView] = useState(true);
//   const [stock, setMobStock] = useState([
//     {
//       id: 1,
//       name: 'Samsung S9',
//       price: 180000,
//       quantity: 2,
//       category: 'android',
//     },
//   ]);

//   const categories = [
//     {key: 1, value: 'android'},
//     {key: 2, value: 'ios'},
//     {key: 3, value: 'microsoft'},
//   ];

//   const addNew = () => {
//     if (mobilename && quantity && price && category) {
//       const newStock = {
//         id: stock.length + 1, // Generate a new ID
//         name: mobilename,
//         quantity: parseInt(quantity, 10),
//         price: parseFloat(price),
//         category,
//       };
//       setMobStock([...stock, newStock]);
//       setMobilename('');
//       setQuantity('');
//       setPrice('');
//       setSelectedCategory(null);
//     } else {
//       Alert.alert('Error', 'Please fill all the fields');
//     }
//   };

//   const showStockView = () => {
//     setShow(true);
//     setCurrView(false);
//   };

//   const deleteData = id => {
//     const filteredStock = stock.filter(item => item.id !== id);
//     setMobStock(filteredStock);
//   };

//   const showAll = ({item}) => (
//     <View style={styles.stockItem}>
//       <Text style={styles.stockText}>Name: {item.name}</Text>
//       <Text style={styles.stockText}>ID: {item.id}</Text>
//       <Text style={styles.stockText}>Price: {item.price}</Text>
//       <Text style={styles.stockText}>Quantity: {item.quantity}</Text>
//       <Text style={styles.stockText}>Category: {item.category}</Text>
//       <Button
//         mode="contained"
//         onPress={() => deleteData(item.id)}
//         style={styles.deleteButton}
//         buttonColor="red">
//         DELETE
//       </Button>
//     </View>
//   );

//   const goToSettings = () => {
//     setCurrView(true);
//     setShow(false);
//   };

//   return (
//     <View>
//       <Text style={styles.header}>Task5</Text>
//       {currView && (
//         <View style={styles.View1}>
//           <TextInput
//             placeholder="Enter Mobile Name"
//             value={mobilename}
//             onChangeText={setMobilename}
//             style={styles.txtinp}
//           />
//           <TextInput
//             placeholder="Enter Quantity"
//             value={quantity}
//             onChangeText={setQuantity}
//             style={styles.txtinp}
//             keyboardType="numeric"
//           />
//           <TextInput
//             placeholder="Enter Price"
//             value={price}
//             onChangeText={setPrice}
//             style={styles.txtinp}
//             keyboardType="numeric"
//           />
//           <SelectList
//             data={categories}
//             setSelected={setSelectedCategory}
//             save="value"
//             boxStyles={styles.selectList}
//           />
//           <Button mode="contained" onPress={addNew} style={styles.addButton}>
//             ADD
//           </Button>
//           <Button
//             mode="contained"
//             onPress={showStockView}
//             style={styles.showButton}>
//             Show All Stock
//           </Button>
//         </View>
//       )}
//       {show && (
//         <View>
//           <Text style={styles.stockHeader}>Show All Stock</Text>
//           <FlatList
//             data={stock}
//             renderItem={showAll}
//             keyExtractor={item => item.id.toString()}
//           />
//           <Button
//             mode="contained"
//             onPress={goToSettings}
//             style={styles.backButton}>
//             BACK TO HOME PAGE
//           </Button>
//         </View>
//       )}
//     </View>
//   );
// };

// export default Task5;

// const styles = StyleSheet.create({
//   header: {
//     color: 'green',
//     fontSize: 30,
//     textAlign: 'center',
//     marginVertical: 10,
//   },
//   View1: {
//     margin: 20,
//   },
//   txtinp: {
//     borderRadius: 5,
//     borderColor: 'pink',
//     padding: 15,
//     fontSize: 18,
//     borderWidth: 2,
//     marginVertical: 10,
//   },
//   selectList: {
//     marginVertical: 10,
//   },
//   addButton: {
//     marginVertical: 10,
//   },
//   showButton: {
//     marginVertical: 10,
//   },
//   stockHeader: {
//     fontSize: 25,
//     textAlign: 'center',
//     color: 'green',
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   stockItem: {
//     borderWidth: 1,
//     borderColor: 'gray',
//     margin: 10,
//     padding: 10,
//   },
//   stockText: {
//     fontSize: 18,
//   },
//   deleteButton: {
//     marginTop: 10,
//   },
//   backButton: {
//     margin: 15,
//   },
// });

import {Alert, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {Button} from 'react-native-paper';

const Task5 = () => {
  const [mobilename, setMobilename] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setSelectedCategory] = useState(null);
  const [show, setShow] = useState(false);
  const [currView, setCurrView] = useState(true);
  const [stock, setMobStock] = useState([
    {
      id: 1,
      name: 'Samsung S9',
      price: 180000,
      quantity: 2,
      category: 'android',
    },
  ]);

  const categories = [
    {key: 1, value: 'android'},
    {key: 2, value: 'ios'},
    {key: 3, value: 'microsoft'},
  ];

  const addNew = () => {
    if (!mobilename.trim() || !quantity.trim() || !price.trim() || !category) {
      Alert.alert('Error', 'Please fill all the fields.');
      return;
    }

    const parsedQuantity = parseInt(quantity, 10);
    const parsedPrice = parseFloat(price);

    if (isNaN(parsedQuantity) || isNaN(parsedPrice)) {
      Alert.alert(
        'Error',
        'Please enter valid numeric values for quantity and price.',
      );
      return;
    }

    const newStock = {
      id: stock.length + 1, // Generate a new ID
      name: mobilename.trim(),
      quantity: parsedQuantity,
      price: parsedPrice,
      category,
    };

    setMobStock([...stock, newStock]);
    setMobilename('');
    setQuantity('');
    setPrice('');
    setSelectedCategory(null);
  };

  const showStockView = () => {
    setShow(true);
    setCurrView(false);
  };

  const deleteData = id => {
    const filteredStock = stock.filter(item => item.id !== id);
    setMobStock(filteredStock);
  };

  const showAll = ({item}) => (
    <View style={styles.stockItem}>
      <Text style={styles.stockText}>Name: {item.name}</Text>
      <Text style={styles.stockText}>ID: {item.id}</Text>
      <Text style={styles.stockText}>Price: {item.price}</Text>
      <Text style={styles.stockText}>Quantity: {item.quantity}</Text>
      <Text style={styles.stockText}>Category: {item.category}</Text>
      <Button
        mode="contained"
        onPress={() => deleteData(item.id)}
        style={styles.deleteButton}
        buttonColor="red">
        DELETE
      </Button>
    </View>
  );

  const goToSettings = () => {
    setCurrView(true);
    setShow(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task5</Text>
      {currView && (
        <View style={styles.View1}>
          <TextInput
            placeholder="Enter Mobile Name"
            value={mobilename}
            onChangeText={setMobilename}
            style={styles.txtinp}
          />
          <TextInput
            placeholder="Enter Quantity"
            value={quantity}
            onChangeText={setQuantity}
            style={styles.txtinp}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Enter Price"
            value={price}
            onChangeText={setPrice}
            style={styles.txtinp}
            keyboardType="numeric"
          />
          <SelectList
            data={categories}
            setSelected={setSelectedCategory}
            save="value"
            boxStyles={styles.selectList}
            placeholder="Select Category"
          />
          <Button mode="contained" onPress={addNew} style={styles.addButton}>
            ADD
          </Button>
          <Button
            mode="contained"
            onPress={showStockView}
            style={styles.showButton}>
            Show All Stock
          </Button>
        </View>
      )}
      {show && (
        <View>
          <Text style={styles.stockHeader}>Show All Stock</Text>
          <FlatList
            data={stock}
            renderItem={showAll}
            keyExtractor={item => item.id.toString()}
          />
          <Button
            mode="contained"
            onPress={goToSettings}
            style={styles.backButton}>
            BACK TO HOME PAGE
          </Button>
        </View>
      )}
    </View>
  );
};

export default Task5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    color: 'green',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,
  },
  View1: {
    margin: 20,
  },
  txtinp: {
    borderRadius: 5,
    borderColor: 'pink',
    padding: 15,
    fontSize: 18,
    borderWidth: 2,
    marginVertical: 10,
  },
  selectList: {
    marginVertical: 10,
  },
  addButton: {
    marginVertical: 10,
  },
  showButton: {
    marginVertical: 10,
  },
  stockHeader: {
    fontSize: 25,
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  stockItem: {
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  stockText: {
    fontSize: 18,
  },
  deleteButton: {
    marginTop: 10,
  },
  backButton: {
    margin: 15,
  },
});
