import React, {useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { ListItem, Avatar, Button, Header, Card, Icon } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

export default function ListarScreen({route, navigation}) {
    
    const refresh = useIsFocused();
    /*const [list, setList] = useState([]);
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
    */
   
    return (
        <View>
            <Header
                centerComponent={{ text: 'Lista de Produtos', style: { color: '#fff' } }}
                rightComponent={ <Button
                    title='+'bottomDivider
                    onPress={() => navigation.navigate('InserirProduto')}
                />}
            />
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('Alterar')}>
                    <Card>
                        <Card.Title>Poco x3 PRO</Card.Title>
                        <Card.Divider />
                        <Card.Image source={require('../images/pic2.jpg')}/>
                        <Text style={{ marginBottom: 10 }}>
                            {`\nNome: Poco x3 PRO MSG-7654
                            \nCapacidade: 256 GB
                            \nPreço: R$ 1.500,00`}
                        </Text>
                    </Card>
                </TouchableOpacity>
            </ScrollView>
        </View>
        /*<View>
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
        </View>*/
    );
}