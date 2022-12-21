/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Switch,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../../components/_shared/Button';
import {useState} from 'react';

const SignIn: React.FunctionComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.logo} source={require('../../assets/logo2.png')} />
        <View style={styles.form}>
          <Text style={styles.heading}>Sign in</Text>
          <View style={styles.textInputContainer}>
            <Image
              style={styles.textInputImageIcon}
              source={require('../../assets/Mail.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="abc@email.com"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.textInputContainer}>
            <Image
              style={styles.textInputImageIcon}
              source={require('../../assets/Password.png')}
            />
            <TextInput
              style={styles.input}
              placeholder="Your password"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={styles.switchContainer}>
            <Switch
              trackColor={{false: '#ffffff', true: '#5669FF'}}
              thumbColor={isEnabled ? '#ffffff' : '#f4f3f4'}
              ios_backgroundColor="#ffffff"
              style={{transform: [{scaleX: 0.6}, {scaleY: 0.6}]}}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={styles.text}>Remember Me</Text>
            <Text style={[styles.text, {marginLeft: 'auto'}]}>
              Forgot Password?
            </Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Button text="sign in" />
          </View>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 25,
              fontSize: 16,
              lineHeight: 34,
            }}>
            OR
          </Text>
          <View style={styles.socialButtonsContainer}>
            <TouchableWithoutFeedback>
              <View style={[styles.socialLoginButton, styles.shadowProp]}>
                <Image
                  style={styles.socialImage}
                  source={require('../../assets/forwardArrow.png')}
                />
                <Text style={styles.socialText}>Login with Google</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={[styles.socialLoginButton, styles.shadowProp]}>
                <Image
                  style={styles.socialImage}
                  source={require('../../assets/forwardArrow.png')}
                />
                <Text style={styles.socialText}>Login with Google</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  switchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  logo: {
    width: 162,
    height: 114,
    marginVertical: 30,
    alignSelf: 'center',
  },
  form: {
    paddingHorizontal: 30,
    display: 'flex',
  },
  heading: {
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 25,
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    height: 56,
    borderColor: '#E4DFDF',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 17,
    marginBottom: 25,
  },
  textInputImageIcon: {
    width: 24,
    height: 24,
    padding: 10,
  },

  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    marginHorizontal: 10,
    fontSize: 14,
    color: '#747688',
    lineHeight: 23,
  },
  text: {
    fontSize: 14,
    lineHeight: 23,
  },
  socialButtonsContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  socialLoginButton: {
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
  socialText: {
    fontSize: 16,
    lineHeight: 25,
  },
  socialImage: {
    width: 30,
    height: 30,
  },
  shadowProp: {
    shadowColor: '#6F7EC9',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 35,
    elevation: 10,
  },
});
export default SignIn;
