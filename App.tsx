import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';
import {AuthProvider} from './src/contexts/auth';
import {AppLoading} from 'expo';
import {Archivo_400Regular, Archivo_700Bold, useFonts} from '@expo-google-fonts/archivo';
import {Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins';

const App: React.FC = () =>{
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if(!fontsLoaded){
    return <AppLoading />
  } else{

  return (
    <NavigationContainer >
       <AuthProvider >
      <Routes />
      <StatusBar hidden />
      </AuthProvider>
    </NavigationContainer>
  );
}

};
export default App;