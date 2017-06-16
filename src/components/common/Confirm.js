import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, textStyle, cardSectionStyle, buttonStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={() => {}}
    >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardSection>

        <CardSection style={cardSectionStyle}>
          <Button onPress={onAccept} style={buttonStyle}>SIM</Button>
        </CardSection>
        <CardSection style={cardSectionStyle}>
          <Button onPress={onDecline} style={buttonStyle}>NÃO</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = {
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  cardSectionStyle: {
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 0
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  buttonStyle: {
    alignSelf: 'flex-start',
    backgroundColor: 'red',
    color: 'red'
  }
};

export { Confirm };
