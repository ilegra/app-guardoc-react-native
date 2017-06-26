import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
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
  loginStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#b8d329',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading, image } = auth;

  return { email, password, error, loading, image };
};


export default connect(mapStateToProps, {
   emailChanged, passwordChanged, createUserAccount
})(CreateAccountForm);
