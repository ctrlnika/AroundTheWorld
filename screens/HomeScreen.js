import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const logo = require("../assets/arwtext.png");

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const navigateToDestination = (destination) => {
    navigation.navigate(destination);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
      </View>

      <View style={styles.options}>
        <OptionButton
          title="World Map"
          subtext="Explore continents, city randomiser."
          onPress={() => navigateToDestination('WorldMap')}
        />
        <View style={styles.separator} />
        <OptionButton
          title="Journey Planner"
          subtext="Plan in advance: ETA, transport modes."
          onPress={() => navigateToDestination('JourneyPlanner')}
        />
      </View>
    </SafeAreaView>
  );
};

const OptionButton = ({ title, subtext, onPress }) => {
  return (
    <TouchableOpacity style={styles.optionButton} onPress={onPress}>
      <Text style={styles.optionText}>{title}</Text>
      <Text style={styles.optionSubtext}>{subtext}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  options: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  optionButton: {
    backgroundColor: '#004AAD', // Logo Colour
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  optionText: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 18,
    marginBottom: 5,
  },
  optionSubtext: {
    fontFamily: 'Arial',
    color: '#ffffff',
    fontSize: 14,
  },
  separator: {
    height: 10,
  },
});

export default HomeScreen;
