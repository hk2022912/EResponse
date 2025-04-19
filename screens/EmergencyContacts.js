import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  Modal,
  Linking,
  Animated,
  Easing,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const contacts = [
  {
    name: 'PHIVOLCS',
    icon: require('../assets/phivolcs.png'),
    about:
      'Philippine Institute of Volcanology and Seismology (PHIVOLCS) is a service institute of the Department of Science and Technology (DOST) that monitors earthquake and volcanic activity in the Philippines.',
    contact: {
      phone: '(02) 8426-1468 to 79',
      email: 'info@phivolcs.dost.gov.ph',
      website: 'https://www.phivolcs.dost.gov.ph/',
      address: 'PHIVOLCS Building, C.P. Garcia Avenue, UP Campus, Diliman, Quezon City',
    },
  },
  {
    name: 'PHILIPPINE NATIONAL RED CROSS',
    icon: require('../assets/redcross.png'),
    about:
      'The Philippine Red Cross (PRC) provides humanitarian aid, including emergency relief, medical assistance, and social services.',
    contact: {
      phone: '143 or (02) 8527-0000',
      email: 'prc@redcross.org.ph',
      website: 'https://www.redcross.org.ph/',
      address: '37 EDSA, Mandaluyong City, Philippines',
    },
  },
  {
    name: 'BUREAU OF FIRE PROTECTION',
    icon: require('../assets/fire.png'),
    about:
      'The Bureau of Fire Protection (BFP) is responsible for the protection of life and property from fire and other emergencies.',
    contact: {
      phone: '911',
      alternate: '(02) 8426-0219',
      website: 'https://www.bfp.gov.ph/',
      address: 'NAPOLCOM Center, Quezon City, Philippines',
    },
  },
  {
    name: 'NDRRMC',
    icon: require('../assets/ndrrmc.png'),
    about:
      'The National Disaster Risk Reduction and Management Council (NDRRMC) is responsible for disaster preparedness, response, and recovery.',
    contact: {
      phone: '911',
      alternate: '(02) 8911-5061 to 65 local 100',
      website: 'https://www.ndrrmc.gov.ph/',
      address: 'Camp Aguinaldo, Quezon City, Philippines',
    },
  },
  {
    name: 'EMERGENCY HOTLINE',
    icon: require('../assets/emergency.png'),
    about: 'The general emergency hotline for immediate assistance is 911.',
    contact: {
      phone: '911',
    },
  },
  {
    name: 'DOH',
    icon: require('../assets/doh.png'),
    about:
      'The Department of Health (DOH) is responsible for managing healthcare services and health programs in the Philippines.',
    contact: {
      phone: '1555',
      trunkline: '(02) 8651-7800 local 5003-5004',
      website: 'https://www.doh.gov.ph/',
      address: 'San Lazaro Compound, Sta. Cruz, Manila, Philippines',
    },
  },
  {
    name: 'PNP',
    icon: require('../assets/pnp.png'),
    about:
      'The Philippine National Police (PNP) is responsible for law enforcement and maintaining peace and order across the Philippines.',
    contact: {
      phone: '117 or (02) 8723-0401',
      website: 'https://www.pnp.gov.ph/',
      address: 'Camp Crame, Quezon City, Philippines',
    },
  },
  {
    name: 'PAGASA',
    icon: require('../assets/pagasa.png'),
    about:
      'The Philippine Atmospheric, Geophysical and Astronomical Services Administration (PAGASA) is responsible for weather forecasting and disaster risk reduction.',
    contact: {
      trunkline: '(02) 8284-0800',
      website: 'https://www.pagasa.dost.gov.ph/',
      address: 'BIR Road, Diliman, Quezon City, Philippines',
    },
  },
  {
    name: 'DSWD',
    icon: require('../assets/dswd.png'),
    about:
      'The Department of Social Welfare and Development (DSWD) provides welfare services to disadvantaged individuals and communities.',
    contact: {
      phone: '8888',
      email: 'inquiry@dswd.gov.ph',
      website: 'https://www.dswd.gov.ph/',
      address: 'Batasan Pambansa Complex, Quezon City, Philippines',
    },
  },
];

export default function EmergencyContactsScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  // Animations
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  const animateIn = () => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const animateOut = (callback) => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 200,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => callback?.());
  };

  const openModal = (contact) => {
    setSelectedContact(contact);
    setModalVisible(true);
    animateIn();
  };

  const closeModal = () => {
    animateOut(() => {
      setModalVisible(false);
      setSelectedContact(null);
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.contactItem}
      onPress={() => openModal(item)}
      activeOpacity={0.8}
    >
      <Image source={item.icon} style={styles.contactIcon} />
      <Text style={styles.contactText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#2e2e2e" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Emergency Contacts</Text>
      </View>

      {/* Contact Grid */}
      <FlatList
        data={contacts}
        keyExtractor={(item, i) => i.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      {/* Modal with transition */}
      <Modal visible={modalVisible} transparent animationType="none" onRequestClose={closeModal}>
        <View style={styles.modalOverlay}>
          <Animated.View
            style={[
              styles.modalCard,
              {
                transform: [{ scale: scaleAnim }],
                opacity: opacityAnim,
              },
            ]}
          >
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>{selectedContact?.name}</Text>
              <TouchableOpacity onPress={closeModal}>
                <Ionicons name="close" size={24} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.modalContent}>
              <Text style={styles.modalSectionTitle}>About</Text>
              <Text style={styles.modalParagraph}>{selectedContact?.about}</Text>

              <Text style={styles.modalSectionTitle}>Contact Information</Text>
              {selectedContact?.contact?.phone && (
                <Text style={styles.modalRow}>
                  📞 <Text style={styles.modalLabel}>Phone:</Text> {selectedContact.contact.phone}
                </Text>
              )}
              {selectedContact?.contact?.alternate && (
                <Text style={styles.modalRow}>
                  📞 <Text style={styles.modalLabel}>Alt:</Text> {selectedContact.contact.alternate}
                </Text>
              )}
              {selectedContact?.contact?.trunkline && (
                <Text style={styles.modalRow}>
                  📞 <Text style={styles.modalLabel}>Trunkline:</Text>{' '}
                  {selectedContact.contact.trunkline}
                </Text>
              )}
              {selectedContact?.contact?.email && (
                <Text style={styles.modalRow}>
                  📧 <Text style={styles.modalLabel}>Email:</Text> {selectedContact.contact.email}
                </Text>
              )}
              {selectedContact?.contact?.website && (
                <Text style={styles.modalRow}>
                  🌐 <Text style={styles.modalLabel}>Website:</Text>{' '}
                  <Text
                    style={styles.link}
                    onPress={() => Linking.openURL(selectedContact.contact.website)}
                  >
                    {selectedContact.contact.website}
                  </Text>
                </Text>
              )}
              {selectedContact?.contact?.address && (
                <Text style={styles.modalRow}>
                  📍 <Text style={styles.modalLabel}>Address:</Text> {selectedContact.contact.address}
                </Text>
              )}

              {selectedContact?.contact?.website && (
                <TouchableOpacity
                  style={styles.websiteButton}
                  onPress={() => Linking.openURL(selectedContact.contact.website)}
                >
                  <Text style={styles.websiteButtonText}>Visit Website</Text>
                </TouchableOpacity>
              )}
            </View>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7E6E4',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#2e2e2e',
  },
  list: {
    paddingBottom: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  contactIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
    resizeMode: 'contain',
  },
  contactText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  modalCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  modalHeader: {
    backgroundColor: '#dc3545',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  modalHeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContent: {
    padding: 20,
  },
  modalSectionTitle: {
    fontWeight: 'bold',
    color: '#dc3545',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  modalParagraph: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },
  modalRow: {
    fontSize: 14,
    marginBottom: 5,
    color: '#333',
  },
  modalLabel: {
    fontWeight: 'bold',
  },
  link: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  websiteButton: {
    marginTop: 15,
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  websiteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
