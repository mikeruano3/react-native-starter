import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import MultiComponent from "./src/screens/MultiComponentScreen";
import NavigateTo from "./src/screens/NavigateToScreen";
import PositionScreen from "./src/screens/PositionsScreen"
import FetchScreen from "./src/screens/FetchScreen";
import NoFetchScreen from "./src/screens/NoFetchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import TrackAppNav from "./src/navigators/TrackAppNav";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle: "Business Search" }}>
        {/*<Stack.Screen name="Home" component={HomeScreen} />*/}
        <Stack.Screen name="Home" component={MultiComponent} />
        <Stack.Screen name="MultiComponent" component={MultiComponent} />
        <Stack.Screen name="Navigate" component={NavigateTo} />
        <Stack.Screen name="Position" component={PositionScreen} />
        <Stack.Screen name="FetchScreen" component={FetchScreen} />
        <Stack.Screen name="NoFetchScreen" component={NoFetchScreen} />
        <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
        <Stack.Screen name="TrackApp" component={TrackAppNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     MultiComponent: MultiComponent,
//     Navigate: NavigateTo,
//     Position: PositionScreen,
//     FetchScreen: FecthScreen,
//     NoFetchScreen: NoFetchScreen,
//     ResultsShow: ResultsShowScreen
//   },
//   {
//     initialRouteName: "MultiComponent",
//     defaultNavigationOptions: {
//       title: "App",
//     },
//   }
// );

// export default createAppContainer(navigator);
