import React, { useState } from 'react';

import TeacherItem from '../../components/TeacherItem';
import { Feather } from '@expo/vector-icons';

import * as S from './styles';

function TeacherList() {
  const [filtersVisible, setFiltersVisible] = useState(false);
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
            />
            <S.InputGroup>
              <S.InputBlock>
                <S.Label>Dia da Semana</S.Label>
                <S.Input
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o dia?"
                />
              </S.InputBlock>
              <S.InputBlock>
                <S.Label>Horário</S.Label>
                <S.Input
                  placeholderTextColor="#c1bccc"
                  placeholder="Qual o horário?"
                />
              </S.InputBlock>
            </S.InputGroup>
            <S.SubmitButton>
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
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </S.Scrollview>
      </S.Container>
    </>
  );
}

export default TeacherList;
