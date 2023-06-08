import { StatusBar } from 'expo-status-bar';
import { StyleSheet,} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Map, Profile } from './screens/Map';
import { Users } from './screens/Users';
import { Home } from './screens/Home';
import { Settings } from './screens/Settings';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home-sharp",
  Users: "md-heart-sharp",
  Map: "map",
  Settings: "settings"
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarStyle: {
      backgroundColor: 'black',
    },
    style: {
      borderTop: 'none'
    },
  };
};

export default function App() {
  return (
    <NavigationContainer>
  
    <Tab.Navigator
      screenOptions={createScreenOptions}      
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Tab.Screen name="Users" component={Users} options={{ headerShown: false }}/>
      <Tab.Screen name="Map" component={Map} options={{ headerShown: false }}/>
      <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>

    </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
