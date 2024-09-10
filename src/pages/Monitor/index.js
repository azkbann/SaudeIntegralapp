import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Monitor = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitoramento de Saúde</Text>
      {/* Adicionar gráficos e dados */}
      <Text>Indicadores de Humor</Text>
      <Text>Dicas de Saúde</Text>
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

export default Monitor;
