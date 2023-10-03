import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import MultiComponent from "./src/screens/MultiComponentScreen";
import NavigateTo from "./src/screens/NavigateToScreen";
import PositionScreen from "./src/screens/PositionsScreen"
import FecthScreen from "./src/screens/FetchScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    MultiComponent: MultiComponent,
    Navigate: NavigateTo,
    Position: PositionScreen,
    FetchScreen: FecthScreen
  },
  {
    initialRouteName: "MultiComponent",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
