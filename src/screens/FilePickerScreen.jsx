import React, { useState } from 'react';
import { View, Text, Button, ImagePicker } from 'react-native';

const FilePickerScreen = () => {
  const [image, setImage] = useState(null);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (result.uri) {
        setImage(result.uri);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Selecionar Arquivo" onPress={selectImage} />
    </View>
  );
};

export default FilePickerScreen;
