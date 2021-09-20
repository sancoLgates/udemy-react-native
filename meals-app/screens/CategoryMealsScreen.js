import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const catName = props.navigation.getParam("categoryName");

  // const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );
  // console.log("displayedMeals", displayedMeals);
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData);
  const catName = navigationData.navigation.getParam("categoryName");

  return {
    headerTitle: catName,
  };
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
