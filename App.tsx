import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StoreProvider} from './src/rtk/storeProvider';
import HomeScreen from './src/screens/home';
import EditScreen from './src/screens/editContact';
import DetailsContact from './src/screens/detailsContact';
import CreateNewContact from './src/screens/createNewContact';

type RootStackParamList = {
  Home: undefined;
  CreateNewContact: undefined;
  Edit: {id: string};
  Details: {id: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsContact}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="CreateNewContact"
            component={CreateNewContact}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
