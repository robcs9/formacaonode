import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { ListItem, Avatar, Button, Header } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

export default function ListarScreen({route, navigation}) {
    
    const [list, setList] = useState([]);
    const refresh = useIsFocused();
    useEffect(() => {
        function consultarDados() {
            axios.get("http://professornilson.com/testeservico/clientes")
                .then(function (response) {
                    setList(response.data);
                }).catch(function (error) {
                    console.log(error);
                });
        }
        consultarDados();
    }, [refresh]);
    
    return (
        <View>
            <Header
                centerComponent={{ text: 'Listar', style: { color: '#fff' } }}
                rightComponent={ <Button
                    title='+'bottomDivider
                    onPress={() => navigation.navigate('Inserir')}
                />}
            />
            <ScrollView>
            {
                list.map((l, i) => (
                    <ListItem key={i} bottomDivider onPress={() => navigation.navigate('Alterar',{
                        nome:l.nome,
                        telefone: l.telefone,
                        cpf: l.cpf,
                        id: l.id
                    })}>
                        <Avatar source={{ uri: "https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png" }} />
                        <ListItem.Content>
                            <ListItem.Title>{l.nome}</ListItem.Title>
                            <ListItem.Subtitle>{l.email}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
            </ScrollView>
        </View>
    );
}