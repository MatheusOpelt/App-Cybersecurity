
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ContentScreen = ({ route }) => {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>
        Aqui vai o conteúdo sobre {title}. (Este é um texto de exemplo. Você pode adicionar mais informações específicas sobre golpes, fake news e IA aqui.)
      </Text>
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
  content: {
    fontSize: 16,
  },
});

export default ContentScreen;
