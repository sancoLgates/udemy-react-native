import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  const catId = props.navigation.getParam("categoryId");
  const catName = props.navigation.getParam("categoryName");

  // const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );
  // console.log("displayedMeals", displayedMeals);
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />

      {/* <Text>The Category Meals Screen !</Text>
      <Text>{selectedCategory.title}</Text>
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
      ></Button> */}
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData);
  const catName = navigationData.navigation.getParam("categoryName");

  return {
    headerTitle: catName,
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
