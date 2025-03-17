import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Header from "./header";
import SlideFile from "./slideFile";
import CategoriesFile from "./categories";
import ScrollFile from "./scrollfile";

export default function MainPage() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Header />
        <SlideFile />
        <CategoriesFile />
        <ScrollFile />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1,  // ✅ Ensures scroll works even if content is smaller than the screen
  },
});
