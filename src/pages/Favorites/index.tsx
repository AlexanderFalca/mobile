import React, { useState } from 'react';
import {View, ScrollView} from 'react-native';
import { useFocusEffect} from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import AsyncStorege from '@react-native-community/async-storage'; 

import styles from './styles';

function Favorites(){
    const [favorites, setFavorites] = useState([]);

  function loadFavorites(){
    
    AsyncStorege.getItem('favorites').then(response => {
        if(response){
            const favoritedTeachersIds = JSON.parse(response);
            
            setFavorites(favoritedTeachersIds);
        }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

    return (
        <View style={styles.container}>
            <PageHeader 
            title="Proffys disponíveis"/>

            <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 16,
            }}
            >

            {favorites.map((teacher: Teacher) => {
                return <TeacherItem 
                key={teacher.id}  
                teacher={teacher}
                favorited 
                />;
            })}
            </ScrollView>
        </View>
    );
};
export default Favorites;