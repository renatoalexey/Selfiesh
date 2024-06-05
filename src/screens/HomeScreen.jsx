import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const HomeScreen = ({navigation}) => {
  const [fontsLoaded, fontError] = useFonts({
    'VeganStyle': require('../../assets/fonts/Inter-Black.otf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
     if (fontsLoaded || fontError) {
       await SplashScreen.hideAsync();
       console.log("dcsdc ###" + fontError)
    }
   }, [fontsLoaded, fontError]);

   if (!fontsLoaded && !fontError) {
     return null;
    }
  

  return (
    <>
    <View style={styles.container} onLayout={onLayoutRootView}>
          <Text style={{ fontSize: 20}}>Bem-vindo ao</Text>
          <Text style={{ fontFamily: 'Times New Roman', fontSize: 70, fontWeight: 'italic' }}>Selfie-sh!</Text> 
          <StatusBar style="auto" />
      </View><Button
              title="Tirar foto"
              onPress={() => navigation.navigate('Camera', {
                method: 'Camera'
              })}/>
             <Button
              title="Selecionar arquivo"
              onPress={() => navigation.navigate('Camera', {
                method: 'File'
              })} /></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebcd',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default HomeScreen;