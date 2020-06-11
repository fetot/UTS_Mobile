import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    container : {
        padding: 10,
        textAlign:'center',
        margin:10,
        backgroundColor:'#fff',
        padding:25
    },
    input : {
        height: 40,
        borderBottomWidth : 1,
        borderColor:'#ff6600',
        color:'#444',
        marginBottom:10
    },
    button: {
        alignItems: "center",
        backgroundColor: "skyblue",
        padding: 15,
        marginTop:5
    }
})

export default class Daftar extends Component {
    static navigationOptions = ({navigation})=>{
        return {
            headerTitle : 'Daftar',
            headerLeftContainerStyle : {
                padding : 3
            },
            headerStyle : {
                backgroundColor : '#000000'
            },
            headerTintColor : '#ff6600'
            }
        }

        constructor(props){
            super(props)
    
            this.state = {
                email : '',
                password : ''
            }
        }

        render() {
            return (
            <ImageBackground style={{width: '100%', height: '100%'}} source={require('../src/img/bg.jpeg')}>
                <View style={styles.container}>
                    <Text style={{fontSize:16, color:'grey', textAlign:'center', padding:10}}>Daftar Akun</Text>
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        placeholder="Nama Lengkap"
                        placeholderTextColor="rgba(0,0,0,0.3)"
                        autoCapitalize="words"
                    />
                    
                    <TextInput
                        style={styles.input}
                        returnKeyType="next"
                        placeholder="Email"
                        placeholderTextColor="rgba(0,0,0,0.3)"
                        onSubmitEditing={()=> this.inputPassword.focus()}
                        keyboardType="email-address"
                        onChangeText={(value)=> this.setState({email : value})}
                        autoCapitalize="none"
                    />

                    <TextInput
                        style={styles.input}
                        returnKeyType="go"
                        placeholder="Password"
                        placeholderTextColor="rgba(0,0,0,0.3)"
                        ref={(input)=> this.inputPassword = input }
                        secureTextEntry
                        onChangeText={(value)=> this.setState({password : value})}
                        autoCapitalize="none"
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={{fontWeight:'bold',color:'#fff'}}>Daftar</Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        );
   }
};