import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../pages/SignIn';
import ChatRoom from '../pages/ChatRoom';
import Messages from '../pages/Messages';
import Search from '../pages/Search';

const AppStack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <AppRoutes.Navigator initialRouteName="ChatRoom">
      <AppStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: 'Faça o login',
        }}
      />
      <AppStack.Screen
        name="ChatRoom"
        component={ChatRoom}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="Messages"
        component={Messages}
        options={({route}) => ({
          title: route.params.thread.name,
        })}
      />
      <AppStack.Screen
        name="Search"
        component={Search}
        options={({route}) => ({
          title: route.params.thread.name,
        })}
      />
    </AppRoutes.Navigator>
  );
}

export default AppRoutes;
