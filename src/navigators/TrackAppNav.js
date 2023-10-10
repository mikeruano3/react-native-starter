// import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import SigninScreen from '../screens/trackerApp/SigninScreen'
import SignupScreen from '../screens/trackerApp/SignupScreen'
import AccountScreen from '../screens/trackerApp/AccountScreen'
import TrackCreateScreen from '../screens/trackerApp/TrackCreateScreen'
import TrackDetailScreen from '../screens/trackerApp/TrackDetailScreen'
import TrackListScreen from '../screens/trackerApp/TrackListScreen'
import { Provider as AuthProvider } from '../context/AuthContext'
import { setNavigator } from "../navigationRef";

// login flow
const LoginFlow = createStackNavigator();
const LoginFlowStack = () => (
  <LoginFlow.Navigator
    initialRouteName="Signup"
    screenOptions={{
      animationEnabled: false,
      headerShown: false
    }}
  >
    <LoginFlow.Screen name="Signin" component={SigninScreen} />
    <LoginFlow.Screen name="Signup" component={SignupScreen} />
  </LoginFlow.Navigator>
)

const TrackListFlow = createStackNavigator();
const TrackListFlowStack = () => (
  <TrackListFlow.Navigator
    initialRouteName="TrackList"
    screenOptions={{
      animationEnabled: false,
      headerShown: false
    }}
  >
    <TrackListFlow.Screen name="TrackList" component={TrackListScreen} />
    <TrackListFlow.Screen name="TrackDetail" component={TrackDetailScreen} />
  </TrackListFlow.Navigator>
)

const MainFlow = createMaterialBottomTabNavigator();
const MainFlowStack = () => (
  <MainFlow.Navigator
    initialRouteName="TrackListFlow"
    screenOptions={{
      animationEnabled: false,
      headerShown: false
    }}
  >
    <MainFlow.Screen name="TrackListFlow" component={TrackListFlowStack} />
    <MainFlow.Screen name="TrackCreate" component={TrackCreateScreen} />
    <MainFlow.Screen name="Account" component={AccountScreen}/>
  </MainFlow.Navigator>
)


const RootStack = createStackNavigator();

export default function TrackAppNavigator() {
  return (
    <AuthProvider>
      <NavigationContainer independent
        ref={(nav) => { setNavigator(nav) }}
      >
        <RootStack.Navigator
          screenOptions={{ headerTitle: "Tracker APP", headerShown: false, animationEnabled: false }}
          initialRouteName="LoginFlow"
          >
          <RootStack.Screen name="LoginFlow" component={LoginFlowStack} />
          <RootStack.Screen name="MainFlow" component={MainFlowStack} />
        </RootStack.Navigator>
        </NavigationContainer>
      </AuthProvider>
  );
}
