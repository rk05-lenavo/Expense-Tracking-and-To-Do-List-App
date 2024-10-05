import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ExpenseForm = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = () => {
    if (description && amount) {
      addExpense({ description, amount: parseFloat(amount) });
      setDescription('');
      setAmount('');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Expense Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
      />
      <Button title="Add Expense" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#800000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
});

export default ExpenseForm;
