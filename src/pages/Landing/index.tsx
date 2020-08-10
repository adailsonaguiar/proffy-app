import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import landingImage from '../../assets/images/landing.png';
import studyICon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import * as S from './styles';
import api from '../../services/api';

function Landing() {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then((res) => setTotalConnections(res.data.total));
  }, []);

  return (
    <S.Container>
      <S.Banner source={landingImage} style={{ resizeMode: 'contain' }} />
      <S.Title>
        Seja bem vindo, {'\n'}
        <S.TitleBold>O que deseja fazer?</S.TitleBold>
      </S.Title>
      <S.ButtonContainer>
        <S.Button variant={'primary'} onPress={() => navigate('studyTabs')}>
          <S.IconButton source={studyICon} />
          <S.TitleButton>Estudar</S.TitleButton>
        </S.Button>
        <S.Button onPress={() => navigate('giveClasses')}>
          <S.IconButton source={giveClassesIcon} />
          <S.TitleButton>Dar aulas</S.TitleButton>
        </S.Button>
      </S.ButtonContainer>
      <S.TotalConnections>
        Total de {totalConnections} conexões já realizadas{' '}
        <S.Heart source={heartIcon} />
      </S.TotalConnections>
    </S.Container>
  );
}

export default Landing;
