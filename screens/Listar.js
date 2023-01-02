import { React, useEffect, useState } from "react";
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import axios from "axios";
import { Button, Header, Avatar, ListItem } from 'react-native-elements';
import { ScrollView } from "react-native-gesture-handler";
import { useIsFocused } from "@react-navigation/native";

export default function ListaScreen({ route, navigation }) {
    /*
        const list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
        ]
    */
    const [list, setlist] = useState([]);
    const refresh = useIsFocused();

    useEffect(() => {
        function consultarDados() {
            axios.get('http://professornilson.com/testeservico/clientes')
                .then(function (response) {
                    setlist(response.data);
                }).catch(function (error) {
                    console.log(error);
                });
        }
        consultarDados();
    }, [refresh])


    return (
        <View>
            <Header
                centerComponent={{ text: 'Listar', style: { color: '#fff' } }}
                rightComponent={ <Button
                    title="+"
                    onPress={()=> navigation.navigate('Inserir')}
                />}
            />
            <ScrollView>
                {
                    list.map((linha, indice) => (
                        <ListItem key={indice} bottomDivider onPress={()=> navigation.navigate('Alterar',
                        {
                            nome:linha.nome,
                            telefone:linha.telefone,
                            cpf:linha.cpf,
                            id:linha.id
                        })}>   
                            <Avatar source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDtd0soCSRdpo8Y5klekJdABh4emG2P29jwg&usqp=CAU" }} />
                            <ListItem.Content >
                                <ListItem.Title>{linha.nome}</ListItem.Title>
                                <ListItem.Subtitle>{linha.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </ScrollView>
        </View>
    );
};