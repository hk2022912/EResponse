import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.successCard}>
        <View style={styles.iconCircle}>
          <Ionicons name="checkmark" size={40} color="white" />
        </View>
        <Text style={styles.doneText}>Done!</Text>
        <TouchableOpacity
          style={styles.dashboardButton}
          onPress={() => navigation.navigate('Dashboard')} // adjust destination if you have a dashboard screen
        >
          <Text style={styles.buttonText}>Go to Dashboard</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.notifyCard}>
        <Text style={styles.notifyText}>
          Get Notified by <Text style={styles.boldText}>E-Response?</Text>
        </Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.notifyButton}>
            <Text style={styles.buttonText}>Get Notified</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>No, Thanks</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  successCard: {
    backgroundColor: '#FCEEEF',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 30,
  },
  iconCircle: {
    backgroundColor: 'green',
    borderRadius: 50,
    padding: 15,
    marginBottom: 10,
  },
  doneText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
  },
  dashboardButton: {
    backgroundColor: '#4285F4',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  notifyCard: {
    backgroundColor: '#FCEEEF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  notifyText: {
    fontSize: 16,
    marginBottom: 15,
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  notifyButton: {
    backgroundColor: '#4285F4',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  secondaryButton: {
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secondaryButtonText: {
    color: '#000',
    fontWeight: '600',
  },
});

export default SuccessScreen;
