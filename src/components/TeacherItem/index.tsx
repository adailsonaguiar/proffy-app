import React from 'react';
import { useNavigation } from '@react-navigation/native';

import heartOutlineButton from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import * as S from './styles';

const TeacherItem = () => {
  const { navigate } = useNavigation();
  return (
    <S.Container>
      <S.Profile>
        <S.Avatar
          source={{
            uri:
              'https://avatars2.githubusercontent.com/u/19656546?s=460&u=1670b315054f11b9f359b226711ec53fe927c524&v=4',
          }}
        />
        <S.ProfileInfo>
          <S.Name>Adailson Aguiar</S.Name>
          <S.Subject>Física</S.Subject>
        </S.ProfileInfo>
      </S.Profile>
      <S.Bio>
        Sou formado em Sistemas de informação pela Universidade Católica do
        Tocantins. Apaixonado por tecnologias e sempre aberto a novas
        experiências e conquistas.
      </S.Bio>
      <S.Footer>
        <S.Price>
          Preço/hora{'   '}
          <S.PriceValue>R$ 20,00</S.PriceValue>
        </S.Price>
        <S.ButtonsContainer>
          <S.FavoriteButton favorited={true}>
            <S.Image source={heartOutlineButton} />
            {/* <S.Image source={unFavoriteIcon} /> */}
          </S.FavoriteButton>
          <S.ContactButton>
            <S.Image source={whatsappIcon} />
            <S.ContactButtonText>Entrar em contato</S.ContactButtonText>
          </S.ContactButton>
        </S.ButtonsContainer>
      </S.Footer>
    </S.Container>
  );
};

export default TeacherItem;
