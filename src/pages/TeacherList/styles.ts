import styled from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const Scrollview = styled.ScrollView`
  margin-top: -70px;
`;

export const SearchForm = styled.View`
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 70px;
  background: #8257e5;
  /* margin-bottom: 4px; */
`;

export const SubmitButton = styled(RectButton)`
  background: #04d361;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const SubmitButtonTxt = styled.Text`
  color: #fff;
  font-family: Archivo_700Bold;
  font-size: 16px;
  margin-left: 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const Label = styled.Text`
  color: #d4c2ff;
  font-family: Poppins_400Regular;
`;

export const Input = styled.TextInput`
  height: 54px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const ButtonFilter = styled(BorderlessButton)`
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonFilterTxt = styled.Text`
  color: #d4c2ff;
  font-family: Archivo_400Regular;
  font-size: 16px;
  margin-left: 14px;
`;
