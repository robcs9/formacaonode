import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { ListItem, Avatar, Button, Header } from 'react-native-elements';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import FlashMessage, { showMessage } from 'react-native-flash-message';

export default function AlterarScreen({route, navigation}) {
    
    const [getNome, setNome] = useState();
    const [getCpf, setCpf] = useState();
    const [getTel, setTel] = useState();
    const [getId, setId] = useState();
    
    useEffect(() => {
        if(route.params) {
            const { nome } = route.params;
            const { cpf } = route.params;
            const { telefone } = route.params;
            const { id } = route.params;
            
            setNome(nome);
            setCpf(cpf);
            setTel(telefone);
            setId(id);
        }
    }, [])

    function alterarDados() {

        axios.put('http://professornilson.com/testeservico/clientes/'+getId,{
        nome: getNome,
        telefone: getTel,
        cpf: getCpf
        }).then(function (response) {
            showMessage({
                message: 'Registro alterado com sucesso',
                type: 'success'
            });
        }).catch(function (error) {
            console.log(error);
    });}
    
    function excluirDados() {
        axios.delete('http://professornilson.com/testeservico/clientes/'+getId)
        .then(function (response) {
            setNome(null);
            setCpf(null);
            setTel(null);
            setId(null);
            navigation.navigate('Listar');
            showMessage({
                message: "Registro excluído com sucesso!",
                type: 'danger'
            })
        }).catch(function (error) {
            console.log(error);

    });}

    return (
        <View style={{alignItems:'center'}}>
            <FlashMessage position="top"/>
            <Header
                centerComponent={{ text: 'Listar', style: { color: '#fff' } }}
                leftComponent={ <Button
                    title='<' bottomDivider
                    onPress={() => navigation.navigate('Listar')}
                />}
            />
            <Text>Digite seu nome</Text>
            <TextInput
                style={{ height:40, width:300, borderColor: 'gray', borderWidth:1 }}
                onChangeText={text => setNome(text)}
                value={getNome}
            />
            
            <Text>Digite seu Telefone</Text>
            <TextInput
                style={{ height:40, width:300, borderColor: 'gray', borderWidth:1 }}
                onChangeText={text => setTel(text)}
                value={getTel}
            />

            <Text>Digite seu CPF</Text>
            <TextInput
                style={{ height:40, width:300, borderColor: 'gray', borderWidth:1 }}
                onChangeText={text => setCpf(text)}
                value={getCpf}
            />
            <Button
                buttonStyle={{marginTop:20, width:300}}
                title='Alterar Dados'
                onPress={() => alterarDados()}
            />
            <Button
                buttonStyle={{marginTop:20, width:300}}
                title='Excluir'
                onPress={() => excluirDados()}
            />
        </View>
    );
}