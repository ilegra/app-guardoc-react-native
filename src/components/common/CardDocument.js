import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card, CardSection } from './';

class CardDocument extends Component {
  render() {
    const { name, number, image } = this.props.document;

    const { headerContentStyle,
            headerNameStyle,
            headerNumberStyle,
            headerNumberContentStyle,
            headerStyle,
            imageStyle
    } = styles;

    return (
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
                  source={{ uri: image }}
                />
            </CardSection>
        </Card>
    );
  }
}

const styles = {

  headerStyle: {
    backgroundColor: '#599db2',
    borderBottomWidth: 0
  },

  headerContentStyle: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingRight: 7,
    paddingLeft: 7,
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1
  },

  headerNameStyle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 7,
    fontFamily: 'open-sans-light',
  },

  headerNumberStyle: {
      backgroundColor: '#b8d329',
      padding: 5,
      justifyContent: 'space-around',
      alignSelf: 'stretch'
  },

  headerNumberContentStyle: {
      fontSize: 22,
      fontFamily: 'open-sans-bold',
      color: 'white',
      justifyContent: 'space-around',
  },


  imageStyle: {
    height: 250,
    flex: 1,
    width: null
  }

};

export default CardDocument;
