import { React } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Avatar, Text } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/FontAwesome';

const Flex = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 2, alignItems:'center', paddingTop: 30 }} >
        <Avatar size="xlarge" rounded 
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71EGQo_g27b5xIMiBLPUe8lvKv572RublFA&usqp=CAU" }}
        />
        <Text h4>Vacinação Digital</Text>
      </View>
      <View style={{ flex: 3 }} >
        <Text h4>Email</Text> 
        <Input placeholder='' />
        <Text h4>Senha</Text>
        <Input placeholder='' />
        <Text> </Text>
        <Button title="Logar" type="solid" />
        <Text> </Text>
        <Button title="Cadastre-se" type="solid" />
      </View>
    </View>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    padding: 20,
  },
});

export default Flex;

/*
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Input placeholder='Login' />
        <Input placeholder='Senha' />
      </View>
      <Button title="Logar" type="solid" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

