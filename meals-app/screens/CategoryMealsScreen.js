import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const catName = props.navigation.getParam("categoryName");

  // const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meals Screen !</Text>
      {/* <Text>{selectedCategory.title}</Text> */}
      <Text>{catName}</Text>
      <Button
        title="Go to Meal Details!"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      ></Button>
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.navigate("Categories");
          // props.navigation.goBack();
          // props.navigation.pop();
        }}
      ></Button>
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData);
  const catName = navigationData.navigation.getParam("categoryName");

  return {
    headerTitle: catName,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
