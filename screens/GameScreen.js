import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList,useWindowDimensions } from "react-native";
import Card from "../components/card";
import Numbers from "../components/game/Numbers";
import PrimaryButton from "../components/primaryButton";
import Title from "../components/title";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import GuessItem from "../components/game/GuessItem";

const generateRandom = (min, max) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    return rndNum;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, GameOverHandler }) => {
  const initialGuess = generateRandom(minBoundary, maxBoundary, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRound, setGuessRounds] = useState([initialGuess]);
  const {width, height}=useWindowDimensions();


  useEffect(() => {
    if (currentGuess === userNumber) {
      GameOverHandler(guessRound.length);
    }
  }, [currentGuess, userNumber, GameOverHandler]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandom(minBoundary, maxBoundary);
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuess) => [newRndNumber, ...prevGuess]);
  };

  const guessRoundListLength = guessRound.length;

  let content= (
    <>
    <Numbers>{currentGuess}</Numbers>
      <Card>
        <Text style={[styles.textStyle, styles.textStyle2]}>
          Higher or lower?
        </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressFunction={() => nextGuessHandler("higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressFunction={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  )

if(width>500){
  content=(<>
    <View style={styles.columnButton}>
    <View style={styles.buttonContainer}>
            <PrimaryButton onPressFunction={() => nextGuessHandler("higher")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
          <Numbers>{currentGuess}</Numbers>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPressFunction={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
    </View>
  
  </>
  )
}

  return (
    <View style={width>500? [styles.container,{padding:0}] : styles.container}>
      <Title> Opponent's Guess</Title>
        {content}
      <View style={styles.flatListContainer}>
        {/* {guessRound.map(guess=><Text key={guess}>{guess}</Text>)} */}
        <FlatList
          data={guessRound}
          renderItem={(itemData) => (
            <GuessItem
              roundNumber={guessRoundListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems:'center',
    marginTop:50,
  },
  textStyle: {
    color: Colors.primary3,
    fontSize: 20,
  },
  textStyle2: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  flatListContainer: {
    flex: 1,
    padding: 16,
  },
  columnButton:{
    flexDirection:'row',
    alignItems:'center',
  }
});
