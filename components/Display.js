import { View, Text, StyleSheet} from "react-native"

export function Display() {
    return (
        <View>
            <Text style={styles.displayDesign}> Display </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    displayDesign: {
        display: "flex",
        height: 300,
        fontSize: 40,
        fontWeight: "bold",
        color: "white",
        padding: 10,
        margin: 10,
        textAlign: "right",
        // backgroundColor: "white"
    }
})