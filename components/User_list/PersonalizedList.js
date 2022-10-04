import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { auth } from "../../firebase"

const PersonalizedList = () => {

    // auth.currentUser?.email displays user currently logged in

return(
    <View style={styles.container}>
       <Text>Email: {auth.currentUser?.email}</Text>  
       <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
       </TouchableOpacity>
    </View>
)

}

export default PersonalizedList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#27963C",
        width: "60%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16
    },
})