import { View ,StyleSheet} from "react-native"

const Card=({children})=>{
    return(
        <View style={styles.card}>
            {children}
        </View>
    )
}

export default Card;

const styles=StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: "#3b021f",
        borderRadius: 8,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 2, height: 4 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})