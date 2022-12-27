/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../../components/_shared/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Verification: React.FunctionComponent = () => {
  const [otpCode, setOTPCode] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.back} source={require('../../assets/Back.png')} />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Verification</Text>
          <Text style={styles.subHeading}>
            We've send you the verification code on +1 2620 0323 7631
          </Text>
        </View>

        <View style={styles.section}>
          <OTPInputView
            style={{width: '80%', height: 130}}
            pinCount={4}
            code={otpCode}
            onCodeChanged={code => setOTPCode(code)}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            placeholderCharacter={'-'}
            placeholderTextColor={'#E4DFDF'}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <View style={{alignSelf: 'center'}}>
            <Button text="continue" />
          </View>
          <View style={styles.footer}>
            <Text style={[styles.footerText, {color: '#120D26'}]}>
              Re-send code in
            </Text>
            <TouchableWithoutFeedback>
              <Text
                style={[styles.footerText, {marginLeft: 5, color: '#3D56F0'}]}>
                0:20
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
  headingContainer: {paddingHorizontal: 30},
  heading: {
    fontSize: 24,
    lineHeight: 32,
    marginBottom: 15,
    fontWeight: '500',
  },
  subHeading: {
    fontSize: 15,
    maxWidth: 244,
    width: '100%',
    fontWeight: '400',
    lineHeight: 25,
    color: '#120D26',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 15,
    lineHeight: 25,
  },

  back: {
    width: 22,
    height: 22,
    marginVertical: 30,
    marginHorizontal: 30,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#E4DFDF',
  },

  underlineStyleBase: {
    width: 55,
    height: 55,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 12,
    fontSize: 24,
    color: '#120D26',
  },

  underlineStyleHighLighted: {
    borderColor: '#5669FF',
  },
});
export default Verification;
