import { View, Text, StyleSheet } from "react-native";

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Login Screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
