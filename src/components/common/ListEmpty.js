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
        <Text style={styles.infoText}>Você ainda não tem nenhum documento!</Text>
        <TouchableOpacity onPress={this.onPress}>
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
    alignItems: 'center',
    marginTop: 50
  },
  imageStyle: {
    height: 200,
    width: 200,
    alignSelf: 'center'
  },
  textStyle: {
     paddingTop: 20,
     fontFamily: 'cour-bold',
     fontSize: 20,
     color: '#4d4d4d'
  },
  infoText: {
    fontFamily: 'open-sans-light',
    marginBottom: 60,
    color: '#4d4d4d'
  }
};

export default ListEmpty;
