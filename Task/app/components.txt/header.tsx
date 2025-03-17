import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Dimensions } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const { height } = Dimensions.get("window"); 

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.topRow}>
        <Text style={styles.logoText}>neargud</Text>

        <TouchableOpacity style={styles.locationButton}>
          <Ionicons name="location-outline" size={20} color="black" />
          <Text style={styles.locationText}>Location</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchRow}>
        <View style={styles.searchBar}>
          <TextInput placeholder="Search..." style={styles.searchInput} />
        </View>

        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="heart" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.imageRow}>
        <Image source={require("../assets/shopping.png")} style={styles.shoppingImage} />
        <Text style={styles.shoppingText}>Happy Shopping</Text>
        <Image source={require("../assets/shopping.png")} style={styles.shoppingImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: height * 0.3,
    backgroundColor: "red",
    padding: 15,
    justifyContent: "space-between",
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5,
  },
  locationText: {
    fontSize: 16,
    marginLeft: 5,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  searchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  iconButton: {
    marginLeft: 15,
  },
  imageRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  shoppingImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  shoppingText: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default Header;
