import React from 'react';
import TeacherItem from '../../components/TeacherItem';

import * as S from './styles';

function Favorites() {
  return (
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
  );
}

export default Favorites;
