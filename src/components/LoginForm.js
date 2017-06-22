import React, { Component } from 'react';
import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser, loginUserWithEmailAndPassword, redefinePassword } from '../actions';
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
      <Button buttonStyleProps={styles.loginStyle} onPress={this.onLoginPress.bind(this)}>
        Entrar
      </Button>
    );
  }

  onResetPassword() {
    const { email } = this.props;
    this.props.redefinePassword({ email });
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <Image source={require('./img/logo.png')} style={styles.imageStyle} />
        </View>

        <TouchableOpacity onPress={this.onResetPassword.bind(this)}>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
        </TouchableOpacity>

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

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button
            buttonStyleProps={styles.buttonStyle}
            textStyleProps={styles.registerStyle}
          >
            Fazer cadastro
          </Button>
          <Button
            buttonStyleProps={styles.buttonStyle}
            textStyleProps={styles.autoLoginStyle}
            onPress={this.onButtonPress.bind(this)}
          >
            Entrar sem cadastro
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 18,
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
  },
  autoLoginStyle: {
    color: '#b8d329',
    fontSize: 16,
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};


export default connect(mapStateToProps, {
   emailChanged, passwordChanged, loginUser, loginUserWithEmailAndPassword, redefinePassword
})(LoginForm);
