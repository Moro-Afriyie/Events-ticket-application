/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
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

const Slide: React.FunctionComponent<{item: ISlide} & IFooter> = ({
  item,
  skip,
  goToNextSlide,
  currentIndex,
}) => {
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
        <View style={[footerStyles.footerContainer, {width: width}]}>
          <View style={footerStyles.section}>
            <TouchableOpacity onPress={skip}>
              <Text style={[footerStyles.controls, {opacity: 0.5}]}>Skip</Text>
            </TouchableOpacity>
            <View style={footerStyles.indicatorContainer}>
              {slides.map((_, index) => (
                <View
                  key={index}
                  style={[
                    footerStyles.indicator,
                    currentIndex === index && {opacity: 1},
                  ]}
                />
              ))}
            </View>

            <TouchableOpacity onPress={goToNextSlide}>
              <Text style={[footerStyles.controls]}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const slideStyles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    position: 'relative',
  },
  image: {
    height: '62%',
    // resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    maxWidth: 295,
    width: '100%',
    fontWeight: '500',
    lineHeight: 34,
    textAlign: 'center',
    marginBottom: 15,
    color: '#ffffff',
  },
  subTitle: {
    fontSize: 15,
    maxWidth: 295,
    width: '100%',
    fontWeight: '400',
    lineHeight: 25,
    textAlign: 'center',
    color: '#ffffff',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    height: 288,
    paddingVertical: 30,
    // paddingHorizontal: 50,
    borderTopLeftRadius: 48,
    borderTopRightRadius: 48,
    backgroundColor: '#5669FF',
    display: 'flex',
    alignItems: 'center',
  },
});

interface IFooter {
  currentIndex: number;
  goToNextSlide: () => void;
  skip: () => void;
}

// const Footer: React.FunctionComponent<IFooter> = ({
//   currentIndex,
//   goToNextSlide,
//   skip,
// }) => {
//   const {width} = useWindowDimensions();

//   return (
//     <View style={[footerStyles.footerContainer, {width: width}]}>
//       <View style={footerStyles.section}>
//         <TouchableOpacity onPress={skip}>
//           <Text style={[footerStyles.controls, {opacity: 0.5}]}>Skip</Text>
//         </TouchableOpacity>
//         <View style={footerStyles.indicatorContainer}>
//           {slides.map((_, index) => (
//             <View
//               key={index}
//               style={[
//                 footerStyles.indicator,
//                 currentIndex === index && {opacity: 1},
//               ]}
//             />
//           ))}
//         </View>

//         <TouchableOpacity onPress={goToNextSlide}>
//           <Text style={[footerStyles.controls]}>Next</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

const footerStyles = StyleSheet.create({
  footerContainer: {
    display: 'flex',
    marginTop: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  section: {
    maxWidth: 295,
    width: '100%',
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
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const {width, height} = useWindowDimensions();
  const flatListRef = React.useRef<FlatList | null>(null);

  const updateCurrentSlideIndex = (
    e: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const index = contentOffsetX / width;
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    const nextSlide = currentIndex + 1;
    if (nextSlide !== slides.length) {
      const offset = nextSlide * width;
      flatListRef?.current?.scrollToOffset({offset});
      setCurrentIndex(nextSlide);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    flatListRef?.current?.scrollToOffset({offset});
    setCurrentIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} />
      <View style={[{height: height}, styles.listContainer]}>
        <FlatList
          ref={flatListRef}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          data={slides}
          pagingEnabled
          contentContainerStyle={styles.flatList}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Slide
              currentIndex={currentIndex}
              goToNextSlide={goToNextSlide}
              skip={skip}
              item={item}
            />
          )}
        />
        {/* <Footer
          currentIndex={currentIndex}
          goToNextSlide={goToNextSlide}
          skip={skip}
        /> */}
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
