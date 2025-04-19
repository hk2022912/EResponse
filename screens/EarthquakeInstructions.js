import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import { useFocusEffect } from '@react-navigation/native';  // Importing the hook

const Section = ({ title, instructions }) => {
  const [expanded, setExpanded] = useState(false);

  const speakInstructions = () => {
    const textToSpeak = [title, ...instructions].join('. ');
    Speech.speak(textToSpeak);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Ionicons name={expanded ? 'chevron-up' : 'chevron-down'} size={24} color="white" />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.cardContent}>
          {instructions.map((item, index) => (
            <Text key={index} style={styles.instruction}>• {item}</Text>
          ))}
          <TouchableOpacity onPress={speakInstructions} style={styles.speakButton}>
            <Ionicons name="volume-high" size={20} color="#fff" />
            <Text style={styles.speakText}>Hear Instructions</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const EarthquakeInstructionsScreen = () => {
  // Stop the speech when the screen is unfocused
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        Speech.stop();  // This will stop the speech when the screen is unfocused
      };
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Earthquake Safety Instructions</Text>

      <Section
        title="Before an Earthquake"
        instructions={[
          "Secure heavy furniture to walls and floors",
          "Know where and how to shut off utilities",
          "Create an emergency kit with water, food, medication, and first aid supplies",
          "Develop a family communication plan",
          "Identify safe spots in each room (under sturdy furniture, against interior walls)"
        ]}
      />

      <Section
        title="During an Earthquake"
        instructions={[
          "Drop, Cover, and Hold On - Drop to your hands and knees, take cover under sturdy furniture, and hold on",
          "If there's no shelter nearby, drop to the ground in an inside corner of the building",
          "Stay away from glass, windows, outside doors and walls",
          "If outdoors, stay in the open until the shaking stops",
          "If in a vehicle, pull over and stop. Do not stop under buildings, trees, or overpasses"
        ]}
      />

      <Section
        title="After an Earthquake"
        instructions={[
          "Check yourself and others for injuries",
          "Be prepared for aftershocks",
          "Listen to local alerts and authorities for information and instructions",
          "Check for gas leaks, water and electrical line damage",
          "Avoid damaged areas and fallen debris"
        ]}
      />

      <View style={styles.contactsCard}>
        <Text style={styles.contactHeader}>Emergency Contacts</Text>
        <Text style={styles.contactItem}>Emergency Services: 911</Text>
        <Text style={styles.contactItem}>Local Emergency Management: [Local Number]</Text>
        <Text style={styles.contactItem}>Disaster Relief: [Relief Number]</Text>
      </View>
    </ScrollView>
  );
};

export default EarthquakeInstructionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
    color: '#333',
    marginTop: 60,
  },
  card: {
    backgroundColor: '#4a90e2',
    borderRadius: 12,
    marginBottom: 12,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardContent: {
    backgroundColor: '#e6f0ff',
    padding: 15,
  },
  instruction: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  speakButton: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  speakText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
  },
  contactsCard: {
    backgroundColor: '#ffcccb',
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },
  contactHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#a00',
  },
  contactItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 6,
  },
});
