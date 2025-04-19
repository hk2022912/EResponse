import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SafetyInstructionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#2e2e2e" />
        </TouchableOpacity>
        <Text style={styles.title}>Safety Instructions</Text>
      </View>

      <Text style={styles.subText}>
        These are instructions on what to do during these happenings:
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Earthquake */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('EarthquakeInstructions')}
        >
          <Image
            source={require('../assets/1.png')}
            style={styles.image}
          />
          <Text style={styles.cardText}>Earthquake Safety Instructions</Text>
        </TouchableOpacity>

        {/* Tsunami */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('TsunamiInstructions')}
        >
          <Image
            source={require('../assets/2.png')}
            style={styles.image}
          />
          <Text style={styles.cardText}>Tsunami Safety Instructions</Text>
        </TouchableOpacity>

        {/* Landslide */}
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('LandslideInstructions')}
        >
          <Image
            source={require('../assets/3.png')}
            style={styles.image}
          />
          <Text style={styles.cardText}>Landslides Safety Instructions</Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#2e2e2e',
  },
  subText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 180,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2e2e2e',
    textAlign: 'center',
  },
});
