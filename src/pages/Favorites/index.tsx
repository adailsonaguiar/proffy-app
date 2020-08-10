import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import * as S from './styles';
import { AsyncStorage } from 'react-native';

function Favorites() {
  const [favorites, setFavorites] = useState<[Teacher]>([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <S.Container>
      <S.Scrollview
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </S.Scrollview>
    </S.Container>
  );
}

export default Favorites;
