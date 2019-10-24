
import { NavigationAction } from "react-navigation";
import { navigationDispatchService } from '../navigator/AppNavigator';


export function navigateToScreen(route, data){
    const navigationAction = NavigationAction.navigate({
        routeName: route,
        params: data
    });
    navigationDispatchService(navigationAction)
}