import { NavigationActions } from 'react-navigation';


let _navigator;

export const setTopLevelNavigator = (navigatorRef) => {
    _navigator = navigatorRef;
};

export const navigate = (routeNames, params = {}, options = {}) => {
    const { reset } = options;
    const navigateAction = NavigationActions.navigate({
        routeName: routeNames[0],
        params: params,
    });

    let currentParentNavigationAction = navigateAction;
    for (let idx = 1; idx <= routeNames.length; idx++) {
        const nestedNavigationAction = NavigationActions.navigate({
            routeName: routeNames[idx],
            params: params,
        });
        currentParentNavigationAction.action = nestedNavigationAction;
        currentParentNavigationAction = nestedNavigationAction;
    }

    if (reset) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                navigateAction,
            ],
        });
        _navigator.dispatch(resetAction);
    } else {
        _navigator.dispatch(navigateAction);
    }
};

export default {
    navigate,
    setTopLevelNavigator,
};
