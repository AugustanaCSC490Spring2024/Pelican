import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';

const slides = [
  {
    key: 1,
    title: 'Exclusive Augustana Community',
    text: 'Join Pelican, the exclusive marketplace app for Augustana College students. \n Buy, sell, and connect within your Augustana community for a safer and more transparent marketplace experience.',
    image: require('../assets/onboarding-1.png'),
    backgroundColor: '#fff',
  },
  {
    key: 2,
    title: 'Secure Messaging System',
    text: 'Chat directly with sellers to negotiate prices and ask questions about products or services. \n Pelican\'s secure messaging system ensures safe and transparent communication between buyers and sellers.',
    image: require('../assets/onboarding-2.png'),
    backgroundColor: '#fff',
  },
  {
    key: 3,
    title: 'Rate Your Experience',
    text: 'Rate your buying or selling experience to help maintain a positive and trustworthy community.\n Your ratings contribute to building a reliable network within the Augie Marketplace App.',
    image: require('../assets/onboarding-3.png'),
    backgroundColor: '#fff',
  }
];

const { width } = Dimensions.get('window');

export default function OnboardingSwiper() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    if (roundIndex !== activeSlide) {
      setActiveSlide(roundIndex);
    }
  };
  return (
    <>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={styles.container}
        contentOffset={{ x: activeSlide * width }}
        decelerationRate={0}
        snapToInterval={width}
        // scrollEventThrottle={16}
        // snapToAlignment="center"
      >
        {slides.map((slide, index) => (
          <View key={slide.key} style={styles.slide}>
            <Text style={styles.title}>{slide.title}</Text>
            <Image source={slide.image} style={styles.image}/>
            <Text style={styles.text}>{slide.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <TouchableOpacity 
            key={index}
            style={[styles.dot, index === activeSlide ? styles.activeDot : styles.inactiveDot]}
            />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: width,
    // minHeight: 300,
  },
  slide: {
    flex: 1,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#9DD6EB',
    padding: 20
  },
  image: {
    width: '50%',
    height: '50%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
})
