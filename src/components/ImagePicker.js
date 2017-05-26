import React from 'react';
import { Image, View, Button } from 'react-native';
import { ImagePicker } from 'expo';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };


  _pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    const { image } = this.state;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Escolha uma imagem da galeria"
          onPress={this._pickImage}
        />
        {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

      </View>
    );
  }
}