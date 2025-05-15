import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function EditProfileScreen({ navigation, route }) {
  const {
    email: initialEmail = '',
    username: initialUsername = '',
    firstName: initialFirstName = '',
    lastName: initialLastName = '',
    age: initialAge = '',
    contactNumber: initialContactNumber = '',
  } = route.params || {};

  const [isEditing, setIsEditing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [email, setEmail] = useState(initialEmail);
  const [username, setUsername] = useState(initialUsername);
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [age, setAge] = useState(initialAge);
  const [contactNumber, setContactNumber] = useState(initialContactNumber);

  const handleLogout = async () => {
    // Clear any authentication data (such as tokens or user data)
    // Example:
    // await AsyncStorage.clear();
    navigation.navigate('Login'); // Navigate to the login screen
  };

  return (
    <ScrollView style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* Profile Container */}
      <View style={styles.profileContainer}>
        <View style={styles.profileLeft}>
          <Text style={styles.greeting}>Welcome, {firstName || 'User'}!</Text>
          <Image source={require('../assets/profileicon.png')} style={styles.profileImage} />
          <Text style={styles.medicalInfoLabel}>User Profile</Text>

          <View style={styles.profileSection}>
            <Text style={styles.bloodtext}>Email</Text>
            <TextInput style={styles.input} editable={isEditing} value={email} onChangeText={setEmail} />
          </View>
          <View style={styles.profileSection}>
            <Text style={styles.bloodtext}>Username</Text>
            <TextInput style={styles.input} editable={isEditing} value={username} onChangeText={setUsername} />
          </View>
          <View style={styles.profileSection}>
            <Text style={styles.bloodtext}>First Name</Text>
            <TextInput style={styles.input} editable={isEditing} value={firstName} onChangeText={setFirstName} />
          </View>
          <View style={styles.profileSection}>
            <Text style={styles.bloodtext}>Last Name</Text>
            <TextInput style={styles.input} editable={isEditing} value={lastName} onChangeText={setLastName} />
          </View>
          <View style={styles.profileSection}>
            <Text style={styles.bloodtext}>Age</Text>
            <TextInput style={styles.input} editable={isEditing} value={age} onChangeText={setAge} />
          </View>
          <View style={styles.profileSection}>
            <Text style={styles.bloodtext}>Contact Number</Text>
            <TextInput style={styles.input} editable={isEditing} value={contactNumber} onChangeText={setContactNumber} />
          </View>

          {/* Edit Profile and Log Out Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.showInfo}>
              <Text>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              <Text>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Modal for Editing Profile */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Edit Your Profile</Text>

            <ScrollView>
              <View style={styles.formColumns}>
                <View style={styles.profileSection}>
                  <Text>Email</Text>
                  <TextInput style={styles.input} value={email} onChangeText={setEmail} />
                </View>
                <View style={styles.profileSection}>
                  <Text>Username</Text>
                  <TextInput style={styles.input} value={username} onChangeText={setUsername} />
                </View>
                <View style={styles.profileSection}>
                  <Text>First Name</Text>
                  <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />
                </View>
                <View style={styles.profileSection}>
                  <Text>Last Name</Text>
                  <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />
                </View>
                <View style={styles.profileSection}>
                  <Text>Age</Text>
                  <TextInput style={styles.input} value={age} onChangeText={setAge} />
                </View>
                <View style={styles.profileSection}>
                  <Text>Contact Number</Text>
                  <TextInput style={styles.input} value={contactNumber} onChangeText={setContactNumber} />
                </View>
              </View>

              <TouchableOpacity
                style={styles.editButton}
                onPress={() => {
                  setIsEditing(false);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.editButtonText}>Save</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c62828',
  },
  navbar: {
    backgroundColor: '#ffeeee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  backButton: {
    position: 'center',
    top: 5,
    right: 30,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 30,
    marginTop: 15,
  },
  profileLeft: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#c9302c',
  },
  medicalInfoLabel: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bloodtext: {
    padding: 5,
    marginTop: -6,
  },
  profileSection: {
    marginBottom: 15,
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#f2f2f2',
    fontSize: 14,
  },
  showInfo: {
    color: '#fff',
    backgroundColor: '#c62828',
    width: 120,
    height: 45,
    textAlign: 'center',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  logoutButton: {
    color: '#fff',
    backgroundColor: '#169976',
    width: 120,
    height: 45,
    textAlign: 'center',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20, // Add space above the buttons
    gap: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  formColumns: {
    gap: 15,
  },
  editButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#c62828',
    marginTop: 20,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonText: {
    color: '#fff',  // White text color
    fontWeight: 'bold',
    textAlign: 'center', // Center the text
  },

  showInfo: {
    backgroundColor: '#c62828',
    width: 120,
    height: 45,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#0B666A',
    width: 120,
    height: 45,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    gap: 10,
    width: '100%',
    alignItems: 'center',
  },
});

