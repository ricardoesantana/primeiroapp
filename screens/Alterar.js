import { React, useEffect, useState } from "react";
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { Button, Header, Avatar, ListItem } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import FlashMessage, {showMessage} from "react-native-flash-message";

export default function AlterarScreen({ route, navigation }) {

    const [getNome, setNome] = useState();
    const [getTelefone, setTelefone] = useState();
    const [getCpf, setCpf] = useState();
    const [getId, setId] = useState();

    useEffect(() => {
        if (route.params) {
            const { nome } = route.params;
            const { cpf } = route.params;
            const { telefone } = route.params;
            const { id } = route.params;

            setNome(nome);
            setCpf(cpf);
            setTelefone(telefone);
            setId(id);
        }
    }, []);

    function alterarDados() {
        axios.put("http://professornilson.com/testeservico/clientes/" + getId, {
            nome: getNome,
            telefone: getTelefone,
            cpf: getCpf
        }).then(function (response) {
            //console.log(response);
            showMessage({
                message: "Registro Alterado com Sucesso",
                type: "sucess",
            });
        }).catch(function (error) {
            console.log(error);
            showMessage({
                message: "Falha ao Alterar os dados!!!",
                type: "danger",
            });
        });
    }

    function excluirDados() {
        axios.delete('http://professornilson.com/testeservico/clientes/' + getId).then(
            function (response) {
                showMessage({
                    message: "Registro Excluído com Sucesso",
                    type: "danger",
                });

                setNome(null);
                setCpf(null);
                setTelefone(null);
                setId(null);
            }).catch(function (error) {
                //console.log(error);
                showMessage({
                message: "Falha ao Excluir os dados!!!",
                    type: "danger",
                });
            });
    }

    return (
        <View style={{ alignItems: "center" }}>
            <FlashMessage position="center" />
            <Header
                centerComponent={{ text: 'Alterar Dados', style: { color: '#fff' } }}
                leftComponent={<Button
                    title="<"
                    onPress={() => navigation.navigate('Listar')}
                />}
            />
            <Text>Digite seu Nome</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setNome(text)}
                value={getNome}
            />

            <Text>Digite seu Telefone</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setTelefone(text)}
                value={getTelefone}
            />

            <Text>Digite seu Cpf</Text>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setCpf(text)}
                value={getCpf}
            />
            <Text> </Text>
            <Button title="Alterar Dados"
                style={{ padding: 20, width: 300 }}
                onPress={() => alterarDados()}
            ></Button>
            <Text> </Text>
            <Button title="Excluir Dados"
                style={{ padding: 20, width: 300 }}
                onPress={() => excluirDados()}
            ></Button>
        </View>
    );
};