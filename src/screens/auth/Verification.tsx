/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Image} from 'react-native';
import Button from '../../components/_shared/Button';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Verification: React.FunctionComponent = () => {
  const [otpCode, setOTPCode] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.back} source={require('../../assets/Back.png')} />
        <View style={styles.section}>
          <OTPInputView
            style={{width: '80%', height: 200}}
            pinCount={4}
            code={otpCode}
            onCodeChanged={code => setOTPCode(code)}
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <View style={{alignSelf: 'center'}}>
            <Button text="sign in" />
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

  section: {
    display: 'flex',
    alignItems: 'center',
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
