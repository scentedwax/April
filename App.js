import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const textsList = [require('./images/text.png'), require('./images/text2.png'), require('./images/text3.png')];
const imagesList = [require("./images/vase_and_rose_good.png"), require("./images/tulips_vase.png"), require("./images/Lilies.png")];

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const handleTouch = () => {
    const nextIndex = (currentImageIndex + 1) % textsList.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <TouchableOpacity onPress={handleTouch} style={styles.container}>
      <Image source={textsList[currentImageIndex]} style={styles.text} />
      <Image source={imagesList[currentImageIndex]} style={styles.vase} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a3c6c0',
    alignItems: "center"
  },
  vase: {
    width: '90%',
    height: '90%',
    top: "-70%",
    resizeMode: "contain",
    position: "relative"
  },
  text: {
    width: '95%',
    height: '95%',
    top: "-18%",
    left: "-6%",
    resizeMode: "contain",
    position: "relative"
  },
});

export default App;
