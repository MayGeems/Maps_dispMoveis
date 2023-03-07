import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Bage from "./Bage";
import Candiota from "./Candiota";
import Hulha from "./Hulha";

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

function BageScreen() {
  return <Bage></Bage>;
}

function CandiotaScreen() {
  return <Candiota></Candiota>;
}

function HulhaScreen(){
  return <Hulha></Hulha>;
}

function AceguaScreen(){
  return <Acegua></Acegua>;
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Image
                source={require("./assets/favicon.png")}
                style={{ width: 20, height: 20 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Aceguá"
          component={AceguaScreen}
          options={{
            tabBarIcon: () => <Icon name="compass-sharp" size={30} />,
          }}
        />
        <Tab.Screen
          name="Hulha Negra"
          component={HulhaScreen}
          options={{
            tabBarIcon: () => <Icon name="castle" size={30} />,
          }}
        />
        <Tab.Screen
          name="Candiota"
          component={CandiotaScreen}
          options={{
            tabBarIcon: () => <Icon name="industry" size={30} />,
          }}
        />
        <Tab.Screen
          name="Bagé"
          component={BageScreen}
          options={{
            tabBarIcon: () => <Icon name="hat-cowboy" size={30} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
