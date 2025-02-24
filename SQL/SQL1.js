import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const API_BASE = 'http://192.168.4.78/mapcourseapi/api/contact';

const TestCodes = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [phoneNo, setPhoneNo] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [DOB, setDOB] = useState('');
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts();
  }, []);

  const pickImage = () => {
    ImagePicker.launchCamera({mediaType: 'photo'}, resp => {
      if (resp.assets) {
        setSelectedImage(resp.assets[0].uri);
      }
    });
  };

  const updateContact = async () => {
    if (!phoneNo) {
      console.log('Phone number required for update');
      return;
    }

    var formData = new FormData();
    formData.append('phoneNo', phoneNo);
    formData.append('email', email);
    formData.append('DOB', DOB);
    formData.append('City', city);

    // Image ko FormData me add karna
    if (selectedImage) {
      formData.append('image', {
        uri: selectedImage,
        name: 'updated_photo.jpg',
        type: 'image/jpeg',
      });
    }

    try {
      var url = `http://192.168.4.78/mapcourseapi/api/contact/updateContact`;
      var res = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      if (res.ok) {
        var data = await res.text();
        console.log('Update Response:', data);
      } else {
        console.log('Update failed:', await res.text());
      }
    } catch (error) {
      console.log('Error updating contact:', error.message);
    }
  };

  const saveContact = async () => {
    const formData = new FormData();
    formData.append('phoneNo', phoneNo);
    formData.append('email', email);
    formData.append('DOB', DOB);
    formData.append('City', city);
    if (selectedImage) {
      formData.append('image', {
        uri: selectedImage,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });
    }

    try {
      const res = await fetch(`${API_BASE}/addcontact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });
      if (res.ok) {
        console.log('Contact saved');
        getContacts();
      }
    } catch (err) {
      console.log('Error:', err.message);
    }
  };

  const getContacts = async () => {
    try {
      const res = await fetch(`${API_BASE}/getContact`);
      if (res.ok) {
        const data = await res.json();
        setContacts(data);
      }
    } catch (err) {
      console.log('Error fetching contacts:', err);
    }
  };

  const deleteContact = async phoneNo => {
    try {
      const res = await fetch(`${API_BASE}/deleteContact?phoneNo=${phoneNo}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        console.log('Contact deleted');
        getContacts();
      }
    } catch (err) {
      console.log('Error deleting contact:', err);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.uploadButtonText}>Upload Image</Text>
      </TouchableOpacity>
      {selectedImage && (
        <Image source={{uri: selectedImage}} style={styles.imageViewer} />
      )}

      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        onChangeText={setPhoneNo}
        value={phoneNo}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        placeholder="City"
        style={styles.input}
        onChangeText={setCity}
        value={city}
      />
      <TextInput
        placeholder="DOB"
        style={styles.input}
        onChangeText={setDOB}
        value={DOB}
      />

      <TouchableOpacity style={styles.uploadButton} onPress={saveContact}>
        <Text style={styles.uploadButtonText}>Save Contact</Text>
      </TouchableOpacity>

      <FlatList
        data={contacts}
        keyExtractor={item => item.phoneNo.toString()}
        renderItem={({item}) => (
          <View style={styles.contactItem}>
            {item.imagePath && (
              <Image
                source={{uri: item.imagePath}}
                style={styles.contactImage}
              />
            )}
            <View>
              <Text style={styles.contactText}>{item.phoneNo}</Text>
              <Text style={styles.contactText}>{item.email}</Text>
              <Text style={styles.contactText}>{item.City}</Text>
              <Text style={styles.contactText}>{item.DOB}</Text>
            </View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteContact(item.phoneNo)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  uploadButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageViewer: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 2,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactText: {
    fontSize: 14,
  },
  deleteButton: {
    marginLeft: 'auto',
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default TestCodes;
