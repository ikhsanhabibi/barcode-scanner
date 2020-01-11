import One from "./One";
import Two from "./Two";
import BarcodeScanner from "./BarcodeScanner";
import ReadBarcode from "./ReadBarcode";
import Forms from "./Forms";
import Details from "./Details";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";

const Navigation = createBottomTabNavigator({
    Add: BarcodeScanner,
    One: One,
    Two: Two,
    Forms: Forms,
    Read: ReadBarcode
});

const ScreenNavigator = createStackNavigator({
    Add: Forms
});

export default createAppContainer(Navigation);
