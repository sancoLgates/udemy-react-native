import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

const Header = (props) => {
  return (
    <View
      style={{
        ...styles.header,
        ...Platform.select({
          ios: styles.headerIos,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={styles.headerTitle}>
        {props.title}
        {/* {props.sanztitle} */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: Platform.OS === "android" ? "#f7287b" : "white",
    // borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    // borderBottomWidth: Platform.IS === "ios" ? 1 : 0,
  },
  headerIos: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: "#f7287b",
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
  },
  headerTitle: {
    color: Platform.IOS === "ios" ? "black" : "#f7287b",
    fontSize: 18,
    fontFamily: "open-sans-bold",
  },
});

export default Header;
