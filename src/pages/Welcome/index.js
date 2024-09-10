import React from 'react';
import { View,
         Text,
         StyleSheet,
         Image,
         TouchableOpacity,} from 'react-native';

import * as Animatable from 'react-native-animatable'

import {useNavigation} from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

        <View style={styles.containerLogo}>
            <Animatable.Image
                animation="flipInY"
                source={require('../../assets/logo.png')}
                style={{ width: '27%' }}
                resizeMode="contain"
             />
            </View>

            <Animatable.View delay={1000} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Saúde Integral</Text>
                
                <TouchableOpacity
                 style={styles.button}
                 onPress={ () => navigation.navigate('Signin')}>

                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </Animatable.View>
            </View>           
            
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#0094DB'
    },
    containerLogo:{
        flex:15,
        backgroundColor: '#0094DB',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    containerForm: {
        flex:5,
        backgroundColor: '#0094DB',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingStart: '5%',
        paddingEnd: '5%',
        
    },
    
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: -190,
        marginBottom: 125,
        marginLeft: 107,
        color: '#FFFFFF'
    },

    text:{
        color: '#FFF'
    },
    
    button:{
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 15,
        paddingVertical: 10,
        width: '60%',
        alignSelf: 'center',
        bottom: '150%',
        alignItems: 'center',
        justifyContent: 'center'
         
    },

    buttonText: {
        fontSize: 22,
        color: '#0094DB',
        fontWeight: 'bold',
        
    }
})