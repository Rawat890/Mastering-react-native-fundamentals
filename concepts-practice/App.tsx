import { useFonts } from 'expo-font';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import InformationForm from './source1/components/InformationForm';
import { fontFamily } from './utils/fontfamily';

function App() {
    const [fontsLoaded] = useFonts({
    RalewayBold: fontFamily.ralewayBold,
    RalewayLight: fontFamily.ralewayLight,
    RalewayItalic: fontFamily.ralewayItalic,
    RalewayMedium: fontFamily.ralewayMedium,
    RalewayRegular: fontFamily.ralewayRegular,
    RalewaySemiBold: fontFamily.ralewaySemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }
  console.log(fontsLoaded)

  return (
  <SafeAreaProvider>
    <SafeAreaView edges={['top', 'bottom']} style={{flex:1}}>
    <InformationForm/>
    </SafeAreaView>
  </SafeAreaProvider>
  )
}

export default App;