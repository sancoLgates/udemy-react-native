import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import BodyText from "../component/BodyText";
import TitleText from "../component/TitleText";
import MainButton from "../component/MainButton";

const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
        <MainButton onPress={props.onRestart}>New Game</MainButton>
        {/* <Button title="New Game" onPress={props.onRestart} /> */}
      </View>
    </ScrollView>
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
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "grey",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 20,
  },
  resultText: {
    textAlign: "center",
    paddingBottom: 20,
    fontSize: Dimensions.get("window").height < 400 ? 16 : 14,
  },
  highlight: {
    color: "red",
    // fontWeight: "900",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
