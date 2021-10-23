import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

// import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  // const catName = props.navigation.getParam("categoryName");

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  // const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.includes(catId)
    // meal.categoryIds.indexOf(catId) >= 0
  );
  // console.log("displayedMeals", displayedMeals);

  if (!displayedMeals.length) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters ?</DefaultText>
      </View>
    );
  }
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData);
  const catName = navigationData.navigation.getParam("categoryName");

  return {
    headerTitle: catName,
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
