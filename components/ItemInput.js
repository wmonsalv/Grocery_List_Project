import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"
import { useState } from "react"

//we used props to pass over the state change from the app component into the ItemInput component (i.e., props.onAddItem)
// Just rememeber that we can't style the button components offered by react native. If we want a particular style, then we have to create our own.

function ItemInput(props) {

    const [enteredItemText, setEnteredItemText] = useState("")
    function listInputHandler(enteredText) {
        setEnteredItemText(enteredText)
    }

    function addInputHandler(){
        props.onAddInput(enteredItemText)
        setEnteredItemText("")
    }

    return (

        <Modal animationType="slide" visible={props.visible}>
        <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/images/groceryBasket.jpg")}/>
            <TextInput
                 value={enteredItemText} 
                 style={styles.textInput} 
                 onChangeText={listInputHandler} 
                 placeholder="Add Item to the list" />
                 <View style={styles.buttonContainer}>
                <View style={styles.button}>
                 <Button title="Add Item" onPress={addInputHandler} />
                 </View>
                 <View style={styles.button}>
                 <Button onPress={props.onCancel} title="Cancel"/>
                 </View>
                 </View>
            
        </View>
        </Modal>
    )

}

export default ItemInput

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#1e90ff",
        flex: 1,
        padding: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: "100%",
        padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: "row"
    }, 
    button: {
        marginHorizontal: 8,
        width: 100
    },
    image: {
        width: 100, 
        height: 100,
        margin: 20
    }
})