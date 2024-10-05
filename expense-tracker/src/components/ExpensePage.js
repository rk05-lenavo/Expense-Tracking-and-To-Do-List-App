import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const ExpensePage = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Expense Tracker</Text>
      <ExpenseForm addExpense={addExpense} />
      <Text style={styles.total}>Total: ${totalAmount.toFixed(2)}</Text>
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    color: '#800000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  total: {
    fontSize: 18,
    textAlign: 'center',
    color: '#800000',
    marginTop: 20,
  },
});

export default ExpensePage;
