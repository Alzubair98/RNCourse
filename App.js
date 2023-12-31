import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          margin: 10,
          borderWidth: 3,
          borderColor: "#AED2FF",
          padding: 5,
          borderRadius: 10,
        }}
      >
        To Do List
      </Text>
      <Text style={styles.test}>Another piece of</Text>
      <Button title="click me mate" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1EFEF",
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    borderWidth: 3,
    padding: 5,
    borderRadius: 10,
    borderColor: "#AED2FF",
  },
});
