import React from 'react';
import {useAuth} from '../contexts/auth';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

import AuthRoutes from './authRoutes';
import AppStack from './AppStack';

const Routes: React.FC = () => {
    const {signed, loading} = useAuth();

   // if (loading){
     //   return (
      //      <View style={styles.loading} >
        //        <ActivityIndicator size='large' color="#999" />
         //   </View>
       // );
  //  }
    
    return signed ? <AppStack /> : <AuthRoutes />;
};

export default Routes;

const styles = StyleSheet.create({
    loading:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
},
});
