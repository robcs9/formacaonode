import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Avatar } from 'react-native-elements';

// fields: email, senha, salvar (button)
export default function CadastroScreen({ navigation }) {
    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 1 }}>

            </View>
            
            <View style={{ flex: 1 }}>
                <Input
                    placeholder='Email'
                />
                <Input
                    placeholder='Senha'
                />
            </View>

            <View style={{ flex: 3 }}>
                <Button
                    title="Salvar"
                    type="solid"
                />
                
                <Button style={{ marginTop: 15 }}
                    title="Home"
                    type='outline'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    }
});