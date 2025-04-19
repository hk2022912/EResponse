import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      {/* Notification Title */}
      <Text style={styles.title}>Notification</Text>

      {/* No Notification Message */}
      <Text style={styles.noNotificationText}>No notification</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9e5e5',  // Light pink background
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  noNotificationText: {
    fontSize: 18,
    color: '#9e7c7c',
    fontStyle: 'italic',
  },
});

export default NotificationScreen;
