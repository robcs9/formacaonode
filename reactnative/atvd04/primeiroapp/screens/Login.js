import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Avatar } from 'react-native-elements';


export default function LoginScreen({ navigation, route }) {
    
    /*
    const [quantidade, setQuantidade] = useState(0);
    const [nome, setNome] = useState(0);
    
    useEffect(() => {
        if(route.params) {
            const { quantidade } = route.params;
            const { nome } = route.params;
            
            setQuantidade(quantidade);
            setNome(nome);
        }
    }, [])
    */

    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 1, alignItems: 'center', paddingTop: 40 }}>
                <Avatar
                    size='xlarge'
                    rounded
                    source={{
                        uri: 'https://nagriksevakendra.in/default/login/avatar.png',
                    }}
                />
            </View>

            <View style={{ flex: 1 }}>
                <Input
                    placeholder='Login'
                />
                <Input
                    placeholder='Senha'
                />
            </View>

            <View style={{ flex: 3, alignItems: 'center'}}>
                <Button buttonStyle={{width: 300}}
                    title="Entrar"
                    type="solid"
                    onPress={() => navigation.navigate('Listar')}
                />
                <Button
                    buttonStyle={{backgroundColor: 'red', width: 300, marginTop: 15, borderColor: 'red'}}
                    title="Cadastre-se"
                    type="outline"
                    onPress={() => navigation.navigate('Cadastrar')}
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