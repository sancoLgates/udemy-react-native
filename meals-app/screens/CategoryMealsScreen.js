import React from "react";
import { useSelector } from "react-redux";

// import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

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
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  // console.log(navigationData);
  const catName = navigationData.navigation.getParam("categoryName");

  return {
    headerTitle: catName,
  };
};

export default CategoryMealsScreen;
