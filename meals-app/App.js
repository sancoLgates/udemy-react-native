import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log("err", err)}
      />
    );
  }

  return <MealsNavigator />;
}

// const styles = StyleSheet.create({
//   text: {
//     fontFamily: "open-sans-bold",
//     // fontSize: 20,
//   },
// });
