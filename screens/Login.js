import { React, useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Avatar, Text } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import FlashMessage, {showMessage} from "react-native-flash-message";
import axios from "axios";

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
/*
  useEffect(() => {
    function loginUsuario() {
        axios.get(`http://10.0.1.123:5000/usuarios/${email}/${senha}`)
            .then(function (response) {
                setlist(response.data);
            }).catch(function (error) {
                console.log(error);
            });
    }
    consultarDados();
}, [refresh])
*/
  function loginUsuario(email, senha) {
    axios.get(`http://10.0.1.123:5000/usuarios/${email}/${senha}`).
      then(function (response) {
        console.log(response.data.length);
        if (response.data.length == 0) {
          console.log(typeof response.data);
          showMessage({
            message: "Login ou Senha inválidos!!!",
            type: "danger",
          });
          return 0;
        }
        navigation.navigate('Listar');
      }).catch(function (error) {
        console.log(error);
        showMessage({
          message: "Erro de conexão com o banco de dados!!!",
          type: "danger",
        });
      });
  }

  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <FlashMessage position="center" />
      <View style={{ flex: 2, alignItems: 'center', paddingTop: 50 }} >
        <Avatar size="xlarge" rounded
          source={{
            uri: "https://ifmr-sa.org/wp-content/uploads/2022/10/Ze-gotinha.png"
          }} />
        <Text h4>Vacinação Digital</Text>
      </View>
      <View style={{ flex: 3 }} >
        <Text h4>Login</Text>
        <Input placeholder='' value={email} onChangeText={setEmail} />
        <Text h4>Senha</Text>
        <Input placeholder='' secureTextEntry={true} value={senha} onChangeText={setSenha} />
        <Text> </Text>
        <Button onPress={() => loginUsuario(email, senha)}
          title="Login" type="solid" />
        <Text> </Text>
        <Button onPress={() => navigation.navigate('Cadastro')}
          title="Cadastre-se" type="solid" buttonStyle={{ backgroundColor: 'red' }} />
      </View>
    </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    padding: 20,
  },
});
