import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
  BackHandler,
  Alert,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch earthquake news
  const fetchNews = async () => {
    try {
      const response = await fetch(
        'https://newsapi.org/v2/everything?q=earthquake&language=en&sortBy=publishedAt&pageSize=10&apiKey=e95d2f1d10844123bd764f5ac18ebc85'
      );

      const json = await response.json();

      if (!json.articles) {
        console.error('API Error:', json);
        setArticles([]);
      } else {
        setArticles(json.articles);
      }

      setLoading(false);
    } catch (error) {
      console.error('Fetch Error:', error);
      setLoading(false);
    }
  };

  // Handle the back button press and show the logout confirmation only in the dashboard
  const handleBackPress = () => {
    if (navigation.isFocused()) { // Only show logout message if Home screen is focused
      Alert.alert(
        'Confirm Logout',
        'Are you sure you want to log out?',
        [
          {
            text: 'Cancel',
            onPress: () => null, // Do nothing and stay on the screen
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => navigation.goBack(), // Go back if user confirms
          },
        ],
        { cancelable: false }
      );
      return true; // Prevent the default behavior (exiting the app)
    }

    return false; // Default back button behavior
  };

  // Set up back button listener when the component is mounted
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    // Cleanup on unmount
    return () => {
      backHandler.remove();
    };
  }, []);

  // Fetch news once when the component mounts and set up polling every 30 seconds
  useEffect(() => {
    fetchNews(); // Fetch initially
    const interval = setInterval(fetchNews, 20000); // Poll every 20 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#000"
              style={{ marginRight: 15 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
            <Ionicons name="person-circle-outline" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Greeting */}
      <Text style={styles.greeting}>Hi, User!</Text>
      <Text style={styles.sectionTitle}>Recent Earthquake News!</Text>

      {/* News Cards */}
      {loading ? (
        <ActivityIndicator size="large" color="#b93c3c" />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {articles.map((article, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => Linking.openURL(article.url)}
            >
              <Image
                source={{
                  uri:
                    article.urlToImage ||
                    'https://via.placeholder.com/300x200.png?text=No+Image',
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText1}>Read More</Text>
              <Text style={styles.cardText} numberOfLines={2}>
                {article.title}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialIcons name="home" size={24} color="green" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('EmergencyContacts')}
        >
          <Ionicons name="call" size={24} color="#fff" />
          <Text style={styles.navText}>Emergency Contacts</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('SafetyInstructions')}
        >
          <Ionicons name="shield-checkmark" size={24} color="#fff" />
          <Text style={styles.navText}>Safety Instructions</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('Guides&Tutorials')}
        >
          <Ionicons name="book" size={24} color="#fff" />
          <Text style={styles.navText}>Guides & Tutorials</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbecec',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    top: 10,
    width: 55,
    height: 40,
    borderRadius: 100,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    color: '#333',
  },
  sectionTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
    bottom: 10,
  },
  card: {
    marginTop: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: 260,
    borderRadius: 10,
  },
  cardText1: {
    position: 'absolute',
    top: 220,
    marginLeft: 250,
    color: '#fff',
  },
  cardText: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 10,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#b93c3c',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'center',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navText: {
    fontSize: 10,
    color: '#fff',
    marginTop: 2,
  },
});
