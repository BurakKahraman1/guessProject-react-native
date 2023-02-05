import { View, Text, Image, StyleSheet } from "react-native";
import PrimaryButton from "../components/primaryButton";
import Title from "../components/title";
import Colors from "../constants/colors";

const GameOver = ({roundsNumber,userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightText}>{roundsNumber}</Text> round to
        guess the number <Text style={styles.highlightText}>{userNumber}</Text>.
      </Text>
      
        <PrimaryButton onPressFunction={onStartNewGame}>Start New Game</PrimaryButton>
     
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderRadius: 150,
    borderColor: Colors.primary2,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom:18,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary2,
  },
 
});
