import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps166152Navigator from '../features/Maps166152/navigator';
import Settings166130Navigator from '../features/Settings166130/navigator';
import Settings166115Navigator from '../features/Settings166115/navigator';
import NotificationList166114Navigator from '../features/NotificationList166114/navigator';
import Maps166113Navigator from '../features/Maps166113/navigator';
import Settings166097Navigator from '../features/Settings166097/navigator';
import BlankScreen0166094Navigator from '../features/BlankScreen0166094/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps166152: { screen: Maps166152Navigator },
Settings166130: { screen: Settings166130Navigator },
Settings166115: { screen: Settings166115Navigator },
NotificationList166114: { screen: NotificationList166114Navigator },
Maps166113: { screen: Maps166113Navigator },
Settings166097: { screen: Settings166097Navigator },
BlankScreen0166094: { screen: BlankScreen0166094Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
