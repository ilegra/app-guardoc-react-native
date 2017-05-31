import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card, CardSection } from './';

const ListItem = ({ document }) => {
  const { headerContentStyle,
          headerTextStyle,
          imageStyle
  } = styles;
  return (
    <Card>
      <CardSection>
          <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{document.name}</Text>
            <Text>{document.number}</Text>
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
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  headerTextStyle: {
    fontSize: 18
  },

  thumbnailStyle: {
    height: 50,
    width: 50
  },

  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  imageStyle: {
    height: 250,
    flex: 1,
    width: 200
  }

};

export default ListItem;
