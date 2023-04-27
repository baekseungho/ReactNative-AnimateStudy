import React from "react";
import { StyleSheet, View } from "react-native";
import MyAnimation from "./components/MyAnimation";
import InputAni from "./components/InputAni";
import Loading from "./components/Loading";
import ParallelAni from "./components/ParallelAni";
import SequenceAni from "./components/SequenceAni";
import Practice from "./components/Practice";
import Practice1 from "./components/Practice1";
import StaggerAni from "./components/StageerAni";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <MyAnimation /> */}
      {/* <InputAni /> */}
      {/* <Loading /> */}
      {/* <ParallelAni /> */}
      {/* <SequenceAni /> */}
      {/* <Practice /> */}
      {/* <Practice1 /> */}
      <StaggerAni />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
