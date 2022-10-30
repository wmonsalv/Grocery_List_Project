import { View, Text, StyleSheet} from "react-native"


function UserLists(props) {

    return (
        <View style={styles.itemListStyles} >
            <View style={{ flex: 1 }}>
                <Text style={styles.textFontColor}>{props.listNames}</Text>
            </View>
        </View>
    )
}



export default UserLists

const styles = StyleSheet.create({
    itemListStyles: {
        margin: 4,
        padding: 10,
        borderRadius: 7,
        backgroundColor: "#27963C",
        color: "white",
        flexDirection: "row",
        elevation: 12,
        marginVertical: 10,
        textAlign:"center"

    },
    pressedItem: {
        opacity: 0.5,
        color: "red"
    },
    textFontColor: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15,
    },
})