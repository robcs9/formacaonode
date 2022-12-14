import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { color } from 'react-native-elements/dist/helpers';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20 }}>Bem vindo ao meu humilde App!</Text>
      <Button style={{ marginTop: 40, width: 100,  }}
        title="Logar"
        onPress={() => navigation.navigate('Login')}
      />
      <Button style={{ marginTop: 15, width:100 }}
        title="Cadastrar"
        type="solid"
        buttonStyle={{backgroundColor:'red'}}
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
}