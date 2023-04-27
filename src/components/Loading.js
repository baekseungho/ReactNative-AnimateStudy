import React, { Component } from "react";
import { StyleSheet, View, Animated, Button, Text, Easing } from "react-native";

export default class Loading extends Component {
  //초기상태 loading 아이콘이 필요한 상황인가?
  state = {
    loading: true,
  };
  //2000(2초) 후에 loading state를 변경하도록 settimeout 사용
  componentDidMount() {
    this.animate();
    setTimeout(() => this.setState({ loading: false }), 4000);
  }

  //Animated에 사용할 변수의 초기값 0으로 지정
  aniRotation = new Animated.Value(0);

  animate = () => {
    Animated.loop(
      Animated.timing(this.aniRotation, {
        toValue: 1,
        duration: 3800,
        easing: Easing.linear, // 애니메이션속도 조절 , Easing.linear: 동일한속도로 움직임
      })
    ).start();
  };
  render() {
    const ratation = this.aniRotation.interpolate({
      inputRange: [0, 1], //애니메이션 시작 0 끝 1
      outputRange: ["0deg", "360deg"],
    });
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        {loading ? (
          <Animated.Image
            source={require("../../assets/35633-200.png")}
            style={{ width: 40, height: 40, transform: [{ rotate: ratation }] }}
          />
        ) : (
          <Text> 로딩 끝</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 50,
  },
});
