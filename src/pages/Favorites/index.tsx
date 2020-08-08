import React from 'react';
import {View, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem from '../../components/TeacherItem';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Favorites(){
    return (
        <View style={styles.container}>
        <PageHeader title="Meus proffys favoritos" />


        <ScrollView
            style={styles.teacherList}
            contentContainerStyle={{
                paddingHorizontal: 16,
                paddingBottom: 25,
            }}
            >

            <TeacherItem />

            <TeacherItem />

            <TeacherItem />

            <TeacherItem />

            </ScrollView>
    </View>
    );
};
export default Favorites;