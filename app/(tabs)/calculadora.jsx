import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(secondValue);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res;
    switch (operation) {
      case 'add':
        res = num1 + num2;
        break;
      case 'subtract':
        res = num1 - num2;
        break;
      case 'multiply':
        res = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          res = num1 / num2;
        } else {
          res = 'Cannot divide by zero';
        }
        break;
    }
    setResult(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFirstValue}
        value={firstValue}
        placeholder="Primeiro valor"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setSecondValue}
        value={secondValue}
        placeholder="Segundo valor"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4CAF50' }]}
          onPress={() => handleCalculation('add')}
        >
          <Text style={styles.buttonText}>Somar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF5722' }]}
          onPress={() => handleCalculation('subtract')}
        >
          <Text style={styles.buttonText}>Subtrair</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#2196F3' }]}
          onPress={() => handleCalculation('multiply')}
        >
          <Text style={styles.buttonText}>Multiplicar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#FF9800' }]}
          onPress={() => handleCalculation('divide')}
        >
          <Text style={styles.buttonText}>Dividir</Text>
        </TouchableOpacity>
      </View>
      {result !== null && (
        <Text style={styles.result}>{result}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '80%',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#333',
  },
});

export default App;