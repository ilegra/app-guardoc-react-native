import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './';

const ListItem = ({ document }) => {
  const { headerContentStyle,
          headerNameStyle,
          headerNumberStyle,
          headerNumberContentStyle,
          headerStyle,
          imageStyle
  } = styles;
  return (
    <Card>
      <CardSection style={headerStyle}>
          <View style={headerContentStyle}>
            <Text style={headerNameStyle}>{document.name}</Text>
            <View style={headerNumberStyle}>
              <Text style={headerNumberContentStyle}>{document.number}</Text>
            </View>
          </View>
        </CardSection>
        <CardSection>
          <Image
            style={imageStyle}
            source={document.image}
          />
        </CardSection>
      </Card>
  );
};

const styles = {

  headerStyle: {
    backgroundColor: '#599db2'
  },

  headerContentStyle: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 15,
    paddingRight: 7,
    paddingLeft: 7,
    flexDirection: 'column',
    justifyContent: 'space-around',
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
    width: 200
  }

};

export default ListItem;
