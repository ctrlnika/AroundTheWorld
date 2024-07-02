import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const JourneyPlanner = () => {
  const [startLocation, setStartLocation] = useState('');
  const [endLocation, setEndLocation] = useState('');
  const [journeyDetails, setJourneyDetails] = useState(null);

  const planJourney = async () => {
    if (!startLocation || !endLocation) {
      Alert.alert('Error', 'Please enter both start and end locations.');
      return;
    }

    try {
      const response = await axios.get(`http://jpapi.tfl.gov.uk/ticc/XSLT_TRIP_REQUEST2?language=en`, {
        params: { start: startLocation, end: endLocation }
      });
      const journeyResult = response.data;
      setJourneyDetails(journeyResult);
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while fetching journey details.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Journey Planner</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Enter start location"
        value={startLocation}
        onChangeText={text => setStartLocation(text)}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        placeholder="Enter end location"
        value={endLocation}
        onChangeText={text => setEndLocation(text)}
      />
      <Button title="Plan Journey" onPress={planJourney} />
      {journeyDetails && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Journey Details</Text>
          <Text>Start Location: {journeyDetails.start}</Text>
          <Text>End Location: {journeyDetails.end}</Text>
          <Text>Duration: {journeyDetails.duration}</Text>
          <Text>Mode of Transport: {journeyDetails.modeOfTransport}</Text>
          <Text>Fare: {journeyDetails.fare}</Text>
        </View>
      )}
    </View>
  );
};

export default JourneyPlanner;
