import React from 'react';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

function GiveClasses() {
  const { goBack } = useNavigation();

  return (
    <S.Container>
      <S.Content source={giveClassesBgImage} resizeMode="contain">
        <S.Title>Quer ser um Proffy?</S.Title>
        <S.Description>
          Pra começar, você precisa se cadastrar coom professor na nossa
          plataforma web.
        </S.Description>
      </S.Content>
      <S.OkButton onPress={() => goBack()}>
        <S.OkButtonText>Tudo bem</S.OkButtonText>
      </S.OkButton>
    </S.Container>
  );
}

export default GiveClasses;
