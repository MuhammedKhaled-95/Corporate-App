import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, withTheme } from "react-native-paper";

const CustomTextInput = (props) =>
    <TextInput
        maxLength={props.maxLength}
        keyboardType={props.keyboardType}
        style={{ ...styles.textInput, ...props.style }}
        mode={props.mode ? props.mode : 'outlined'}
        label={props.label}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        disabled={props.disabled}
        error={props.error}
        outlineColor={props.outlineColor}
        activeOutlineColor={props.activeOutlineColor ? props.activeOutlineColor : '#1858a8'} />

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
});

export default withTheme(CustomTextInput);