import * as ImagePicker from 'expo-image-picker';

export const imageMethodSelection = (screenName) => {
    const imageParameters = {mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    }

  console.log("chegou aqui")
    if(screenName === "Camera") {
      const result =ImagePicker.launchCameraAsync(imageParameters); 

      console.log("Result do Helper ###" + result)
      return result;
    }
    else return ImagePicker.launchImageLibraryAsync(imageParameters);
}
