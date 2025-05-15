import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://192.168.164.240:8000/auth/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          username: username.trim(),
          first_name: firstName.trim(),
          last_name: lastName.trim(),
          age: age.trim(),
          contact_number: contactNumber.trim(),
          password: password,
          re_password: confirmPassword,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        Alert.alert('Registration failed', 'Please check your input or try again.');
        return;
      }

      const data = await response.json();
      console.log('Success:', data);
      Alert.alert('Success', 'Registration complete!', [
        {
          text: 'OK',
          onPress: () =>
            navigation.navigate('Login', {
              email,
              username,
              firstName,
              lastName,
              age,
              contactNumber,
            }),
        },
      ]);
    } catch (error) {
      console.error('Network error:', error);
      Alert.alert('Error', 'Network issue. Please try again later.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('Welcome')}
            style={styles.backButton}
          >
            <MaterialIcons name="arrow-back-ios" size={22} color="#000" />
          </TouchableOpacity>

          <Image source={require('../assets/logo.png')} style={styles.logo} />

          <Text style={styles.title}>Register</Text>
          <Text style={styles.subtitle}>Enter Your Personal Information</Text>

          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="First Name"
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            placeholder="Last Name"
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            placeholder="Age"
            style={styles.input}
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Contact Number"
            style={styles.input}
            value={contactNumber}
            onChangeText={setContactNumber}
            keyboardType="phone-pad"
          />

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Enter your password"
              secureTextEntry={!showPassword}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIconAbsolute}
            >
              <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="#888" />
            </TouchableOpacity>
          </View>

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Confirm your password"
              secureTextEntry={!showConfirmPassword}
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              style={styles.eyeIconAbsolute}
            >
              <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="#888" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>

          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
              Login
            </Text>
          </Text>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 25,
    backgroundColor: '#F5E4E2',
    paddingBottom: 50, // so last input doesn't get cut off
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c9302c',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 8,
    fontSize: 15,
    color: '#2d3436',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIconAbsolute: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  registerButton: {
    backgroundColor: '#c9302c',
    paddingVertical: 10,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  registerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  footerText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 13,
    color: '#666',
    marginBottom: 50, // for spacing at the bottom
  },
  loginLink: {
    color: '#1877F2',
    fontWeight: 'bold',
  },
});
