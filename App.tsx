import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { Home } from './src/screens';
import { Loading } from './src/components/Loading';
import { theme } from './src/theme';

export default function App() {
  const [fontsLoaaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })
  return (
    <>
      {fontsLoaaded ? <Home /> : <Loading />}
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base.gray600,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
