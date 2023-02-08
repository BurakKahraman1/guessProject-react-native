import { View,Text,StyleSheet, Dimensions } from "react-native"
import Colors from "../../constants/colors"

const Numbers=({children})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

export default Numbers;

const deviceWidth=Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.primary3,
        // padding:deviceWidth / 10,
        padding:deviceWidth<380 ? 12 : 24,
        margin:deviceWidth<380 ? 12 : 24,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        fontFamily:'open-sans-bold',
        color:'white',
        fontSize:deviceWidth<380 ? 28 : 36,
    },
})
