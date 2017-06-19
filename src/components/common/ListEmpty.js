import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Expo from 'expo';

class ListEmpty extends React.Component {
  onPress() {
    Actions.documentCreate();
    Expo.Segment.track('Action adicionar documento (ListEmpty)');
  }

  render() {
    const imageUrl = require('../img/adicionar-doc.png');

    return (
      <ScrollView>
      <View style={styles.viewStyle}>
        <Text style={{ flex: 1, marginBottom: 100 }}>Você ainda não tem nenhum documento!</Text>
        <TouchableOpacity onPress={this.onPress} style={{ flex: 3 }}>
          <Image source={imageUrl} style={styles.imageStyle} />
          <Text style={styles.textStyle}>Criar novo documento</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center'
  },
  imageStyle: {
    height: 200,
    width: null
  },
  textStyle: {
     paddingTop: 20,
     fontWeight: 'bold',
     fontSize: 20,
     color: '#484848'
  }
};

export default ListEmpty;
