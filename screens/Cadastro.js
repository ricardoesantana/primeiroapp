import { React, useEffect, useState } from "react";
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { Button, Header, Avatar, ListItem } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import FlashMessage, {showMessage} from "react-native-flash-message";

export default function CadastroScreen({ navigation, route }) {

  const [getEmail, setEmail] = useState();
  const [getSenha, setSenha] = useState();

  async function inserirDados() {
      await axios.post('http://10.0.1.123:5000/usuarios', {
              email: getEmail,
              senha: getSenha
          }).then(function (response) {
              //console.log(response);
              showMessage({
                  message: "Usuário Cadastrado com Sucesso",
                  type: "info",
              });
          }).catch(function (error) {
              console.log(error);
              showMessage({
                  message: "Falha ao Cadastradar Usuário!!!",
                  type: "danger",
              });
          });
  }

  return (
      <View style={{ alignItems: "center" }}>
          <FlashMessage position="center" />
          <Header
              centerComponent={{ text: 'Usuário', style: { color: '#fff' } }}
              leftComponent={<Button
                  title="<"
                  onPress={() => navigation.navigate('Login')}
              />}
          />
          <Text style={{ paddingTop: 150 }}>Email</Text>
          <TextInput
              style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => setEmail(text)}
              value={getEmail}
          />

          <Text>Senha</Text>
          <TextInput
              style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={text => setSenha(text)}
              value={getSenha}
              secureTextEntry={true}
          />

          <Text> </Text>
          <Button title="Salvar"
              style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
              onPress={()=> inserirDados()}
          ></Button>
      </View>
  );

};
