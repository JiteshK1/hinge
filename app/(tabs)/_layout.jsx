import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
const TabLayout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: "#FFA001",
      tabBarInactiveTintColor: "#CDCDE0",
      tabBarShowLabel: false,
    }}
  >
  
      <Tabs.Screen
        name="home"
        options={{
          tabBarStyle: { backgroundColor: "#101010" },
          tabBarLabelStyle: { color: "#008E97" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
                <MaterialCommunityIcons name="alpha" size={30} color="white" />
              ) : (
                <MaterialCommunityIcons
                  name="alpha"
                  size={30}
                  color="#989898"

                />
            ),
        }}
      />
       <Tabs.Screen
        name="like"
        options={{
          tabBarStyle: { backgroundColor: "#101010" },
          tabBarLabelStyle: { color: "#008E97" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
                <Entypo name="heart" size={30} color="white" />
            ) : (
              <Entypo name="heart" size={30} color="#989898" />
            ),
        }}
      />
       <Tabs.Screen
        name="chat"
        options={{
          tabBarStyle: { backgroundColor: "#101010" },
          tabBarLabelStyle: { color: "#008E97" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
                <MaterialIcons
                name="chat-bubble-outline"
                size={30}
                color="white"
              />
            ) : (
              <MaterialIcons
                name="chat-bubble-outline"
                size={30}
                color="#989898"
              />
            ),
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          tabBarStyle: { backgroundColor: "#101010" },
          tabBarLabelStyle: { color: "#008E97" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
                <Ionicons
                name="person-circle-outline"
                size={30}
                color="white"
              />
            ) : (
              <Ionicons
                name="person-circle-outline"
                size={30}
                color="#989898"
              />
            ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
