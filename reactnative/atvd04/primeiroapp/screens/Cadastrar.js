import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Avatar, Header } from 'react-native-elements';

export default function CadastrarScreen({ navigation }) {
    return (
        
        <View>
            <Header
                centerComponent={{ text: 'Cadastro de Usuário', style: { color: '#fff' } }}
                leftComponent={ <Button
                    title='<'bottomDivider
                    onPress={() => navigation.navigate('Login')}
                />}
            />
            
            <View style={{marginVertical: 10}}>
                <Input
                    placeholder='Nome'
                />
                <Input
                    placeholder='Email'
                />
                <Input
                    placeholder='Senha'
                />
            </View>

            <View>
                <Button buttonStyle={{width: 300, alignSelf: 'center'}}
                    title="Salvar"
                    type="solid"
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