import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

const ExpenseList = ({ expenses, deleteExpense }) => {
  const renderItem = ({ item, index }) => (
    <View style={styles.expenseItem}>
      <Text>{item.description}</Text>
      <Text>${item.amount.toFixed(2)}</Text>
      <Button title="Delete" color="#800000" onPress={() => deleteExpense(index)} />
    </View>
  );

  return (
    <FlatList
      data={expenses}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default ExpenseList;
