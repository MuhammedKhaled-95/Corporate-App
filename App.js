// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import { CustomButton, LoadingIndicator, CustomCard } from '_atoms';
// import { CustomColors, Mixins } from '_styles';
// import {ReactNavigator} from '_navigations'; /// Change
// import type { Node } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   Button,
//   useColorScheme,
//   Alert,
//   View
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//  * LTI update could not be added via codemod */

// const Section = ({ children, title }): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <ReactNavigator>
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//             alignItems: 'center'
//           }}>
//             <CustomCard style={{...{width:'90%', backgroundColor:CustomColors.BLACK}, ...Mixins.padding(10)}}>
//               <CustomButton 
//                 name='Test App'
//                 onPress={() => Alert.alert('button pressed')}
//                 buttonStyle = {{width: '80%', backgroundColor: CustomColors.SECONDARY}}
//                 textStyle = {{color: CustomColors.BLACK}}
//               />
//               <LoadingIndicator style={Mixins.padding(10,10,0,10)} color={CustomColors.SECONDARY}/>
//             </CustomCard>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//     </ReactNavigator>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackContainer from '_navigations';


const DetailsScreen = ({ navigation }) =>
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button
      title="Go to Details... again"
      onPress={() => navigation.push('Details')}
    />
    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    <Button title="Go back" onPress={() => navigation.goBack()} />
    <Button
      title="Go back to first screen in stack"
      onPress={() => navigation.popToTop()}
    />
  </View>


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  )
}

const screensObjectArray =
  [
    {
      "name": "Home",
      "component": HomeScreen,
      "options": {headerShown: false}
    },
    {
      "name": "Settings",
      "component": SettingsScreen
    },
    {
      "name": "Details",
      "component": DetailsScreen
    },
    {
      "name": "Profile",
      "component": Profile
    },
  ];

screenOptions = {
  tabBarActiveTintColor: 'black',
  tabBarIndicatorStyle: {
    backgroundColor: 'gray',
    height: 2
  },
  tabBarStyle: {
    backgroundColor: 'white',
  },
}

export default App = () =>
    <NavigationContainer>
      <StackContainer screensObject={screensObjectArray} initialRouteName={screensObjectArray[0].name}/>
    </NavigationContainer>

// export default App;
