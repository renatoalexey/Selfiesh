import { useState } from 'react';
import { Button, Image, View, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {imageMethodSelection} from '../utils/ImageHelper';
import { useRoute } from '@react-navigation/native';

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const route = useRoute();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    
    let result = await imageMethodSelection(route.name)

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});
