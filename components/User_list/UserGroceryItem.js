import { StyleSheet, View, Text, Pressable, TouchableOpacity  } from "react-native"

function UserGroceryItem(props){



    return (

        <View style={styles.itemListStyles} >
            <View style={{ flex: 1 }}>        
                <Text style={{
                    textDecorationLine: props.data.completed ? "line-through" : "none", color: "white",
                    fontWeight: "bold",
                    fontSize: 15,
                }}>{props.data.text}</Text>
                </View>
                {!props.completed?(
                <TouchableOpacity style={styles.iconCheck} onPress={checked}>
                <Check/>
                </TouchableOpacity>)
                :""} 
                <TouchableOpacity style={styles.iconX} onPress={deleted}>
                <IconOne/>
                </TouchableOpacity>          
            </View>

    )

}

export default UserGroceryItem

const styles = StyleSheet.create({
    itemListStyles: {
        margin: 4,
        padding: 5,
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
        fontSize: 20,
    },
    iconX :{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",  
        justifyContent: 'space-between',
    },
    iconCheck:{
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row", 
        right: 3,
        position: "relative",
        
    }
})