import React, { useState } from 'react';
import {View, Text, Picker, Platform} from 'react-native';
import { ScrollView, BorderlessButton, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'; 
import DatePicker from '@react-native-community/datetimepicker';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import {Feather} from '@expo/vector-icons';
import styles from './styles';

function TeacherList(){
    
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  function loadFavorites(){

    AsyncStorage.getItem('favorites').then(response => {
        if(response){
            const favoritedTeachers = JSON.parse(response);
            const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) =>{
                return teacher.id;
            })
            setFavorites(favoritedTeachersIds);
        }
    });
  }

    function handleToggleFiltersVisible() {
        setIsFilterVisible(!isFilterVisible)
    }

    function showTime(){
        setShow(!show)
    }

    async function handleFiltersSubmit(){
        loadFavorites();

        const response = await api.get('classes', {
            params: {
              subject,
              week_day,
              time,
            },
          });

          setIsFilterVisible(false);
          setTeachers(response.data);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
            title="Proffys disponíveis" 
            headerRight={(
            <BorderlessButton onPress={handleToggleFiltersVisible} >
                <Feather name="filter" size={20} color="#FFF" />
            </BorderlessButton>)} 
            >
                {isFilterVisible && (
                    <View style={styles.searchForm}>
                    
                    <Text style={styles.label}>Matéria</Text>
                    <View  style={styles.inputPicker} >
                    <Picker
                    selectedValue={subject}
                    onValueChange={(itemValue, itemIndex) => setSubject(itemValue)}
                    >
                        
                        <Picker.Item color="#c1bccc" label="Qual é a matéria?" value=" " />
                        <Picker.Item label="Português"  value="Portugus" />
                        <Picker.Item label="Matemática" value="Matemática" />
                        <Picker.Item label="Geografia"  value="Geografia" />
                        <Picker.Item label="História"   value="HistÓria" />
                        <Picker.Item label="Biologia"   value="Biologia" />
                        <Picker.Item label="Artes"      value="Artes" />
                        <Picker.Item label="Pedagogia"  value="Pedagogia" />

                    </Picker>
                    </View>
                    
                    <View style={styles.inputGroup}>

                        <View style={styles.inputBlock}>

                    <Text style={styles.label}>Dia da semana</Text>
                    <View  style={styles.inputPicker} >
                    <Picker
                    selectedValue={week_day}
                    onValueChange={(itemValue, itemIndex) => setWeekDay(itemValue)}
                    >
                        
                        <Picker.Item color="#c1bccc" label="Dia?" value=" " />
                        <Picker.Item label="Domingo"       value="0" />
                        <Picker.Item label="Segunda-feira" value="1" />
                        <Picker.Item label="Terça-feira"   value="2" />
                        <Picker.Item label="Quarta-feira"  value="3" />
                        <Picker.Item label="Quinta-feira"  value="4" />
                        <Picker.Item label="Sexta-feira"   value="5" />
                        <Picker.Item label="Sábado"        value="6" />

                    </Picker>
                    </View>
                        </View>

                        <View style={styles.inputBlock}>
                        
                        <Text style={styles.label}>Horário</Text>
                        <TouchableOpacity style={styles.inputTime} onPress={showTime}>
                            <Text>{
                            (time.getHours()<10?'0':'') + time.getHours()
                            }:{
                            (time.getMinutes()<10?'0':'') + time.getMinutes()
                            }</Text>       
                        </TouchableOpacity> 
                        {show && (
                        <DatePicker
                             mode="time"
                             value={time}
                            is24Hour={true}
                            display="clock"
                            onChange={(event, selectedTime) => {
                                const currentTime = selectedTime || new Date();
                                setTime(currentTime);
                                setShow(Platform.OS === 'ios' ? true : false);
                                }
                            }
                        />
                        )}
                        </View>
                    </View>

                    <RectButton 
                    style={styles.submitButton}
                    onPress={handleFiltersSubmit}
                    >
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>
                )}
            </PageHeader>

            <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 25,
            }}
            >

            {teachers.map((teacher: Teacher) => {
                return (
                <TeacherItem 
                key={teacher.id} 
                teacher={teacher} 
                favorited={favorites.includes(teacher.id)} 
                />)
            })} 

            </ScrollView>
        </View>
    );
};
export default TeacherList;