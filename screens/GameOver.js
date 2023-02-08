import { View, Text, Image,ScrollView, StyleSheet,Dimensions,useWindowDimensions } from "react-native";
import PrimaryButton from "../components/primaryButton";
import Title from "../components/title";
import Colors from "../constants/colors";

const GameOver = ({roundsNumber,userNumber, onStartNewGame}) => {
 
 const {width,height}=useWindowDimensions()
 
 let imageSize=300;

 if(width<300){
  imageSize=150
 }
 if(height<400){
  imageSize=80
 }

 const imageStyle={
  width:imageSize,
  height:imageSize,
  borderRadius:imageSize/2
 }
 
  return (
    <ScrollView style={{flex:1}}>
    <View style={[styles.rootContainer,{marginTop:height<400? 0: 36}]}>
      <Title>GAME OVER!</Title>
      <View style={[styles.imageContainer,imageStyle]}>
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
    </ScrollView>
  );
};

export default GameOver;

const deviceWidth=Dimensions.get('window').width


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth<380 ? 200 : 300,
    // height: deviceWidth<380 ? 200 : 300,
    // borderRadius: deviceWidth<380 ? 75 : 150,
    borderWidth: 3,
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
    fontSize: deviceWidth<380 ? 18 : 24,
    textAlign: "center",
    marginBottom:18,
  },
  highlightText: {
    fontFamily: "open-sans-bold",
    color: Colors.primary2,
  },
 
});
