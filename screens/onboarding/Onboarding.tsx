import * as React from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

interface ISlide {
  id: string;
  imageUrl: ImageSourcePropType;
  title: string;
  subTitle: string;
}

const slides: ISlide[] = [
  {
    id: '1',
    imageUrl: require('../../assets/obs1.png'),
    title: 'Explore Upcoming and Nearby Events',
    subTitle:
      ' In publishing and graphic design, Lorem is a placeholder text commonly ',
  },
  {
    id: '2',
    imageUrl: require('../../assets/obs2.png'),
    title: 'Web Have Modern Events Calendar Feature',
    subTitle:
      'In publishing and graphic design, Lorem is a placeholder text commonly',
  },
  {
    id: '3',
    imageUrl: require('../../assets/obs3.png'),
    title: 'To Look Up More Events or Activities Nearby By Map',
    subTitle:
      'In publishing and graphic design, Lorem is a placeholder text commonly',
  },
];

const Slide: React.FunctionComponent<{item: ISlide}> = ({item}) => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={slideStyles.container}>
      <Image
        source={item.imageUrl}
        style={[{width: width}, slideStyles.image]}
      />
    </View>
  );
};

const slideStyles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },

  image: {
    height: '75%',
  },
});

const OnBoardingScreen: React.FunctionComponent = () => {
  const {width, height} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} />
      <FlatList
        data={slides}
        showsHorizontalScrollIndicator={false}
        horizontal
        keyExtractor={item => item.id}
        renderItem={({item}) => <Slide item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default OnBoardingScreen;
