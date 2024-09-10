import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Suporte = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suporte ao Usuário</Text>
      <Text>Entre em contato conosco para qualquer dúvida ou problema.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Suporte;
