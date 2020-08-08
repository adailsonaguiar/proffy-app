import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  padding-bottom: 20px;
  background: #8257e5;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const Image = styled.Image``;

export const ButtonBordeless = styled(BorderlessButton)``;

export const Title = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 150px;
`;
