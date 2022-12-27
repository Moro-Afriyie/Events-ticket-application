/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';
import Button from '../../components/_shared/Button';
import TextInputWithImageIcon from '../../components/_shared/TextInputWithImageIcon';

const ResetPassword: React.FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.back} source={require('../../assets/Back.png')} />
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Reset Password</Text>
          <Text style={styles.subHeading}>
            Please enter your email address to request a password reset
          </Text>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionInput}>
            <TextInputWithImageIcon
              imageUrl={require('../../assets/Mail.png')}
              placeholder={'abc@email.com'}
            />
          </View>

          <View style={{alignSelf: 'center'}}>
            <Button text="continue" />
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
    marginVertical: 30,
    paddingHorizontal: 30,
  },
  sectionInput: {
    width: '100%',
  },
  back: {
    width: 22,
    height: 22,
    marginVertical: 30,
    marginHorizontal: 30,
  },
});
export default ResetPassword;
