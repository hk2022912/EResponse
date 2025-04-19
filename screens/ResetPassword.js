import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the Icon component from react-native-vector-icons
import LoginScreen from './Login';

export default function ResetPasswordScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleResetPassword = () => {
    // Handle reset password logic
    console.log('Password reset submitted');

    // After resetting password, navigate back to Login screen
    navigation.goBack(LoginScreen);
  };

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back-ios" size={22} color="#000" />
      </TouchableOpacity>

      {/* Logo/Image */}
      <Image
        source={require('../assets/logo.png')} // Replace with your own image
        style={styles.image}
      />

      {/* Title and description */}
      <Text style={styles.title}>Create New Password?</Text>
      <Text style={styles.subtitle}>
        Your new password must be unique from those previously used
      </Text>

      {/* Password Field */}
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Icon name={showPassword ? 'visibility-off' : 'visibility'} size={24} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Field */}
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Enter confirm password"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.input}
        />
        <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
          <Icon name={showConfirmPassword ? 'visibility-off' : 'visibility'} size={24} color="#888" />
        </TouchableOpacity>
      </View>

      {/* Reset Button */}
      <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
        <Text style={styles.resetButtonText}>Reset Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdeeee',
    padding: 20,
  },
  backButton: {
    marginTop: 20,
    marginBottom: 10,
    width: 30,
  },
  image: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginVertical: 20,
    resizeMode: 'contain',
    borderRadius: 100,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2d3436',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#636e72',
    textAlign: 'center',
    marginBottom: 30,
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
  input: {
    flex: 1,
    fontSize: 16,
    color: '#2d3436',
  },
  resetButton: {
    backgroundColor: '#3867d6',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
