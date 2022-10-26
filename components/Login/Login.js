import { Alert, KeyboardAvoidingView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { auth } from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/firebase.js"
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import User from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/components/Icons/User.js"
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword} from "firebase/auth";


const Login = () => {

    const navigation = useNavigation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    useEffect(() => { //these lines of code make sure to stop the listener once we leave the screen
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("User lists")
            }
        })
        return unsubscribe
    }, []) //we pass in an empty array so that it only runs once at the beginning 

    const handleSignUp = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        setEmail("")
        setPassword("")
    }

    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">
            <View style={styles.inputContainer}>
                <View style={styles.icon}>
                    <User />
                </View>

                <TextInput
                    placeholder="email"
                    value={email}
                    onChangeText={text => setEmail(text)} //anytime text changes, we set the email to that text
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={pass => setPassword(pass)} //anytime passw text changes, we change the state to the new value of pass 
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={handleSignUp}>
                    <Text style={styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F0F0F0"
    },
    inputContainer: {
        width: "80%",
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25
    },
    button: {
        backgroundColor: "#27963C",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#27963C",
        borderWidth: 2
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16
    },
    buttonOutlineText: {
        color: "#27963C",
        fontWeight: "700",
        fontSize: 16
    },
    icon: {
        position: "absolute",
        bottom: 92,
        left: 45
    }

})