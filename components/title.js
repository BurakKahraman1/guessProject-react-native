import { Text,StyleSheet } from "react-native"

const Title=({children})=>{
   return <Text style={styles.title}> {children}</Text>

}

export default Title;


// app js de yaptigimiz islemlerle olusturdugumuz font stilleri artik font family ile istedigimiz yerde kullanabilir 
const styles=StyleSheet.create({
    title:{
      fontFamily:'open-sans-bold',
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        color: 'white',
        padding:12,
        borderWidth:2,
        borderColor:'white',
      }
})