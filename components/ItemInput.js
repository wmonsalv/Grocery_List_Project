import { View, TextInput, Button, StyleSheet } from "react-native"
import { useState } from "react"

//we used props to pass over the state change from the app component into the ItemInput component (i.e., props.onAddItem)

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

        <View style={styles.inputContainer}>
            <TextInput value={enteredItemText} style={styles.textInput} onChangeText={listInputHandler} placeholder="Add Item to the list" />
            <Button title="Add Item" onPress={addInputHandler} />
        </View>
    )

}

export default ItemInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: "#1e90ff",
        flex: 1
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: "70%",
        padding: 8
    }
})