import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    if (isValidInput()) {
      setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
    } else {
      showAlert();
    }
  };

  const handleSubtraction = () => {
    if (isValidInput()) {
      setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
    } else {
      showAlert();
    }
  };

  const isValidInput = () => {
    return (
      !isNaN(firstNumber) &&
      firstNumber.trim() !== '' &&
      !isNaN(secondNumber) &&
      secondNumber.trim() !== ''
    );
  };

  const showAlert = () => {
    Alert.alert('Virhe', 'Anna kelvolliset numerot molempiin kenttiin.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yksinkertainen laskin</Text>

      <TextInput
        style={styles.input}
        placeholder="Anna ensimmäinen numero"
        keyboardType="numeric"
        value={firstNumber}
        onChangeText={setFirstNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Anna toinen numero"
        keyboardType="numeric"
        value={secondNumber}
        onChangeText={setSecondNumber}
      />

      <View style={styles.buttonContainer}>
        <Button title="+" onPress={handleAddition} />
        <Button title="-" onPress={handleSubtraction} />
      </View>

      {result !== null && (
        <Text style={styles.result}>Tulos: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
