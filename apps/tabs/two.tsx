import { View, Text, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

const Two = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar style="auto" />
      <Text>Hello Screen Two</Text>
    </View>
  );
};

export default Two;
