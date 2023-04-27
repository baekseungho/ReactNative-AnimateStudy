import React, { useState } from "react";
import { StyleSheet, View, Button, Image, Animated } from "react-native";

const Practice1 = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <View>
      <Button
        style={styles.btn}
        title={isShow ? "감추기" : "보이기"}
        onPress={() => setIsShow(!isShow)}
      ></Button>
      {isShow && (
        <>
          <Image
            style={styles.img}
            source={require("../../assets/1.png")}
          ></Image>
          <Image
            style={styles.img}
            source={require("../../assets/2.png")}
          ></Image>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "orange",
  },
  img: {
    width: 150,
    height: 150,
  },
  btn: {
    width: 80,
    backgroundColor: "pink",
  },
});

export default Practice1;
