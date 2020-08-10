import React, { useState, useEffect } from 'react';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { Feather } from '@expo/vector-icons';

import * as S from './styles';
import api from '../../services/api';
import { AsyncStorage } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [teachers, setTeachers] = useState<[Teacher]>([]);
  const [favorites, setFavorites] = useState<[number]>([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          }
        );
        setFavorites(favoritedTeachersIds);
      }
    });
  }

  async function searchTeachers() {
    loadFavorites();
    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });
    if (response) {
      setTeachers(response.data);
      setFiltersVisible(false);
    }
  }

  useFocusEffect(() => loadFavorites());

  return (
    <>
      <S.SearchForm>
        <S.ButtonFilter
          onPress={() => {
            setFiltersVisible(!filtersVisible);
          }}
        >
          <Feather name="filter" color="#04D361" size={20} />
          <S.ButtonFilterTxt>Filtar por dia, hora e matéria</S.ButtonFilterTxt>
        </S.ButtonFilter>
        {filtersVisible && (
          <>
            <S.Label>Matéria</S.Label>
            <S.Input
              placeholderTextColor="#c1bccc"
              placeholder="Qual a matéria?"
              value={subject}
              onChangeText={(value) => setSubject(value)}
            />
            <S.InputGroup>
              <S.InputBlock>
                <S.Label>Dia da Semana</S.Label>
                <S.Input
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                  value={week_day}
                  onChangeText={(value) => setWeekDay(value)}
                />
              </S.InputBlock>
              <S.InputBlock>
                <S.Label>Horário</S.Label>
                <S.Input
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o horário?"
                  value={time}
                  onChangeText={(value) => setTime(value)}
                />
              </S.InputBlock>
            </S.InputGroup>
            <S.SubmitButton onPress={() => searchTeachers()}>
              <S.SubmitButtonTxt>Filtrar</S.SubmitButtonTxt>
            </S.SubmitButton>
          </>
        )}
      </S.SearchForm>
      <S.Container>
        <S.Scrollview
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}
        >
          {teachers.map((teacher) => (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          ))}
        </S.Scrollview>
      </S.Container>
    </>
  );
}

export default TeacherList;
