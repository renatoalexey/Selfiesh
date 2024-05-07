import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <>
    <View style={styles.container}>
          <Text>Selfie-sh!</Text>
          <StatusBar style="auto" />
      </View><Button
              title="Tirar foto"
              onPress={() => navigation.navigate('Camera')} />
             <Button
              title="Selecionar arquivo"
              onPress={() => navigation.navigate('FilePicker')} /></>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;