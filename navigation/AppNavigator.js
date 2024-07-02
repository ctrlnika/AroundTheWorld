import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen.js';
import WorldMapScreen from '../screens/WorldMapScreen.js';
import JourneyPlanner from '../screens/JourneyPlannerScreen.js';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="WorldMap" component={WorldMapScreen} />
      <Stack.Screen name="JourneyPlanner" component={JourneyPlanner} />
      {/* Other screens */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
