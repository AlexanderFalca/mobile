import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
},

content: {
    flex: 1, 
    justifyContent: 'center',
},

title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    marginTop: 180,
},

description: {
    marginTop: 24,
    color: '#dec2ff',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    maxWidth: 240,
},

okButton: {
    marginVertical: 40,
    height: 58,
    backgroundColor: '#04d361',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
},

okButtonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 16,
},

});
export default styles;