import { View,Text,StyleSheet } from "react-native"
import Colors from "../../constants/colors"

const Numbers=({children})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.primary3,
        padding:24,
        margin:24,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        fontFamily:'open-sans-bold',
        color:'white',
        fontSize:36,
    },
})

export default Numbers;