import { useState } from "react"
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { getAuth, onAuthStateChanged } from "firebase/auth";

//line of code auth.onAuthStateChanged helps track user login status

function Home({ navigation }) {

    const [userStatus, setUserStatus] = useState("")

    const auth = getAuth();
    console.log(auth.currentUser?.email)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUserStatus(true)
            const uid = user.uid;
            // ...
        } else {
            // User is signed out
            setUserStatus(false)
        }
    });


    return (

        <View style={styles.Background}>
            <Image style={styles.imageEdit} source={require("/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/assets/images/ShoppingList.png")} />
            <View style={styles.buttonContainer} >
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Make a List")}>
                    <Text style={styles.buttonText}>Make a List</Text>
                </TouchableOpacity>
                {userStatus ? <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.buttonText}>User menu</Text>
                </TouchableOpacity> :
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>}
            </View>
        </View>
    )



}

const styles = StyleSheet.create({
    imageEdit: {
        justifyContent: 'center',
    },
    justifyContents: {
        flex: 2,
        alignItems: "center",
        bottom: 50
    },
    Background: {
        justifycontent: "center",
        alignItems: 'center',
        backgroundColor: "#27963C",
        height: "100%",
        widht: "100"

    },
    button: {
        backgroundColor: "white",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: "#27963C",
        fontWeight: "700",
        fontSize: 16
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        marginTop: 425
    },
})

export default Home

