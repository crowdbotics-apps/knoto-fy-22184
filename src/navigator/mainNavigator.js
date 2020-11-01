import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList166114Navigator from '../features/NotificationList166114/navigator';
import Maps166113Navigator from '../features/Maps166113/navigator';
import Settings166097Navigator from '../features/Settings166097/navigator';
import BlankScreen0166094Navigator from '../features/BlankScreen0166094/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
