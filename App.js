import React from 'react';
import { StyleSheet, View } from 'react-native';
import ImagePicker from './src/components/ImagePicker';
import ImageCamera from './src/components/ImageCamera';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageCamera />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
