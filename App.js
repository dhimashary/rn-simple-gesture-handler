import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
  Alert,
} from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import backgroundImg from "./assets/bg.png";
const characterImg = {
  url: "https://static.wikia.nocookie.net/tamagotchi/images/e/e5/Mametchi_standing.png/revision/latest?cb=20220714103055",
};
import { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [scale, setScale] = useState(1);
  const [savedScale, setSavedScale] = useState(1);

  const singleTap = Gesture.Tap()
    .maxDuration(250)
    .onStart(() => {
      Alert.alert("Single Tap");
    });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      Alert.alert("Double Tap", "Do you want to exit the game?", [
        {
          text: "Yes",
          onPress: () => console.log("exit"),
        },
        {
          text: "No",
          onPress: () => console.log("stay"),
          style: "cancel",
        },
      ]);
    });

  const pinch = Gesture.Pinch()
    .onUpdate(e => {
      setScale(savedScale * e.scale);
    })
    .onEnd((e) => {
      setSavedScale(scale);
      Alert.alert("Sakit tahuu");
    });

  const exlusiveGesture = Gesture.Exclusive(pinch, doubleTap, singleTap);

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ImageBackground source={backgroundImg} style={styles.background}>
          <GestureDetector gesture={doubleTap}>
            <Text style={styles.topText}>TamaGotchiApp {scale} {savedScale}</Text>
          </GestureDetector>
          <GestureDetector gesture={exlusiveGesture}>
            <Image source={characterImg} style={[styles.character, {
              transform: [
                {
                  scale
                }
              ]
            }]} />
          </GestureDetector>
        </ImageBackground>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: "#5C3526",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  character: {
    width: 400,
    height: 400,
    opacity: 1,
    resizeMode: "contain",
  },
  topText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: "20",
    color: "#42261c",
    margin: 10,
    position: "absolute",
    top: 0,
  },
});
