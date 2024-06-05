import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
{/* import {launchCamera} from 'react-native-image-picker'; */}
import { useRoute } from '@react-navigation/native';
import {imageMethodSelection} from '../utils/ImageHelper';

const CameraScreen = ({route, navigation}) => {
  const { method } = route.params;
  const [image, setImage] = useState(null);
  const [avaliation, setAvaliation] = useState("Ruim");
  const [buttonLabel, setButtonLabel] = useState("");
  const [count, setCount] = useState(0);
  //const route = useRoute();
  
  useEffect(() => {
    if(count == 0){
      setCount(1);
      pickImage();
    }
    if(method === 'Camera') {
      setButtonLabel('Tirar outra foto!')
    } else {
      setButtonLabel('Selecioanar outra foto!')
    }
  }, [])

  const pickImage = async () => {
  console.log("Route ###" + JSON.stringify(route));
    // No permissions request is necessary for launching the image library

    const result = await imageMethodSelection(method);

    console.log("Result ###" + result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }

    const random = Math.random();
    if(random >= 0.5) setAvaliation("Boa")
    else setAvaliation("Ruim")

  };

  return (
    <><View style={styles.container}>
      {image && <><Image source={{ uri: image }} style={styles.image} />
        <View>
          <Text>A avaliação da sua foto é</Text>
          <Text style={{ fontSize: 20, color: avaliation == "Boa" ? 'green' : 'red' }}>{avaliation}</Text>
        </View></>}
    </View><Button title={buttonLabel} onPress={pickImage} /></>
  );
};



const styles = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#ffebcd',
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default CameraScreen;
