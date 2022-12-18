import * as React from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
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
    <View style={[slideStyles.container, {height: height}]}>
      <Image
        source={item.imageUrl}
        style={[{width: width}, slideStyles.image]}
      />
      <View style={[slideStyles.footer, {height: height * 0.38, width: width}]}>
        <Text style={slideStyles.title}>{item.title}</Text>
        <Text style={slideStyles.subTitle}>{item.subTitle}</Text>
      </View>
    </View>
  );
};

const slideStyles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    position: 'relative',
    // backgroundColor: '#ffffff',
  },
  image: {
    height: '62%',
    // resizeMode: 'contain',
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    lineHeight: 34,
    textAlign: 'center',
    marginBottom: 15,
    color: '#ffffff',
  },
  subTitle: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 25,
    textAlign: 'center',
    color: '#ffffff',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 288,
    paddingVertical: 40,
    paddingHorizontal: 50,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    backgroundColor: '#5669FF',
  },
});

const Footer: React.FunctionComponent = () => {
  const {width} = useWindowDimensions();

  return (
    <View style={[footerStyles.footerContainer, {width: width}]}>
      <TouchableOpacity>
        <Text style={[footerStyles.controls]}>Skip</Text>
      </TouchableOpacity>
      <View style={footerStyles.indicatorContainer}>
        {slides.map(item => (
          <View key={item.id} style={footerStyles.indicator} />
        ))}
      </View>

      <TouchableOpacity>
        <Text style={[footerStyles.controls]}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const footerStyles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 80,
    paddingHorizontal: 50,
    paddingVertical: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  indicatorContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    opacity: 0.4,
    marginHorizontal: 4,
  },
  controls: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffffff',
  },
});

const OnBoardingScreen: React.FunctionComponent = () => {
  const {height} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} />
      <View style={[{height: height}, styles.listContainer]}>
        <FlatList
          data={slides}
          pagingEnabled
          contentContainerStyle={styles.flatList}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({item}) => <Slide item={item} />}
        />
        <Footer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  listContainer: {
    position: 'relative',
  },
  flatList: {
    flexGrow: 1,
  },
});

export default OnBoardingScreen;
