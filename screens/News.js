import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import { Card } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default class News extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <Card imageStyle={{height: 300}} image={require('../src/img/medan.jpg')}>
                <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize: 16}}>
                    Serba-Serbi Tentang Kota Medan
                </Text>
                <Text style={{color: '#ff6600'}}>
                    13 April 2019, 18.30
                </Text>
                <Text style={{color: 'grey'}}>
                    Author: Admin
                </Text>
                </Card>

                <Card imageStyle={{height: 300}} image={require('../src/img/medan2.jpg')}>
                <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize: 16}}>
                    10 Alasan Enaknya Tinggal di Medan
                </Text>
                <Text style={{color: '#ff6600'}}>
                    12 April 2019, 13.25
                </Text>
                <Text style={{color: 'grey'}}>
                    Author: Admin
                </Text>
                </Card>

                <Card imageStyle={{height: 300}} image={require('../src/img/medan3.jpg')}>
                <Text style={{marginBottom: 10, fontWeight: 'bold', fontSize: 16}}>
                    Medan Dilanda Hujan Deras
                </Text>
                <Text style={{color: '#ff6600'}}>
                    12 April 2019, 08.13
                </Text>
                <Text style={{color: 'grey'}}>
                    Author: Admin
                </Text>
                </Card>
                <View style={{marginBottom:100}}>
                </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
    static navigationOptions = ({navigation})=>{
        return {
        title : 'News',
        headerStyle : {
            backgroundColor : '#000000'
        },
        headerTintColor : '#ff6600',
        headerRight : (
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=> navigation.push('Masuk')} style={{marginRight: 10}}>
                <Text style={{color: '#ff6600'}}>Masuk</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.push('Daftar')} style={{marginRight: 15}}>
                <Text style={{color: '#ff6600'}}>Daftar</Text>
            </TouchableOpacity> 
            </View>
            )
        }
    }
};