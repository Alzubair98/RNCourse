import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          margin: 16,
          borderWidth: 3,
          borderColor: "#AED2FF",
          padding: 3,
          borderRadius: 10,
        }}
      >
        To Do List
      </Text>
      <Text>Another piece of</Text>
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
});
