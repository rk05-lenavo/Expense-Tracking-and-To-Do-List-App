import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={[
          styles.navItem,
          route.name === 'ToDoList' && styles.activeNavItem, // Highlight active tab
        ]}
        onPress={() => navigation.navigate('ToDoList')}
      >
        <Text style={[styles.navText, route.name === 'ToDoList' && styles.activeNavText]}>
          To-Do List
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[
          styles.navItem,
          route.name === 'ExpensePage' && styles.activeNavItem, // Highlight active tab
        ]}
        onPress={() => navigation.navigate('ExpensePage')}
      >
        <Text style={[styles.navText, route.name === 'ExpensePage' && styles.activeNavText]}>
          Expense Tracker
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    top: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#800000', // Maroon background
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#fff', // White bottom border
  },
  navItem: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#fff', // White border for tabs
    borderRadius: 10,
    flex: 1, // Allow items to take equal space
    alignItems: 'center', // Center content
  },
  activeNavItem: {
    backgroundColor: '#fff', // White background for active tab
    borderColor: '#800000', // Maroon border for active tab
  },
  navText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  activeNavText: {
    color: '#800000', // Maroon text color for active tab
  },
});

export default Navbar;
