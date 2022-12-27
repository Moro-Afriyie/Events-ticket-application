/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../../components/_shared/Button';
import {useState} from 'react';
import TextInputWithImageIcon from '../../components/_shared/TextInputWithImageIcon';

const SignIn: React.FunctionComponent = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.logo} source={require('../../assets/logo2.png')} />
        <View style={styles.form}>
          <Text style={styles.heading}>Sign in</Text>
          <TextInputWithImageIcon
            imageUrl={require('../../assets/Mail.png')}
            placeholder={'abc@email.com'}
          />
          <TextInputWithImageIcon
            imageUrl={require('../../assets/Password.png')}
            placeholder={'Your password'}
          />
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
              marginVertical: 20,
              fontSize: 16,
              lineHeight: 34,
              color: '#9D9898',
            }}>
            OR
          </Text>
          <View style={styles.socialButtonsContainer}>
            <TouchableWithoutFeedback>
              <View style={[styles.socialLoginButton, styles.shadowProp]}>
                <Image
                  style={styles.socialImage}
                  source={require('../../assets/google.png')}
                />
                <Text style={styles.socialText}>Login with Google</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={[styles.socialLoginButton, styles.shadowProp]}>
                <Image
                  style={styles.socialImage}
                  source={require('../../assets/facebook.png')}
                />
                <Text style={styles.socialText}>Login with Facebook</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.footer}>
            <Text style={[styles.footerText, {color: '#120D26'}]}>
              Don’t have an account?
            </Text>
            <TouchableWithoutFeedback>
              <Text
                style={[styles.footerText, {marginLeft: 5, color: '#3D56F0'}]}>
                Sign up
              </Text>
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
    fontWeight: '500',
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
    width: 273,
    height: 56,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  socialText: {
    fontSize: 16,
    lineHeight: 25,
    color: '#120D26',
  },
  socialImage: {
    width: 26,
    height: 26,
    marginRight: 15,
  },
  shadowProp: {
    shadowColor: '#D3D4E2',
    shadowOffset: {width: 15, height: 0},
    shadowOpacity: 0.7,
    shadowRadius: 35,
    elevation: 10,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  footerText: {
    fontSize: 15,
    lineHeight: 25,
  },
});
export default SignIn;
