import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { auth } from "../../firebase"

const PersonalizedList = () => {

    const navigation = useNavigation()

    const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
            navigation.replace("Home")
        })
        .catch(error => alert(error.message))
    }

    // auth.currentUser?.email displays user currently logged in. 
    //We use a question mark because that tells javascript that this "User.email" might be undefined (which if we leave as is and it is undefined, it will crash our app). Hence, this tells js, if it's undefined, don't check for the email.

return(
    <View style={styles.container}>
       <Text>Email: {auth.currentUser?.email}</Text>  
       <TouchableOpacity onPress={handleSignOut} style={styles.button}>
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