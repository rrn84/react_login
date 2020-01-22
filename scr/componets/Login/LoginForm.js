import React, {Component} from 'react';
import  {StyleSheet, View, TextInput, TouchableOpacity, Text, KeyboardAvoidingView} from 'react-native';

export default class LoginForm extends Component{
    render (){
        return(            
            <KeyboardAvoidingView behavior="padding" style ={styles.container}>
                <TextInput
                placeholder='usuario o correo'
                placeholderTextColor='rgba(255,255,255,0.5)'
                returnKeyType="Siguiente"    
                style={styles.input}
                />
                <TextInput
                 placeholder='contraseña'
                 placeholderTextColor='rgba(255,255,255,0.5)'
                 returnKeyType="Entrar"   
                 secureTextEntry
                 style={styles.input}
                 ref={(input)=> this.passwordInput =input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>
                        INICIO SESIÓN
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding:20
    },

    input:{
        height:40,
        backgroundColor:'rgba(255,255,255,0.2)',
        marginBottom:20,
        color: '#FFF',
        paddingHorizontal:10

    },

    buttonContainer:{
        backgroundColor:'#2980b9',
        paddingVertical:15

    },

    buttonText:{
        textAlign:'center',
        color:'#FFFFFF',
        fontWeight: '700'

    }
});