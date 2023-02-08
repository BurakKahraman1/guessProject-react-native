import { Text,StyleSheet, Platform } from "react-native"
//platform sayesinde iosa veya androide ozel style yada islem yapabiliriz 
//usedimension gibi degiskenlik gostermediginden componentin icinde tanimlama yapmaya gerek yok
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
        // borderWidth:Platform.OS==='android'? 2 :0,
        borderWidth:Platform.select({ios:0,android:2}),
        borderColor:'white',
        width:300,
        maxWidth:'80%',
      }
})