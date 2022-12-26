/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Button from '../../components/_shared/Button';
import OTPInput from '../../components/otp/OTPInput';

const Verification: React.FunctionComponent = () => {
  const [otpCode, setOTPCode] = React.useState('');
  const [isPinReady, setIsPinReady] = React.useState(false);
  const maximumCodeLength = 4;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.back} source={require('../../assets/Back.png')} />
        <View>
          <OTPInput
            code={otpCode}
            setCode={setOTPCode}
            maximumLength={maximumCodeLength}
            setIsPinReady={setIsPinReady}
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

  back: {
    width: 22,
    height: 22,
    marginVertical: 30,
    marginHorizontal: 30,
  },
});
export default Verification;
