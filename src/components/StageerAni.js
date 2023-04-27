import React, { Component } from "react";
import { StyleSheet, View, Animated, Text } from "react-native";

export default class StaggerAni extends Component {
  constructor() {
    super();
    this.animatedValues = [];
    for (let i = 0; i < 1000; i++) {
      this.animatedValues[i] = new Animated.Value(0);
    }
    this.animations = this.animatedValues.map((value) => {
      return Animated.timing(value, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      });
    });
  }

  componentDidMount() {
    this.animate();
  }

  animate = () => {
    Animated.stagger(15, this.animations).start();
  };

  render() {
    return (
      <View style={styles.container}>
        {this.animatedValues.map((value, index) => (
          <Animated.View key={index} style={[styles.box, { opacity: value }]} />
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    width: 15,
    height: 15,
    margin: 0.5,
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
