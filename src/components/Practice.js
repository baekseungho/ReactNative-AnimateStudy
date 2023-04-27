import React, { Component, useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  View,
  Button,
  Image,
} from "react-native";

export default class Practice extends Component {
  boxMove = new Animated.Value(-200);
  aniScale = new Animated.Value(1);

  componentDidMount() {
    this.animate();
  }
  state = { end: true };
  animate = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.boxMove, {
          toValue: 350,
          duration: 2000,
          easing: Easing.linear,
        }),
        Animated.timing(this.boxMove, {
          toValue: -200,
          duration: 2000,
          easing: Easing.linear,
        }),
      ])
    ).start();
  };

  animate1 = () => {
    Animated.timing(this.aniScale, {
      toValue: 3,
      duration: 2000,
    }).start();
  };

  render() {
    const ratation = this.boxMove.interpolate({
      inputRange: [-200, 300],
      outputRange: [300, -200],
    });

    return (
      <>
        <View>
          <Button title="커져라" onPress={this.animate1}></Button>
        </View>
        <View>
          <Animated.View
            style={[
              styles.box,
              { marginLeft: ratation },
              { transform: [{ scale: this.aniScale }] },
            ]}
          ></Animated.View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "orange",
  },
  img: {
    width: 50,
    height: 50,
  },
});
