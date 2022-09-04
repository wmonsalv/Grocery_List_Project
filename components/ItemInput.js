import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"
import { useState } from "react"

//we used props to pass over the state change from the app component into the ItemInput component (i.e., props.onAddItem)
// Just rememeber that we can't style the button components offered by react native. If we want a particular style, then we have to create our own.
// Images in native are not linked to file in the same way we would do in html or react. Here, we use require, and then the relative file path. I used Two dots before the file path because we are having to move two levels up (file wise) to get to the folder that holds my image

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
        width: 200, 
        height: 200,
        margin: 20
    }
})