import React from "react";
import { View, Text, Image, StyleSheet, FlatList, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const categories = [
  { name: "Beauty", image: require("../assets/beauy.jpg") },
  { name: "Cosmetics", image: require("../assets/cosmetics.png") },
  { name: "Electronics", image: require("../assets/electronics.png") },
  { name: "Everyday", image: require("../assets/everyday.png") },
  { name: "Food", image: require("../assets/Food.png") },
  { name: "Men's Wear", image: require("../assets/mens.png") },
  { name: "Mobiles", image: require("../assets/mobiles.png") },
  { name: "Women's Wear", image: require("../assets/womensware.png") },
];

const CategoriesFile = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.heading}>Top pics in Bilaspur</Text>
      <FlatList
  data={categories}
  numColumns={4}
  keyExtractor={(item, index) => index.toString()}
  scrollEnabled={false} 
  renderItem={({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  )}
  contentContainerStyle={styles.flatListContainer}
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingVertical: 10,
  },
  
    heading:{
        marginLeft:10

    },
  
  flatListContainer: {
    alignItems: "center",
  },
  item: {
    width: width / 4.5, 
    alignItems: "center",
    marginVertical: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CategoriesFile;
