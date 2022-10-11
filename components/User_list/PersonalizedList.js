import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
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
    
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ededed" }}>
    <View style={styles.header}>
    <Text style={{ fontWeight: "bold", fontSize: 15, color: "black" }}>Email: {auth.currentUser?.email}</Text>  
    </View>
    <View style={styles.footer}>
       <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
       </TouchableOpacity>
    </View>
    </SafeAreaView>
)

}

export default PersonalizedList

const styles = StyleSheet.create({
    header: {
        backgroundColor:"#E0E0E0",
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        bottom: 60
      },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    footer: {
        position: "absolute",
        bottom: 25,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        color: "#fff"
      },
})