import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../actions';
import { Spinner } from './common';

class LoginAuto extends Component {
  render() {
    const logo = require('./img/logo.png');
    this.props.loginUser();
    return (
      <View style={styles.viewStyle}>
         <Image source={logo} style={styles.imageStyle} />
         <Spinner size="large" />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    flex: 1,
    height: 250,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};


export default connect(mapStateToProps, { loginUser })(LoginAuto);
