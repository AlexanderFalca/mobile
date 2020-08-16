import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: '#f0f0f7',
},
teacherList: {
    marginTop: -40,
},
searchForm: {
    marginBottom: 18,
},

label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular'
},

inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},

inputBlock: {
    width: '48%',
},

input: {
    height: 52,
    backgroundColor: '#FFF',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 8,
},

inputPicker: {
    backgroundColor: '#FFF',
    justifyContent: 'center',
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#bdc3c7', 
    overflow: 'hidden',
    marginTop: 4,
    marginBottom: 8,
},

inputTime: {
    backgroundColor: '#FFF',
    height: 52,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 4, 
    marginBottom: 8,
    paddingHorizontal: 10,
},
inputTimeText: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular'

},

submitButton: {
    backgroundColor: '#04d361',
    height: 48,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
},

submitButtonText: {

    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 16,
},
});
export default styles;