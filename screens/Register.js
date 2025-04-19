import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    console.log('Registering:', name, email);
    navigation.navigate('SuccessRegister'); // Navigate to Success screen
  };

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Welcome')}
        style={styles.backButton}
      >
        <MaterialIcons name="arrow-back-ios" size={22} color="#000" />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require('../assets/logo.png')} // Replace with your actual logo path
        style={styles.logo}
      />

      {/* Heading */}
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Enter Your Personal Information</Text>

      {/* Full Name */}
      <TextInput
        placeholder="Enter your Name"
        placeholderTextColor="#999"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      {/* Email */}
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      {/* Password */}
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
          style={styles.inputFlex}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={22} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Confirm Password */}
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter confirm password"
          placeholderTextColor="#999"
          secureTextEntry={!showConfirmPassword}
          style={styles.inputFlex}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={22} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Register Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      {/* Login redirect */}
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdeeee',
    padding: 25,
  },
  backButton: {
    marginTop: 10,
    marginBottom: 15,
    width: 30,
  },
  logo: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d3436',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#636e72',
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#f1f2f6',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 15,
    color: '#2d3436',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f2f6',
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 15,
  },
  inputFlex: {
    flex: 1,
    fontSize: 15,
    color: '#2d3436',
  },
  registerButton: {
    backgroundColor: '#3867d6',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  registerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 13,
    color: '#636e72',
  },
  loginLink: {
    color: '#3867d6',
    fontWeight: 'bold',
  },
});
