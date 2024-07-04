
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Button title="Golpes e Fraudes Online" onPress={() => navigation.navigate('Content', { title: 'Golpes e Fraudes Online' })} />
      <Button title="Fake News" onPress={() => navigation.navigate('Content', { title: 'Fake News' })} />
      <Button title="Inteligência Artificial" onPress={() => navigation.navigate('Content', { title: 'Inteligência Artificial' })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default DashboardScreen;
