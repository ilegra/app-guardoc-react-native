import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux';
import { documentUpdate } from '../../actions';

class ImageCamera extends React.Component {
  state = {
    image: null,
  };

  _pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
    this.props.onPress(this.state.image)
  };

  render() {
    const { image } = this.state;
    let imageUrl = require('../img/camera.png');

    if (image != null) {
       imageUrl = { uri: image };
    }

    return (
      <View style={styles.viewStyle}>
        <TouchableOpacity onPress={this._pickImage}>
          {imageUrl &&
          <Image source={imageUrl} style={styles.imageStyle} />}
          <Text style={styles.textStyle}>TIRAR FOTO</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageStyle: {
    width: 280,
    height: 210
  },
  textStyle: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.7)',
    fontSize: 16
  }
};

const mapStateToProps = (state) => {
  const { image } = 'teste';

  return { image };
};

export default connect(mapStateToProps, { documentUpdate })(ImageCamera);
