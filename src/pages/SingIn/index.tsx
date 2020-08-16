import React from 'react';
import {View, Text, KeyboardAvoidingView, Image, ImageBackground} from 'react-native';
import { RectButton, TextInput } from 'react-native-gesture-handler';
import {useAuth} from '../../contexts/auth';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';

const SignIn: React.FC = () => {
    const { signed, user, signIn } = useAuth();

    console.log(signed);
    console.log(user);

    function handleSignIn(){
        signIn();
    }
    return (
        <KeyboardAvoidingView style={styles.container}  >

        <View style={styles.containerLogo} >

        <ImageBackground 
        resizeMode="contain" 
        source={giveClassesBgImg} 
        style={styles.content}
        >
            
        <Image style={styles.banner} source={logoImg} />

        <Text style={styles.title} >Sua plataforma de</Text>
        <Text style={styles.title} >estudos online.</Text>

        </ImageBackground>

    </View>

    <View style={
        styles.containerSignIn}
    >

        <TextInput
        style={styles.input}
        placeholder="Email"
        autoCorrect={false}
        onChangeText={()=> {}} 
        />

        <TextInput
        style={styles.input}
        placeholder="Senha"
        autoCorrect={false}
        onChangeText={()=> {}} 
        />

        <RectButton 
        style={styles.signInButton} 
        onPress={(handleSignIn)}
        >
            <Text style={styles.textSignInButton} >Sign in</Text>
        </RectButton>

        <RectButton 
        style={styles.createCountButton} 
        onPress={()=>{}}
        >
            <Text style={styles.textCreateCountButton} >Create count</Text>
        </RectButton>

    </View>
    </KeyboardAvoidingView>
    );
};
export default SignIn;