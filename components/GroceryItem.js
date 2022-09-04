import { StyleSheet, View, Text, Pressable } from "react-native"

//The data from the app component is passed down onto the onPress attribute on pressable through props

function GroceryItem(props) {
    return(
        <Pressable onPress={props.onDelete.bind(this, props.text)}>
        <View style={styles.itemListStyles} >
        <Text style={styles.textFontColor}>{props.text}</Text>
        </View>
        </Pressable>
    ) 
}

export default GroceryItem

const styles = StyleSheet.create({
    itemListStyles: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: "#1e90ff",
        color: "white",
      },
      textFontColor: {
        color: "white",
      }
})