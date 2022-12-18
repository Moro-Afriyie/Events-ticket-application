import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const SplashScreen: React.FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 242,
    height: 58,
  },
});
export default SplashScreen;
