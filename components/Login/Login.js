import { Alert, KeyboardAvoidingView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import {useState} from 'react'
import { TextInput } from 'react-native-paper'
import { auth } from "/Users/william_x1/Documents/GitHub/expenses-app-main/Grocery_List_Project/firebase.js"

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(email, password)  //creates user with email and password we just provided
        .then(userCredentials => {
                const user = userCredentials.user
                console.log(user.email)
            })
        .catch(error => alert(error.message()))

        Alert.alert("Account was registered successfully")

        setEmail("")
        setPassword("")
    }

    return (

        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="email"
                    value={email}
                    onChangeText={text => setEmail(text) } //anytime text changes, we set the email to that text
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
                <TouchableOpacity style={styles.button}>
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
        alignItems: "center"
    },
    inputContainer:{
        width: "80%"
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
        marginTop: 40
    },
    button: {
        backgroundColor: "#27963C",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonOutline:{
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#27963C",
        borderWidth: 2
    },
    buttonText:{
        color: "white",
        fontWeight: "700",
        fontSize: 16
    },
    buttonOutlineText:{
        color: "#27963C",
        fontWeight: "700",
        fontSize: 16
    }

})