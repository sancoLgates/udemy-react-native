import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../component/BodyText";
import TitleText from "../component/TitleText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          // fadeDuration={1000}
          // source={{
          //   uri:
          //     "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_1280.jpg",
          // }}
          source={require("../assets/images/success.png")}
          resizeMode="cover"
        />
      </View>
      <BodyText style={styles.resultText}>
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
        guess the number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
      {/* <Text numberOfLines={1} ellipsizeMode="tail">
        This text will never wrap into a new line, instead it will be cut off
        like this if it is too lon...
      </Text> */}
      {/* <BodyText>Number of Rounds: {props.roundsNumber}</BodyText> */}
      {/* <BodyText>Number was: {props.userNumber}</BodyText> */}
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "grey",
    overflow: "hidden",
    marginVertical: 30,
  },
  resultText: {
    textAlign: "center",
  },
  highlight: {
    color: "red",
    // fontWeight: "900",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
