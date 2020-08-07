import React from 'react';
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import themes from './src/styles/global';

import Landing from './src/pages/Landing';
import { AppLoading } from 'expo';
import {
  Archivo_400Regular,
  Archivo_700Bold,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from '@expo-google-fonts/poppins';

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme ? themes[deviceTheme] : themes.dark;
  // const theme = themes.dark;

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Landing />
    </ThemeProvider>
  );
}
