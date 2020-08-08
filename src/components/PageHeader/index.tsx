import React from 'react';

import backImage from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/logo.png';

import * as S from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();
  return (
    <S.Container>
      <S.TopBar>
        <S.ButtonBordeless onPress={() => navigate('landing')}>
          <S.Image source={backImage} resizeMode="contain" />
        </S.ButtonBordeless>
        <S.ButtonBordeless>
          <S.Image source={logoImage} resizeMode="contain" />
        </S.ButtonBordeless>
      </S.TopBar>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default PageHeader;
