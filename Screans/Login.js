import React, { useState } from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'


export default function login() {
    return (
        <View style={styles.Padre}>

            <View>
                <Image source={require('../assets/icon.png')} style={styles.icon} />
            </View>

            <View style={styles.formulario}>
                <View style={styles.Texto}>
                    <TextInput placeholder='Correo' style ={{paddingHorizontal:15}}/>
                </View>
                <View style={styles.Texto}>
                    <TextInput placeholder='Contraseña' secureTextEntry={true} style ={{paddingHorizontal:15}}/>
                </View>

                <View style={styles.botonLugar}>
                    <TouchableOpacity style={styles.boton}>
                        <Text style={styles.botonText} >Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    
    Padre:{
        Flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    icon: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
        alignSelf: 'center',
        marginTop: 50,
    },

    formulario: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        width: '90%',
        padding: 20,
        borderColor: '#000',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        justifyContent: 'center',
    },

    Texto: {
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#cccccc90',
        borderRadius: 20,
        marginBottom: 20,
        backgroundColor: '#cccccc20',

    },

    botonLugar: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    boton: {
        width: '150',
        height: '40',
        backgroundColor: '#525FE1',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        textAlign: 'center',
    },

    botonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
        padding: 10,
    }

})

