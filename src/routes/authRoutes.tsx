import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';
import SignIn from '../pages/SingIn';
import { Header } from 'react-native/Libraries/NewAppScreen';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
        <AuthStack.Navigator screenOptions={{headerShown: false}} >
            <AuthStack.Screen name="SignIn" component={SignIn} />
        </AuthStack.Navigator>
    );

export default AuthRoutes;