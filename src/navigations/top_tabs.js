import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopTabsContainer = ({ initialRouteName, screensObject, screenOptions }) => {
    return (
        <Tab.Navigator screenOptions={!screenOptions ? {
            tabBarActiveTintColor:'#1858a8',
            tabBarIndicatorStyle: {
              backgroundColor: '#1858a8',
              height: 2
            },
            tabBarStyle: {
              backgroundColor: 'white',
            },
            // tabBarLabelStyle: {color: 'black'},
          } : screenOptions} initialRouteName={initialRouteName}>
            {
                screensObject.map(screen => {
                    return <Tab.Screen key={screen.name} name={screen.name} component={screen.component} />
                })
            }
        </Tab.Navigator>
    );
}

export default TopTabsContainer;