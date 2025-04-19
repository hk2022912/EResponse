import React, { useState, useEffect } from 'react';
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

const LandslideInstructionsScreen = () => {
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
      <Text style={styles.header}>Landslide Safety Instructions</Text>

      <Section
        title="Before a Landslide"
        instructions={[
          "Be aware of landslide risk in your area",
          "Watch for changes in landscape such as patterns of storm-water drainage or new cracks in soil",
          "Create emergency plans and ensure everyone knows evacuation routes",
          "Plant ground cover on slopes and build retaining walls if necessary"
        ]}
      />

      <Section
        title="During Heavy Rains or Warnings"
        instructions={[
          "Listen for unusual sounds that might indicate moving debris (trees cracking, boulders knocking together)",
          "If you suspect imminent landslide danger, evacuate immediately",
          "Stay alert and awake if there are warnings about landslides in your area",
          "If you are near a stream or channel, be alert for sudden increases or decreases in water flow"
        ]}
      />

      <Section
        title="During a Landslide"
        instructions={[
          "Move away from the path of a landslide as quickly as possible",
          "Curl into a tight ball and protect your head if escape is not possible",
          "If driving, watch for collapsed pavement, mud, fallen rocks and other indications of possible debris flow"
        ]}
      />

      <Section
        title="After a Landslide"
        instructions={[
          "Stay away from the slide area",
          "Check for injured or trapped persons near the slide, without entering the direct slide area",
          "Listen to local alerts for emergency information",
          "Watch for flooding, which may occur after a landslide"
        ]}
      />

      <View style={styles.contactsCard}>
        <Text style={styles.contactHeader}>Emergency Contacts</Text>
        <Text style={styles.contactItem}>Emergency Services: 911</Text>
        <Text style={styles.contactItem}>Geological Survey: [Survey Number]</Text>
        <Text style={styles.contactItem}>Local Emergency Management: [Local Number]</Text>
      </View>
    </ScrollView>
  );
};

export default LandslideInstructionsScreen;

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
