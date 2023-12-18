import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>1. Clone the Repo</Text>
      <Text>2. Create a Branch</Text>
      <Text>3. Code in your .js file in Components Folder</Text>
      <Text>4. To see your code you have to cd in poductivity and run npm start</Text>
      <Text>5. Commit your changes, DON'T MERGE TO MAIN YET!!!!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
