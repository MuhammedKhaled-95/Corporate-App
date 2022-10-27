/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

import * as React from 'react';
import { CustomColors } from '_styles';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const theme = {
    ...DefaultTheme, // or MD3DarkTheme
    roundness: 6,
    colors: {
      ...DefaultTheme.colors,
      primary: CustomColors.PRIMARY,
      secondary: CustomColors.SECONDARY,
      tertiary: CustomColors.GRAY_MEDIUM,
    },
  };
  
export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}


AppRegistry.registerComponent(appName, () => Main);
