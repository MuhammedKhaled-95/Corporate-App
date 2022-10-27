import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, withTheme } from "react-native-paper";


const CustomButton = (props) =>
    <Button
        mode={props.mode ? props.mode : 'contained'}
        color={props.color}
        icon={props.icon}
        style={{...styles.button, ...props.style}}
        onPress={props.onPress}
        disabled={props.disabled}
    >
        {props.name}
    </Button>

const styles = StyleSheet.create({
    button: {
        width: '70%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        overflow: 'hidden',
    },
  });


export default withTheme(CustomButton);
