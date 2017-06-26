import React, { Component } from 'react';
import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, createUserAccount } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class CreateAccountForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.createUserAccount({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button buttonStyleProps={styles.loginStyle} onPress={this.onButtonPress.bind(this)}>
        CADASTRAR
      </Button>
    );
  }

  render() {
    return (
      <ScrollView>
        <Card>
          <CardSection style={{ padding: 10 }}>
            <Input
              placeholder="usuario@dominio.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection style={{ padding: 10 }}>
            <Input
              secureTextEntry
              placeholder="********"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <View>
            {this.renderButton()}
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  infoTextStyle: {
    paddingTop: 10,
    fontSize: 12,
    color: '#4d4d4d'
  },
  viewStyle: {
    padding: 5,
    alignItems: 'center',
    marginBottom: 30
  },
  imageStyle: {
    flex: 1,
    height: 180,
    width: 160,
    resizeMode: 'contain'
  },
  buttonStyle: {
    backgroundColor: 'transparent'
  },
  loginStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#b8d329',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  },
  registerStyle: {
    color: '#599db2',
    fontSize: 16,
    fontFamily: 'open-sans-regular'
  },
  autoLoginStyle: {
    color: '#b8d329',
    fontSize: 16,
    fontFamily: 'open-sans-regular'
  },
  errorStyle: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
      paddingVertical: 10
  },
  errorTextStyle: {
    flex: 3,
    fontSize: 14,
    color: '#4d4d4d',
    fontFamily: 'open-sans-regular'
  },
  errorImageStyle: {
    flex: 1,
    height: 30,
    width: 30,
    resizeMode: 'contain'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, image } = auth;

  return { email, password, error, loading, image };
};


export default connect(mapStateToProps, {
   emailChanged, passwordChanged, createUserAccount
})(CreateAccountForm);