import React from 'react';
import { Image, View, Button, TouchableOpacity, Text } from 'react-native';
import { ImagePicker } from 'expo';

export default class ImagePickerExample extends React.Component {
  state = {
    image: null,
  };


  _pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
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
    if (image === null) {
      return (
        <View style={styles.viewStyle}>
          <TouchableOpacity onPress={this._pickImage}>
            <Image source={require('../img/ic_add.png')} />
            <Text style={{ textAlign: 'center' }}> Adicionar imagem </Text>
          </TouchableOpacity>
        </View>
      );
    } else {
    return (
      <View style={styles.viewStyle}>
        {image &&
          <Image source={{ uri: image }} style={{ width: 280, height: 200 }} />}
          <TouchableOpacity onPress={this._pickImage}>
              <Text style={{ textAlign: 'center' }}> Alterar imagem </Text>
          </TouchableOpacity>
      </View>
    );
  }
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};
