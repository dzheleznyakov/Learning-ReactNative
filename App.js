import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Another piece of text!</Text>
      </View>
      <Text style={styles.text}>
        Hello World!
      </Text>
      <Button title='Tap me!' />
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
  text: {
    margin: 16, 
    borderWidth: 1, 
    borderColor: 'red', 
    padding: 16,
  },
});
