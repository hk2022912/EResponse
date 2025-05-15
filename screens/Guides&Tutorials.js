import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const tutorials = [
  {
    title: 'Jaw Injury Bandage Technique',
    image: require('../assets/tutorial1.png'),
    videoUrl: 'https://youtu.be/2ffYeuTjjvI?si=3M3mop2iWq2XuFsz',
    audio: require('../assets/modal1.mp3'),
    instructions: [
      'Ensure the patient is sitting comfortably and can breathe properly.',
      'Place the center of the bandage under the chin.',
      'Bring both ends up and cross them over the top of the head.',
      'Take the ends around to the back of the head and cross them again.',
      'Bring the ends forward and secure with a knot or safety pin at the front.',
      'Check that the bandage is secure but not too tight.',
      'Monitor the patient for any signs of breathing difficulty.',
    ],
  },
  {
    title: 'How to Protect Yourself During an Earthquake | Disasters',
    image: require('../assets/tutorial2.png'),
    videoUrl: 'https://youtu.be/BLEPakj1YTY?si=u3YGVPuBL__K-3Qf',
    audio: require('../assets/modal2.mp3'),
    instructions: [
      'Drop to your hands and knees to prevent being knocked over.',
      'Cover your head and neck with your arms.',
      'If indoors, stay away from windows and heavy objects.',
      'If outside, move away from buildings, trees, and power lines.',
    ],
  },
  {
    title: 'How to Give First Aid and Treat a Fracture',
    image: require('../assets/tutorial3.png'),
    videoUrl: 'https://youtu.be/88s4LGZFhIc?si=H1VAv8d0k6hZs8Xf',
    audio: require('../assets/modal3.mp3'),
    instructions: [
      'Check the person’s airway and breathing.',
      'Immobilize the fractured area with a splint or any rigid material.',
      'Control bleeding with a clean cloth or bandage.',
      'Get medical help immediately.',
    ],
  },
  {
    title: 'The Earthquake Plan',
    image: require('../assets/tutorial4.png'),
    videoUrl: 'https://youtu.be/VSvB2US5r-4?si=iL0Kz570P4TZSKvQ',
    audio: require('../assets/modal4.mp3'),
    instructions: [
      'Have an emergency kit ready with food, water, and first aid supplies.',
      'Plan evacuation routes and a meeting point.',
      'Secure heavy furniture to prevent tipping.',
      'Review the earthquake safety plan with family members.',
    ],
  },
];

export default function GuidesAndTutorialsScreen({ navigation }) {
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [sound, setSound] = useState();

  const openModal = (tutorial) => {
    setSelectedTutorial(tutorial);
  };

  const closeModal = () => {
    setSelectedTutorial(null);
    if (sound) {
      sound.unloadAsync();
    }
  };

  const handlePlayAudio = async () => {
    if (selectedTutorial && selectedTutorial.audio) {
      const { sound } = await Audio.Sound.createAsync(selectedTutorial.audio);
      setSound(sound);
      await sound.playAsync();
    }
  };

  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#2e2e2e" />
        </TouchableOpacity>
        <Text style={styles.title}>Guides and Tutorials</Text>
      </View>

      <Text style={styles.quote}>
        Knowledge is power, knowledge is safety,{"\n"}knowledge is happiness. -Thomas Jefferson
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {tutorials.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => openModal(item)}
          >
            <Image source={item.image} style={styles.thumbnail} />
            <Text style={styles.cardText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal */}
      <Modal visible={selectedTutorial !== null} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedTutorial?.title}</Text>
            <Image source={selectedTutorial?.image} style={styles.modalImage} />

            <Text style={styles.instructionsTitle}>Step-by-Step Instructions:</Text>
            {selectedTutorial?.instructions.map((step, index) => (
              <Text key={index} style={styles.instructionText}>
                {index + 1}. {step}
              </Text>
            ))}

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.videoButton}
                onPress={() => handleOpenLink(selectedTutorial?.videoUrl)}
              >
                <Ionicons name="play-circle" size={20} color="white" />
                <Text style={styles.buttonText}>Watch Video Tutorial</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.audioButton}
                onPress={handlePlayAudio}
              >
                <Ionicons name="volume-high" size={20} color="white" />
                <Text style={styles.buttonText}>Listen to Instructions</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
              <Ionicons name="close" size={28} color="#999" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6eaea',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#2e2e2e',
  },
  quote: {
    fontSize: 13,
    color: '#666',
    marginVertical: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
    gap: 10,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardText: {
    flex: 1,
    fontSize: 13,
    color: '#2e2e2e',
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#d93025',
  },
  modalImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  instructionsTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#d93025',
  },
  instructionText: {
    fontSize: 13,
    color: '#333',
    marginBottom: 3,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  videoButton: {
    backgroundColor: '#d93025',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginRight: 5,
  },
  audioButton: {
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginLeft: 5,
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 13,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
});
