import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import Header from "./component/Screens/header";

import HomeScreen from "./component/Screens/Home-Screen";
import HistoryScreen from "./component/Screens/history-Screen";
import ContactScreen from "./component/Screens/Contact-Screen";
import AboutCommunitey from "./component/Screens/about-commuitey-screen";
import HelpScreen from "./component/Screens/help-screen";
import LoginScreen from "./component/autentacation/login";
import SignupScreen from "./component/autentacation/signup";

// const drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      {/* // <Header style={{}} /> */}
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="signup" component={SignupScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
      {/* <drawer.Navigator
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
      </drawer.Navigator>  */}
    </NavigationContainer>
  );
}
export default App;
