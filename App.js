import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  ImageBackground,
} from "react-native";

import backgroundImg from "./assets/bg.png";
const characterImg = {
  url: "https://static.wikia.nocookie.net/tamagotchi/images/e/e5/Mametchi_standing.png/revision/latest?cb=20220714103055",
};
import { useState } from 'react';

export default function App() {
  const [scale, setScale] = useState(1);
  const [savedScale, setSavedScale] = useState(1);

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <ImageBackground source={backgroundImg} style={styles.background}>
        <Text style={styles.topText}>TamaGotchiApp {scale} {savedScale}</Text>
        <Image source={characterImg} style={[styles.character, {
          transform: [
            {
              scale
            }
          ]
        }]} />
      </ImageBackground>
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
