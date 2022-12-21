import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';
import Button from '../../components/_shared/Button';

const SignIn: React.FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.logo} source={require('../../assets/logo2.png')} />
        <View style={styles.form}>
          <Text style={styles.heading}>Sign in</Text>
          <View style={styles.searchSection}>
            <TextInput
              style={styles.input}
              placeholder="User Nickname"
              underlineColorAndroid="transparent"
            />
          </View>
          <Button text="sign in" />
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
  logo: {
    width: 162,
    height: 114,
    marginVertical: 30,
    alignSelf: 'center',
  },
  form: {
    paddingHorizontal: 30,
  },
  heading: {
    fontSize: 24,
    lineHeight: 32,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
export default SignIn;
