import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CustomColors } from '../../styles/index';
import { CustomButton, CustomTextInput } from '../../components/atoms/index';
import { Divider } from 'react-native-paper';


export default function ResetPassword() {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={[CustomColors.GRADIENT_TOP_BLUE, CustomColors.GRADIENT_BOT_BLUE]} style={styles.box1}>
                <View style={{ flex: 1, top: '15%', width: '100%', alignItems: 'center' }}>
                    <View style={{ alignSelf: 'flex-end', marginBottom: '15%' }}>
                        <CustomButton name="عربي" mode="text" color="white" />
                    </View>
                    <Image source={require('../../Assets/Logo.png')} />
                </View>
            </LinearGradient>
            {BottomCard()}
        </View>
    );

}

const styles = StyleSheet.create({
    box1: {
        height: '50%',
    },
    box2: {
        height: '70%',
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: '30%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
});

function BottomCard() {
    return (<View style={styles.box2}>
        <View style={{ marginTop: '5%', alignItems: 'center' }}>
            <Text>Reset Password</Text>
            <Divider style={{ backgroundColor: CustomColors.GRAY, height: 2, width: '95%',marginVertical:'8%'}} />
            <Text>Kindly send the OTP displayed on your soft of{"\n"}hard token device.</Text> 
             <CustomTextInput maxLength={1} keyboardType={'numbers-and-punctuation'} activeOutlineColor={CustomColors.PRIMARY} style={{width:50}}/>
            <CustomButton uppercase={false} name="Check OTP generation protocol" mode="text" color="blue" />
            <CustomButton uppercase={false} name="Verify"  disabled={true} color="blue" />
        </View>
    </View>);
}
