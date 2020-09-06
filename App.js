import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

import Header from "./component/Screens/header";

import HomeScreen from "./component/Screens/Home-Screen";
import HistoryScreen from "./component/Screens/history-Screen";
import ContactScreen from "./component/Screens/Contact-Screen";
import AboutCommunitey from "./component/Screens/about-commuitey-screen";
import HelpScreen from "./component/Screens/help-screen";
import LoginScreen from "./component/autentacation/login";
import SignupScreen from "./component/autentacation/signup";
// erro solution of fount
import { Font } from "expo";

const Stack = createStackNavigator();
const drawer = createDrawerNavigator();

const DrawerRoutes = (props) => {
  return (
    <>
      <Header />
      <drawer.Navigator
        initialRouteName="Home"
        screenOptions={(props) => ({
          tabBarIcon: ({ Focused, color, size }) => {
            let iconName;
            if (props.route.name === "Home") {
              iconName = Focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (props.route.name === "About") {
              iconName = Focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (props.route.name === "Contact") {
              iconName = Focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <drawer.Screen
          name="Home"
          initialParams={{ name: "default" }}
          options={{ title: "Scaning " }}
          component={HomeScreen}
        />
        <drawer.Screen
          name="Contact"
          initialParams={{ name: "default" }}
          options={{ title: "Output of scanibg" }}
          component={ContactScreen}
        />
        <drawer.Screen
          name="About"
          initialParams={{ name: "default" }}
          options={{ title: "History " }}
          component={HistoryScreen}
        />
        <drawer.Screen
          name="communitey"
          initialParams={{ name: "default" }}
          options={{ title: "About communitey" }}
          component={AboutCommunitey}
        />

        <drawer.Screen
          name="help"
          initialParams={{ name: "default" }}
          options={{ title: "Help" }}
          component={HelpScreen}
        />
      </drawer.Navigator>
    </>
  );
};

function App(props) {
  const [isLoded, setLogded] = useState(true);

  const detectLogin = async () => {
    const token = await AsyncStorage.setItem("token");
    if (token) {
      setLogded(true);
    } else {
      setLogded(false);
    }
  };

  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      }))();
    detectLogin();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={DrawerRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

// font erro solutation
// add in package.json

// "rnpm": {
//   "assets": ["./path to your fonts"]
// },
