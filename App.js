import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, CardSection } from './src/components/common';

export default class App extends React.Component {

  render() {
    return (
      <View>
        <Text style={styles.textStyle}>
            Meus documentos
        </Text>
          <Card>
            <CardSection>
              <View style={styles.headerContentStyle}>
                <Text style={styles.headerTextStyle}>Nome do documento</Text>
                <Text>Número do documento</Text>
              </View>
            </CardSection>
            <CardSection>
              <Image style={styles.imageStyle} />
            </CardSection>
          </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  textStyle: {
    textAlign: 'center'
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },

  headerTextStyle: {
    fontSize: 18
  },

  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
});
