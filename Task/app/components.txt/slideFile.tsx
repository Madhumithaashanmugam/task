import React, { useRef } from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const images = [
  require("../assets/camera1.png"),
  require("../assets/camera2.png"),
];

const SlideFile = () => {
  const scrollRef = useRef(null);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top in Bilaspur</Text>

      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        {images.map((img, index) => (
          <View key={index} style={styles.slide}>
            <Image source={img} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingVertical: 10,
  },
  heading: {
    fontSize: 21,
    marginBottom: 10,
    textAlign:'left',
    marginLeft:18
  },
  scrollView: {
    width: width,
  },
  contentContainer: {
    flexDirection: "row",
  },
  slide: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: 200,
    borderRadius: 10,
  },
});

export default SlideFile;
