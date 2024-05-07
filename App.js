import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import CameraScreen from './src/screens/CameraScreen';
import FilePickerScreen from './src/screens/FilePickerScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Camera" component={CameraScreen} />
        <Stack.Screen name="FilePicker" component={FilePickerScreen} />
      </Stack.Navigator>
</NavigationContainer>
  );
}
