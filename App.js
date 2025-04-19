import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './screens/Welcome';
import LoginScreen from './screens/Login';
import ForgotPasswordScreen from './screens/ForgotPassword';
import ResetPasswordScreen from './screens/ResetPassword';
import RegisterScreen from './screens/Register';
import SuccessScreen from './screens/SuccessRegister';
import HomeScreen from './screens/Dashboard';
import EditProfileScreen from './screens/EditProfile';
import EmergencyContactsScreen from './screens/EmergencyContacts';
import SafetyInstructionsScreen from './screens/SafetyInstructions';
import GuidesAndTutorialsScreen from './screens/Guides&Tutorials';
import TsunamiInstructionsScreen from './screens/TsunamiInstructions';
import EarthquakeInstructionsScreen from './screens/EarthquakeInstructions';
import LandslideInstructionsScreen from './screens/LandslideInstructions';
import NotificationScreen from './screens/Notifications';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SuccessRegister" component={SuccessScreen} />
        <Stack.Screen name="Dashboard" component={HomeScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="EmergencyContacts" component={EmergencyContactsScreen} />
        <Stack.Screen name="SafetyInstructions" component={SafetyInstructionsScreen} />
        <Stack.Screen name="Guides&Tutorials" component={GuidesAndTutorialsScreen} />
        <Stack.Screen name="TsunamiInstructions" component={TsunamiInstructionsScreen} />
        <Stack.Screen name="EarthquakeInstructions" component={EarthquakeInstructionsScreen} />
        <Stack.Screen name="LandslideInstructions" component={LandslideInstructionsScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
