import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGame";
import { LinearGradient } from "expo-linear-gradient";
import {StatusBar} from 'expo-status-bar'
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/colors";
import GameOver from "./screens/GameOver";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading";


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver,setGameIsOver]=useState(false)
  const [guessRounds,setGuessRounds]=useState(0)

  //useFonts biz boolen deger donecek ona gore yuklenene kadar loading gosterecez bunlar npm ile expo paketi olarak indirdik
  // const [fontsLoaded]=
  useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
  // butun sayfanin font stili expo font paketini indirip app js de renderlayarak yapabiliyoruz

  // if(!fontsLoaded){
  //   return <AppLoading/>
  // }


  const pickedNumber = (picked) => {
    setUserNumber(picked);
    setGameIsOver(false)
  };

  const GameOverHandler=(numberOfRounds)=>{
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  }

  const startNewGame=()=>{
    setUserNumber(null);
    setGuessRounds(0)

  }


  let screen = <StartGameScreen onPickNumber={pickedNumber} />;
  if (userNumber) {
    screen = <GameScreen GameOverHandler={GameOverHandler} userNumber={userNumber}/>;
  }

  if(gameIsOver && userNumber){
    screen=<GameOver userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGame}/>
  }

  
  return (
    <>
    <StatusBar style="light"/>
    <LinearGradient colors={["#68053b", Colors.primary3]} style={styles.mainScreen}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.mainScreen}
        imageStyle={styles.backgroundImage}
        >
        <SafeAreaView style={styles.mainScreen}>{screen}</SafeAreaView>
        {/* SafeAreaView ahizenin ekrani boldugu telefonlarda o kismi yok sayarak sayfayi ayarlar */}
      </ImageBackground>
    </LinearGradient>
  </>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
