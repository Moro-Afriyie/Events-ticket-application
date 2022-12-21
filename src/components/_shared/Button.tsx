import * as React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

interface IButtonProps {
  text: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({text}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={[styles.buttonContainer, styles.shadowProp]}>
        <Text style={styles.buttonText}>{text}</Text>
        <Image
          style={styles.image}
          source={require('../../assets/forwardArrow.png')}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 271,
    height: 58,
    backgroundColor: '#5669FF',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#ffffff',
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 'auto',
  },
  shadowProp: {
    shadowColor: '#6F7EC9',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 35,
    elevation: 10,
  },
});
export default Button;
