import React, { Component } from 'react';
import { Text, Image, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, loginUserWithEmailAndPassword } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    this.props.loginUser();
  }

  onLoginPress() {
    const { email, password } = this.props;
    this.props.loginUserWithEmailAndPassword({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button onPress={this.onLoginPress.bind(this)}>
        Entrar
      </Button>
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <Image source={require('./img/logo.png')} style={styles.imageStyle} />
        </View>
        <Card>
          <CardSection>
            <Input
              placeholder="usuario@dominio.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              placeholder="******"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
        <View>
          <Button onPress={this.onButtonPress.bind(this)}>Continuar sem cadastro</Button>
          <Button>Nova conta</Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  infoTextStyle: {
    paddingTop: 10,
    fontSize: 12,
    color: '#4d4d4d'
  },
  viewStyle: {
    padding: 5,
    alignItems: 'center'
  },
  imageStyle: {
    height: 245,
    width: 200
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};


export default connect(mapStateToProps, {
   emailChanged, passwordChanged, loginUser, loginUserWithEmailAndPassword
})(LoginForm);
