import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

import Home from "../apps/tabs/home";
import Two from "../apps/tabs/two";

const BottomTab = createBottomTabNavigator();

const RootNavigator = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignContent: "flex-end" }}
    >
      <NavigationContainer>
        <BottomTab.Navigator screenOptions={{ headerShown: false }}>
          <BottomTab.Screen name="처음화면" component={Home} />
          <BottomTab.Screen name="마켓" component={Two} />
          <BottomTab.Screen name="떠상" component={Two} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </View>
  );
};
export default RootNavigator;
