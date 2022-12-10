import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
  
const Flex = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, alignItems: 'center', paddingTop: 40}}>
        <Avatar
          size='xlarge'
          rounded
          source={{
            uri:
              'https://nagriksevakendra.in/default/login/avatar.png',
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
      
      <View style={{ flex: 3 }}>
        <Button 
          title="Entrar"
          type="outline"
        />
        <Button style={{marginTop: 15}}
          title="Cadastre-se"
          type="outline"
        />
      </View>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});
 export default Flex;