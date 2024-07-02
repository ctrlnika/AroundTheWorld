import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, SafeAreaView, StyleSheet, Image, View, ScrollView } from 'react-native';

const WorldMapScreen = () => {
  const [cityDetails, setCityDetails] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const touristicCities = [
    {
      name: 'Paris',
      landmarks: 'Eiffel Tower, Louvre Museum, Notre Dame',
      cuisine: 'Croissants, Macarons, Escargot',
      bestTimeToVisit: 'April to June, September to November'
    },
    {
      name: 'New York',
      landmarks: 'Statue of Liberty, Central Park, Times Square',
      cuisine: 'Bagels, Pizza, Cheesecake',
      bestTimeToVisit: 'April to June, September to December'
    },
    {
      name: 'Tokyo',
      landmarks: 'Tokyo Tower, Senso-ji Temple, Shibuya Crossing',
      cuisine: 'Sushi, Ramen, Tempura',
      bestTimeToVisit: 'March to May, October to November'
    },
    {
      name: 'London',
      landmarks: 'Buckingham Palace, Tower of London, British Museum',
      cuisine: 'Fish and Chips, Sunday Roast, Afternoon Tea',
      bestTimeToVisit: 'March to May, September to November'
    },
    {
      name: 'Rome',
      landmarks: 'Colosseum, Vatican Museums, Trevi Fountain',
      cuisine: 'Pizza, Gelato, Carbonara',
      bestTimeToVisit: 'April to June, September to October'
    },
    
  ];

  const generateTouristicCity = () => {
    const randomCity = touristicCities[Math.floor(Math.random() * touristicCities.length)];
    setCityDetails(randomCity);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/worldmap.png')} style={styles.worldMap} />
      <TouchableOpacity style={styles.button} onPress={generateTouristicCity}>
        <Text style={styles.buttonText}>Generate Touristic City</Text>
      </TouchableOpacity>
      {cityDetails && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <ScrollView>
              <Text style={styles.modalTitle}>{cityDetails.name}</Text>
              <Text style={styles.modalText}>Famous Landmarks: {cityDetails.landmarks}</Text>
              <Text style={styles.modalText}>Local Cuisine: {cityDetails.cuisine}</Text>
              <Text style={styles.modalText}>Best Time to Visit: {cityDetails.bestTimeToVisit}</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  worldMap: {
    width: '100%',
    height: '70%',
    resizeMode: 'contain',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#004AAD',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});

export default WorldMapScreen;
