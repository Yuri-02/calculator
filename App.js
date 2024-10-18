import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NumberButtons, SymbolButtons, OperationButtons, ZeroButton } from './components/Button.js'
import { Display } from './components/Display.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Display />
      <View style={styles.line1}>
        <SymbolButtons symbols="AC"/>
        <SymbolButtons symbols="+/-"/>
        <SymbolButtons symbols="%"/>
        <OperationButtons operations="÷"/>
      </View>

      <View style={styles.line2}>
        <NumberButtons numbers="7"/>
        <NumberButtons numbers="8"/>
        <NumberButtons numbers="9"/>
        <OperationButtons operations="x"/>
      </View>

      <View style={styles.line3}>
        <NumberButtons numbers="4"/>
        <NumberButtons numbers="5"/>
        <NumberButtons numbers="6"/>
        <OperationButtons operations="-"/>
      </View>

      <View style={styles.line4}>
        <NumberButtons numbers="1"/>
        <NumberButtons numbers="2"/>
        <NumberButtons numbers="3"/>
        <OperationButtons operations="+"/>
      </View>

      <View style={styles.line5}>
        <ZeroButton zero="0"/>
        <NumberButtons numbers=","/>
        <OperationButtons operations="="/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    backgroundColor:"#000",
    flex: 1,
    display: "flex",
    flexDirection: "row",
    width: "100",
    flexWrap: "wrap",
    padding: 10,
    justifyContent: 'center',
    // justifyContent: 'center',
  },

  line1: {
    flexDirection: "row",
  },

  line2: {
    flexDirection: "row"
  },

  line3: {
    flexDirection: "row"
  },
  
  line4: {
    flexDirection: "row"
  },

  line5: {
    flexDirection: "row",
  }
});
