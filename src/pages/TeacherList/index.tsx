import React from 'react';

import * as S from './styles';
import TeacherItem from '../../components/TeacherItem';

function TeacherList() {
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

export default TeacherList;
