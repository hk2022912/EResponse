import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing the back icon from Ionicons

export default function EditProfileScreen({ navigation }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Navbar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>

        <View style={styles.logo}>
          <Image source={require('../assets/logo.png')} style={styles.logoImage} />
          <Text style={[styles.logoText, { fontWeight: 'bold' }]}>E-Response</Text>
        </View>
      </View>

      {/* Profile Container */}
      <View style={styles.profileContainer}>
        {/* Left: Medical Info */}
        <View style={styles.profileLeft}>
          <Image source={require('../assets/profileicon.png')} style={styles.profileImage} />
          <Text style={styles.greeting}>Welcome, User!</Text>
          <Text style={styles.medicalInfoLabel}>Medical info</Text>

          <View style={styles.profileSection}>
            <Text>Blood type</Text>
            <TextInput style={styles.input} editable={isEditing} placeholder="Enter your blood type" />
          </View>
          <View style={styles.profileSection}>
            <Text>Weight</Text>
            <TextInput style={styles.input} editable={isEditing} placeholder="Enter your weight" />
          </View>
          <View style={styles.profileSection}>
            <Text>Height</Text>
            <TextInput style={styles.input} editable={isEditing} placeholder="Enter your height" />
          </View>

          <TouchableOpacity onPress={() => setShowInfo(!showInfo)}>
            <Text style={styles.showInfo}>Show Info</Text>
          </TouchableOpacity>
        </View>

        {/* Right: Full Info */}
        {showInfo && (
          <View style={styles.profileRight}>
            <View style={styles.formColumns}>
              <View style={styles.profileSection}>
                <Text>Full Name</Text>
                <TextInput style={styles.input} editable={isEditing} placeholder="Enter your full name" />
              </View>
              <View style={styles.profileSection}>
                <Text>Sex</Text>
                <TextInput style={styles.input} editable={isEditing} placeholder="Enter your sex" />
              </View>
              <View style={styles.profileSection}>
                <Text>Age</Text>
                <TextInput style={styles.input} editable={isEditing} placeholder="Enter your age" />
              </View>
              <View style={styles.profileSection}>
                <Text>Email Address</Text>
                <TextInput style={styles.input} editable={isEditing} placeholder="Enter your email" />
              </View>
              <View style={styles.profileSection}>
                <Text>Phone Number</Text>
                <TextInput style={styles.input} editable={isEditing} placeholder="Enter your phone number" />
              </View>
              <View style={styles.profileSection}>
                <Text>Address</Text>
                <TextInput style={styles.input} editable={isEditing} placeholder="Enter your address" />
              </View>
            </View>

            <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(!isEditing)}>
              <Text style={styles.editButtonText}>{isEditing ? 'Done' : 'Edit Profile'}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
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
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  backButton: {
    position: 'center',
    top: 5,
    right: 30,
  },
 
  logoImage: {
    marginTop: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    left: 1,
  },
  logoText: {
    marginRight: 112,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 30,
    margin: 50,
    flexWrap: 'wrap',
    marginTop: 120,
  },
  profileLeft: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    flex: 1,
    maxWidth: 300,
    textAlign: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
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
  },
  medicalInfoLabel: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  profileSection: {
    marginBottom: 15,
  },
  input: {
    width: '70%',
    padding: 10,
    borderRadius: 6,
    backgroundColor: '#f2f2f2',
    fontSize: 14,
  },
  showInfo: {
    color: '#3b82f6',
    cursor: 'pointer',
    marginTop: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  profileRight: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 10,
    flex: 2,
    minWidth: 300,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  formColumns: {
    flexDirection: 'column',
    gap: 15,
  },
  editButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#3b82f6',
    marginTop: 20,
  },
  editButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
