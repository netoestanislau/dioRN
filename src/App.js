import React from "react";
import { View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking } from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86630795?v=4';
const urlToGithub = 'https://github.com/netoestanislau';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando Link');
        const res = await Linking.canOpenURL(urlToGithub);
        if (res) {
            console.log('LInk Aprovado');
            await Linking.openURL(urlToGithub);
        }
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content">


            </StatusBar>
            <View style={style.content}>
                <Image style={style.avatar} source={{ uri: imageProfileGithub }} />
                <Text style={[style.defaultText, style.name]}>Estanislau Neto</Text>
                <Text style={[style.defaultText, style.nickname]}>netoestanislau</Text>
                <Text style={[style.defaultText, style.description]}>
                    Desenvolvedor | Engenharia de Software | Redes de Computadores | TI
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>

    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, //expandir para a tela inteira
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        pedding: 20,
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: '#B00090',
        borderWidth: 3,
    },

    defaultText: {
        color: 'white',
    },

    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
    },

    nickname: {
        fontSize: 18,
    },

    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },

    button: {
        marginTop: 25,
        backgroundColor: '#D92388',
        borderRadius: 10,
        padding: 10,

    },

    textButton: {
        fontWeight: 'bold',
        fontSize: 16,
    },

});