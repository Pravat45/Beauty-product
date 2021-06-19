import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Spalsh from './src/screens/Spalsh';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false} initialRouteName={'Spalsh'}>
        <Stack.Screen name="Spalsh" component={Spalsh} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;