import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>E-Response</Text>
      <Text style={styles.subtitle}>Be ready when it matters most.</Text>
      <Text style={styles.description}>
        Your complete earthquake survival guide, right in your pocket.
      </Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbeeee',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
 
  image: {
    width: 100,
    height: 100,
    borderRadius: 200,
    marginBottom: 30,
  },
  
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#636e72',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#636e72',
    textAlign: 'center',
    marginBottom: 40,
  },
  loginButton: {
    backgroundColor: '#4a69bd',
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    marginBottom: 15,
    width: '100%',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  registerButton: {
    borderColor: '#2d3436',
    borderWidth: 1.5,
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 30,
    width: '100%',
  },
  registerText: {
    color: '#2d3436',
    fontSize: 16,
    textAlign: 'center',
  },
});
