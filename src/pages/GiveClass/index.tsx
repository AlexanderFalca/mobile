import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import {useAuth} from '../../contexts/auth';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses(){
    const {goBack} = useNavigation();
    const { user, signOut} = useAuth();

    function handleNavigateBack() {
        goBack();
    }
    function handleSignOut( ){
        signOut();
    }

    return (
    <View  style={styles.container}>
        <ImageBackground 

        resizeMode="contain" 
        source={giveClassesBgImg} 
        style={styles.content}
        >
            <Text style={styles.title}>Quer ser um Proffy?</Text>
            <Text style={styles.description}>
                Para começar, você precisa se cadastrar como professor na nossa plataforma  web.
            </Text>
        </ImageBackground>
        
        <RectButton onPress={handleNavigateBack} style={styles.okButton}>
            <Text style={styles.okButtonText}>Tudo bem</Text>
        </RectButton>
            <Text style={styles.okButtonText} >{user?.name}</Text>
        <RectButton onPress={handleSignOut} style={styles.okButton}>
            <Text style={styles.okButtonText}>Log out</Text>
        </RectButton>

    </View>
        );
};
export default GiveClasses;