import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // You can validate email or call an API here if needed
    // For now, navigate to the Reset Password screen
    navigation.navigate('ResetPassword');
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
        <Icon name="arrow-back-ios" size={22} color="#000" />
      </TouchableOpacity>

      {/* Logo */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {/* Title */}
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>
        Don’t worry! It happens. Please enter the email address linked with your account.
      </Text>

      {/* Email Input */}
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E4E2',
    paddingHorizontal: 25,
    paddingTop: 40,
  },
  back: {
    marginBottom: 10,
  },
  logo: {
    width: 90,
    height: 90,
    alignSelf: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#444',
    textAlign: 'center',
    marginVertical: 12,
    lineHeight: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#E3DADA',
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#4C7CFF',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 25,
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
