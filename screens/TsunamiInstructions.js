import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';

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

const TsunamiInstructionsScreen = () => {
  // Stop any ongoing speech when the user navigates away from the screen
  useEffect(() => {
    return () => {
      Speech.stop();  // Stops any speech playback
    };
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Tsunami Safety Instructions</Text>

      <Section
        title="Before a Tsunami"
        instructions={[
          "Know if your home, school, workplace or other frequently visited locations are in tsunami hazard areas",
          "Plan evacuation routes from your home, school, workplace or any other place you visit frequently",
          "Create an emergency kit with essential supplies",
          "Familiarize yourself with local warning systems"
        ]}
      />

      <Section
        title="During a Tsunami Warning"
        instructions={[
          "Move immediately to higher ground - If you feel an earthquake when near the coast, move to higher ground immediately",
          "Follow evacuation orders from local authorities",
          "If evacuation is not possible, go to the upper floor of a sturdy building",
          "Stay away from the beach and coastal areas",
          "A tsunami may be a series of waves - do not return until officials say it is safe"
        ]}
      />

      <Section
        title="After a Tsunami"
        instructions={[
          "Stay away from flooded and damaged areas until officials say it is safe",
          "Stay away from debris in the water as it may pose a safety hazard",
          "Check yourself for injuries and get first aid as needed",
          "Listen to local alerts and authorities for information and instructions"
        ]}
      />

      <View style={styles.contactsCard}>
        <Text style={styles.contactHeader}>Emergency Contacts</Text>
        <Text style={styles.contactItem}>Emergency Services: 911</Text>
        <Text style={styles.contactItem}>Tsunami Warning Center: [Warning Center Number]</Text>
        <Text style={styles.contactItem}>Coast Guard: [Coast Guard Number]</Text>
      </View>
    </ScrollView>
  );
};

export default TsunamiInstructionsScreen;

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
