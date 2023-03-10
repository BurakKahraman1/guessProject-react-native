import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Card from "../components/card";
import PrimaryButton from "../components/primaryButton";
import Title from "../components/title";
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();

  const resetInput = () => {
    setEnteredNumber("");
  };

  const confirmInput = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //showing alert
      Alert.alert(
        "invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInput }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };

  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.forKeyboard}>
      <KeyboardAvoidingView style={styles.forKeyboard} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title> Guess My Number</Title>
          <Card>
            <Text style={styles.textStyle}>Enter Number</Text>
            <TextInput
              style={styles.textInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={(enteredText) => setEnteredNumber(enteredText)}
            />
            <View style={styles.buttons}>
              <View style={styles.button}>
                <PrimaryButton onPressFunction={resetInput}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.button}>
                <PrimaryButton onPressFunction={confirmInput}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;


const styles = StyleSheet.create({
  forKeyboard: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
  
    alignItems: "center",
  },

  textStyle: {
    color: Colors.primary3,
    fontSize: 20,
  },
  textInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.primary3,
    borderBottomWidth: 2,
    color: Colors.primary3,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});

