import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container: {
    backgroundColor: '#8257E5',
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    paddingBottom: 50,
},
containerLogo: {
    flex: 1,
    justifyContent: 'center',
},
content: {
    flex: 1, 
    justifyContent: 'center',
},
containerSignIn: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    width: '90%',
},
banner:{
    width: 240,
    height: 86,
},
title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 18,
    lineHeight: 22,
    padding: 0,
},
input:{
    backgroundColor: '#FFF',
    width: '90%',
    height: 58,
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 8,
    padding:10,
},
signInButton: {
    width: '90%',
    marginVertical: 10,
    height: 58,
    backgroundColor: '#04d361',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
},
createCountButton:{
    marginTop: 10,
},

textSignInButton: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF'    ,
    fontSize: 22,
    marginLeft: 16,
},
textCreateCountButton: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF'    ,
    fontSize: 14,
    marginLeft: 16,
},
});
export default styles;