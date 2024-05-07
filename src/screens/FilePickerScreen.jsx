import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const FilePickerScreen = () => {
  const [image, setImage] = useState(null);

  const selectImage = async () => {
    try {
 {/*      
      launchImageLibrary({mediaType: "photo"})

      const result = await launchImageLibrary({mediaType: "photo"});
      if (result.uri) {
        setImage(result.uri);
      }*/}


    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Selecionar Arquivo"   onPress={() => {
        console.log('capeta')
        console.log('ImagePicker do capeta:' + JSON.stringify(ImagePicker))
      return ImagePicker.launchImageLibrary(
       {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
       },
        response => {
          console.log('desgraça');
           console.log(response);
           setImage(response);
          },
        )
      }
     }/>
     <Button onPress={() => console.log('demonio')} title='teste'></Button>
    </View>
  );
};

export default FilePickerScreen;
