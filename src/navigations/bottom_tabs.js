import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabsContainer = ({ initialRouteName, screensObject, screenOptions }) => {
    return (
        <Tab.Navigator
            screenOptions={screenOptions}
            initialRouteName={initialRouteName}>
            {
                screensObject.map(screen => {
                    return <Tab.Screen key={screen.name} name={screen.name} component={screen.component} />
                })
            }
        </Tab.Navigator>
    );
}

export default BottomTabsContainer;