import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  justify-content: center;
  padding: 40px;
`;

export const Banner = styled.Image`
  width: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
  font-family: Poppins_400Regular;
`;

export const TitleBold = styled.Text`
  font-family: Poppins_600SemiBold;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Button = styled(RectButton)`
  height: 150px;
  width: 48%;
  background: ${(props) =>
    props.variant == 'primary'
      ? props.theme.buttonPrimaryBackground
      : props.theme.buttonSecondaryBackground};
  border-radius: 8px;
  padding: 24px;
  justify-content: space-between;
`;

export const IconButton = styled.Image``;

export const TitleButton = styled.Text`
  font-family: Archivo_700Bold;
  color: #fff;
  font-size: 20px;
`;

export const TotalConnections = styled.Text`
  font-family: Poppins_400Regular;
  color: #d4c2ff;
  line-height: 20px;
  /* max-width: 340px; */
  margin-top: 40px;
`;

export const Heart = styled.Image``;
