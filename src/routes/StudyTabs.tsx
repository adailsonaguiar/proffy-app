import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages//Favorites';
import PageHeader from '../components/PageHeader';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs({ navigation }) {
  const [title, setTitle] = useState('');
  return (
    <>
      <PageHeader title={title} />
      <Navigator
        tabBarOptions={{
          style: { elevation: 0, shadowOpacity: 0, height: 64 },
          tabStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
          iconStyle: {
            flex: 0,
            width: 20,
            height: 20,
          },
          labelStyle: {
            fontFamily: 'Archivo_700Bold',
            fontSize: 13,
            marginLeft: 16,
          },
          inactiveBackgroundColor: '#fafafc',
          activeBackgroundColor: '#ebebf5',
          inactiveTintColor: '#c1bccc',
          activeTintColor: '#32264d',
        }}
      >
        <Screen
          name="teacherList"
          component={TeacherList}
          listeners={{
            focus: () => {
              setTitle('Proffys disponíveis');
              navigation.navigate('teacherList');
            },
          }}
          options={{
            tabBarLabel: 'Proffys',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name="ios-easel"
                color={focused ? '#8257e5' : color}
                size={size}
              />
            ),
          }}
        />
        <Screen
          name="favorites"
          component={Favorites}
          listeners={{
            focus: () => {
              setTitle('Meus proffys favoritos');
              navigation.navigate('favorites');
            },
          }}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name="ios-heart"
                color={focused ? '#8257e5' : color}
                size={size}
              />
            ),
          }}
        />
      </Navigator>
    </>
  );
}

export default StudyTabs;
