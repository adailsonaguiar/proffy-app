import React, { useState } from 'react';
import { Linking, AsyncStorage } from 'react-native';
import heartOutlineButton from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import * as S from './styles';

export interface Teacher {
  id: number;
  subject: string;
  cost: string;
  user_id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem('favorites');
    let favoritesArray = [];

    if (isFavorited) {
      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem) => teacherItem.id === teacher.id
      );

      favoritesArray.splice(favoriteIndex, 1);
      setIsFavorited(false);
    } else {
      if (favorites) favoritesArray = JSON.parse(favorites);
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }

  function handleLinkWhatsapp(number: string) {
    Linking.openURL(`whatsapp://send?phone=55${number}`);
  }

  return (
    <S.Container>
      <S.Profile>
        <S.Avatar
          source={{
            uri: teacher.avatar,
          }}
        />
        <S.ProfileInfo>
          <S.Name>{teacher.name}</S.Name>
          <S.Subject>{teacher.subject}</S.Subject>
        </S.ProfileInfo>
      </S.Profile>
      <S.Bio>{teacher.bio}</S.Bio>
      <S.Footer>
        <S.Price>
          Preço/hora{'   '}
          <S.PriceValue>R$ {teacher.cost}</S.PriceValue>
        </S.Price>
        <S.ButtonsContainer>
          <S.FavoriteButton
            favorited={isFavorited}
            onPress={() => handleToggleFavorite()}
          >
            {!isFavorited ? (
              <S.Image source={heartOutlineButton} />
            ) : (
              <S.Image source={unFavoriteIcon} />
            )}
          </S.FavoriteButton>
          <S.ContactButton onPress={() => handleLinkWhatsapp(teacher.whatsapp)}>
            <S.Image source={whatsappIcon} />
            <S.ContactButtonText>Entrar em contato</S.ContactButtonText>
          </S.ContactButton>
        </S.ButtonsContainer>
      </S.Footer>
    </S.Container>
  );
};

export default TeacherItem;
