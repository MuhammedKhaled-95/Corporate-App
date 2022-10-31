// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import StackContainer from './navigations/stack';


// const DetailsScreen = ({ navigation }) =>
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <Text>Details Screen</Text>
//     <Button
//       title="Go to Details... again"
//       onPress={() => navigation.push('Details')}
//     />
//     <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     <Button title="Go back" onPress={() => navigation.goBack()} />
//     <Button
//       title="Go back to first screen in stack"
//       onPress={() => navigation.popToTop()}
//     />
//   </View>


// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }


// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile!</Text>
//     </View>
//   )
// }
// const Tab = createBottomTabNavigator();

// function Home() {
//   return (
//     // <Tab.Navigator  screenOptions={{headerShown:false}}>
//     <Tab.Navigator>
//       <Tab.Screen name="Feed" component={Feed} />
//       <Tab.Screen name="Messages" component={Messages} />
//     </Tab.Navigator>
//   );
// }

// function Feed({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Feed</Text>
//       <Button variant="contained">Hello World</Button>;
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   )
// }

// function Messages({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Messages!</Text>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Profile')}
//       />
//     </View>
//   )
// }

// const screensObjectArray =
//   [
//     {
//       "name": "Home",
//       "component": Home,
//       "options": { headerShown: false }
//     },
//     {
//       "name": "Settings",
//       "component": SettingsScreen
//     },
//     {
//       "name": "Details",
//       "component": DetailsScreen
//     },
//     {
//       "name": "Profile",
//       "component": Profile
//     },
//   ];

// screenOptions = {
//   tabBarActiveTintColor: 'black',
//   tabBarIndicatorStyle: {
//     backgroundColor: 'gray',
//     height: 2
//   },
//   tabBarStyle: {
//     backgroundColor: 'white',
//   },
// }


// const Stack = createNativeStackNavigator();


// function App() {
//   return <NavigationContainer>
//     <StackContainer screensObject={screensObjectArray} initialRouteName={screensObjectArray[0].name} />
//   </NavigationContainer>
// }

// //  <View>
// //   <Text>Hello</Text>
// // </View> 
// // <NavigationContainer>
// //       <Tab.Navigator>
// //   <Tab.Screen name="Feed" component={Feed} />
// //   <Tab.Screen name="Messages" component={Messages} />
// // </Tab.Navigator>
// //   {/* <StackContainer screensObject={screensObjectArray} initialRouteName={screensObjectArray[0].name}/> */}
// // </NavigationContainer>

// export default App;


import * as React from "react";
import { Button, Card, Title, Paragraph, TextInput, useTheme, Avatar, IconButton } from 'react-native-paper';
import CustomTextInput from "./components/atoms/text_input";
import CustomButton from "./components/atoms/button";
import CustomCard from "./components/atoms/card";
import LoadingIndicator from "./components/atoms/loading_indicator";
import { CustomColors, Shadows } from '_styles';
import { Text, View } from 'react-native' 
import ResetPassword from "./scenes/login/ResetPassword.js";


const App = () => {
  const theme = useTheme();
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <View 
    // style={{
    //   height: 150,
    //   width: '90%',
    //   backgroundColor: 'white',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   ...Shadows.dropShadow,
    //   ...Shadows.insetShadow,
    // }}
    //   >
    //     <Text>This view has an inset shadow!</Text>
    //   </View>
    //   <CustomButton disabled={false} onPress={()=> console.log("zby")}/>
    // </View>
    <ResetPassword/>
      //  <CustomCard style={{width: '95%', alignSelf: 'center'}}/>
  )
}

export default App;