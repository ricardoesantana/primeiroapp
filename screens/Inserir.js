import { React, useEffect, useState } from "react";
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { Button, Header, Avatar, ListItem } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import FlashMessage, {showMessage} from "react-native-flash-message";


export default function InserirScreen({ route, navigation }) {

    const [getNome, setNome] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getEmail, setEmail] = useState();

    async function inserirDados() {
        await axios.post('http://professornilson.com/testeservico/clientes', {
                nome: getNome,
                telefone: getTelefone,
                email: getEmail
            }).then(function (response) {
                //console.log(response);
                showMessage({
                    message: "Registro Cadastrado com Sucesso",
                    type: "info",
                });
            }).catch(function (error) {
                //console.log(error);
                showMessage({
                    message: "Falha ao Cadastradar os dados!!!",
                    type: "danger",
                });
            });
    }

    return (
        <View style={{ alignItems: "center" }}>
            <FlashMessage position="center" />
            <Header
                centerComponent={{ text: 'Inserir Dados', style: { color: '#fff' } }}
                leftComponent={<Button
                    title="<"
                    onPress={() => navigation.navigate('Listar')}
                />}
            />
            <Text>Nome</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setNome(text)}
                value={getNome}
            />

            <Text>Email</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setEmail(text)}
                value={getEmail}
            />

            <Text>Telefone</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setTelefone(text)}
                value={getTelefone}
            />

            <Text> </Text>
            <Button title="Salvar Dados"
                style={{ padding: 20, width: 300 }}
                onPress={()=> inserirDados()}
            ></Button>
        </View>
    );
};