import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card } from './';

class ListItem extends Component {
  onRowPress() {
    Actions.documentEdit({ document: this.props.document });
  }

  render() {
    const { name, number, image } = this.props.document;

    const { headerContentStyle,
            headerNameStyle,
            headerNumberStyle,
            headerNumberContentStyle,
            headerStyle,
            imageStyle
    } = styles;

    const imageUrl = require('../img/camera.png');

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
            <Card style={{ alignSelf: 'stretch' }}>
              <CardSection style={headerStyle}>
                  <View style={headerContentStyle}>
                    <Text style={headerNameStyle}>{name}</Text>
                    <View style={headerNumberStyle}>
                      <Text style={headerNumberContentStyle}>{number}</Text>
                    </View>
                  </View>
                </CardSection>
                <CardSection>
                  <Image
                    style={imageStyle}
                    source={imageUrl}
                  />
                </CardSection>
              </Card>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {

  headerStyle: {
    backgroundColor: '#599db2'
  },

  headerContentStyle: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingRight: 7,
    paddingLeft: 7,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  headerNameStyle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 7
  },

  headerNumberStyle: {
      backgroundColor: '#b8d329',
      padding: 5,
      justifyContent: 'space-around'
  },

  headerNumberContentStyle: {
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
      justifyContent: 'space-around'
  },


  imageStyle: {
    height: 250,
    flex: 1,
    width: null
  }

};

export default ListItem;
