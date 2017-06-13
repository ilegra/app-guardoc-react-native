import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import { ImagePicker } from 'expo';
import { connect } from 'react-redux';
import { documentUpdate } from '../../actions';

class ImageCamera extends React.Component {
  constructor(props) {
    super(props);
  }
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
    let imageUrl;

    if (image != null) {
       imageUrl = { uri: image };
    } else if (this.props.value != null) {
      imageUrl = { uri: this.props.value };
    } else {
      imageUrl = require('../img/camera.png');
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
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  imageStyle: {
    height: 250,
    flex: 1,
    width: null
  },
  textStyle: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.7)',
    fontSize: 16,
    paddingVertical: 15
  }
};

const mapStateToProps = (state) => {
  const { image } = 'teste';

  return { image };
};

export default connect(mapStateToProps, { documentUpdate })(ImageCamera);
