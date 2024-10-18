import { Button, View, StyleSheet, Text, TouchableOpacity } from "react-native"


export function SymbolButtons(props){
    return (
        <TouchableOpacity>
            <Text style={styles.symbolsDesign}> {props.symbols} </Text>
        </TouchableOpacity>
    )
}

export function NumberButtons(props){
    return (
        <TouchableOpacity>
            <Text style={styles.numbersDesign}> {props.numbers} </Text>
        </TouchableOpacity>
    )
}

export function OperationButtons(props){
    return (
        <TouchableOpacity style={styles.operationContainer}>
            <Text style={styles.operationsDesign}> {props.operations} </Text>
        </TouchableOpacity>
    )
}

export function ZeroButton(props){
    return (
        <TouchableOpacity>
            <Text style={styles.zeroDesign}> {props.zero} </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    operationContainer: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        verticalAlign: 'middle',
    
    },

    operationsDesign: {
        display: "flex",
        fontSize: 40,
        width: 80,
        height: 80,
        backgroundColor: "#ff9900",
        color: "#fff",
        margin: 10,
        borderRadius: 50,
        textAlign: "center",
        verticalAlign: 'middle',
       
    },

    numbersDesign: {
        fontSize: 40,
        width: 80,
        height: 80,
        backgroundColor: "#525252",
        color: "#ffff",
        
        margin: 10,
        borderRadius: 50
    },

    symbolsDesign: {
        fontSize: 40,
        width: 80,
        height: 80,
        backgroundColor: "#d4d4d4",
        color: "#000",
        
        margin: 10,
        borderRadius: 50,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center"
    },

    zeroDesign: {
        backgroundColor: "#525252",
        color: "#ffff",
        margin: 10,
        borderRadius: 50,
        width: 180,
        height: 80,
        textAlign: "center",
        alignContent: "center",
    }

    //...add more styles as needed for each button type
 
})