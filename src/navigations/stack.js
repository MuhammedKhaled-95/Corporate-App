import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackContainer = ({ initialRouteName, screensObject, options }) => {
    return (
        <Stack.Navigator initialRouteName={initialRouteName}>
            {
                screensObject.map(screen => {
                    return <Stack.Screen key={screen.name} name={screen.name} component={screen.component} options={screen.options}/>
                })
            }
        </Stack.Navigator>
    );
}

export default StackContainer;
