import React from "react";
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const products = [
  { id: "1", image: require("../assets/shoes.png"), name: "Sports Shoe" },
  { id: "2", image: require("../assets/shoes.png"), name: "Sports Shoe" },
  { id: "3", image: require("../assets/shoes.png"), name: "Sports Shoe" },
  { id: "4", image: require("../assets/shoes.png"), name: "Sports Shoe" },
  { id: "5", image: require("../assets/shoes.png"), name: "Sports Shoe" },
  { id: "6", image: require("../assets/shoes.png"), name: "Sports Shoe" },
];

const ScrollFile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>PRODUCTS</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.productName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 10,
    marginLeft: 14,
  },
  list: {
    alignItems: "center",
  },
  imageContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    alignItems: "center", 
  },
  image: {
    width: width / 2.2, 
    height: 200, 
    borderRadius: 10,
  },
  productName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

export default ScrollFile;
