import { Text,StyleSheet, Platform } from "react-native"

const Title=({children})=>{
   return <Text style={styles.title}> {children}</Text>

}

export default Title;


const styles=StyleSheet.create({
    title:{
      fontFamily:'open-sans-bold',
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        color: 'white',
        padding:12,
        // borderWidth:Platform.OS==='android'? 2 :0,
        borderWidth:Platform.select({ios:0,android:2}),
        borderColor:'white',
        width:300,
        maxWidth:'80%',
      }
})
