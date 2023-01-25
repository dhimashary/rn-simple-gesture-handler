import {
  StyleSheet,
  SafeAreaView,
  View
} from "react-native";
import BaseCard from './components/BaseCard';

export default function App() {
  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <View style={styles.content}>
        <BaseCard />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 16,
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
