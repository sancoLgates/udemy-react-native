import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoriesScreen = (props) => {
  // console.log(props);
  return (
    <View style={styles.screen}>
      <Text>The Categories Screen !</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
          // props.navigation.push("CategoryMeals");
          // props.navigation.replace("CategoryMeals"); // replace screen, no back on top
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
