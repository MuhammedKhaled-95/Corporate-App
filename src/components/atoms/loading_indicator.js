import React from 'react';
import { ActivityIndicator, withTheme } from 'react-native-paper';

const LoadingIndicator = (props) =>
    <ActivityIndicator size={props.size ? props.size : 'large'} color={props.color} style={{...props.style}}/>

export default withTheme(LoadingIndicator);