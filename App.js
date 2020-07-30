import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Login from "./src/Login/Login";
import HomeScreen from "./src/Home/HomeScreen";
import MyDrawerNavigator from "./src/Drawer/MyDrawerNavigator";
import Navigator from "./src/Drawer/Navigator";

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* <Login /> */}
        <HomeScreen />
        {/* <Navigator /> */}
        {/* <MyDrawerNavigator /> */}
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

// export default function App() {
//   const Stack = createStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
