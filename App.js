import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  useEffect(() => {
    console.log("FUCKKKKKKKKKK");
  }, []);

  

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count atualizou");
  }, [count]);

  const handleIncremento = () => {
    setCount(count + 1);
  }

  const handleDecremento = () => {
    if (count === 0) return;
    setCount(count - count);
  }

  return (
    <View style={styles.container}>
      <Text>Contador: {count}</Text>
      <Button title='Incrementar' onPress={handleIncremento} />
      <Button title='Decrementar TOTAL' onPress={handleDecremento} />
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
