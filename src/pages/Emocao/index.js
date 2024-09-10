import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Emocao = ({ navigation }) => {

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <ScrollView>
        <Text style={styles.title}>Conte-nos o que você está sentindo hoje.</Text>

        {/* Exemplo 1 */}
        <View style={styles.entry}>
          <View style={styles.entryHeader}>
            <Ionicons name="happy-outline" size={24} color="#000" />
            <Text style={styles.entryDate}>25 de Maio 2024</Text>
          </View>
          <Text style={styles.entryTime}>02:23 pm</Text>
          <Text style={styles.entryText}>
            Hoje, estou transbordando de alegria e euforia! Sinto-me como se estivesse flutuando nas nuvens, com um sorriso permanente no rosto.
          </Text>
        </View>

        {/* Exemplo 2 */}
        <View style={styles.entry}>
          <View style={styles.entryHeader}>
            <Ionicons name="happy-outline" size={24} color="#000" />
            <Text style={styles.entryDate}>25 de Maio 2024</Text>
          </View>
          <Text style={styles.entryTime}>10:03 am</Text>
          <Text style={styles.entryText}>
            Hoje, sinto-me em um estado de contentamento tranquilo. Não é uma emoção extrema, mas sim uma sensação agradável de estar satisfeito com a vida.
          </Text>
        </View>

        {/* Exemplo 3 */}
        <View style={styles.entry}>
          <View style={styles.entryHeader}>
            <Ionicons name="sad-outline" size={24} color="#000" />
            <Text style={styles.entryDate}>24 de Maio, 2024</Text>
          </View>
          <Text style={styles.entryTime}>09:30 am</Text>
          <Text style={styles.entryText}>
            Hoje, encontro-me em um estado de tédio persistente. Uma sensação de monotonia e falta de estímulo preenche meu dia.
          </Text>
        </View>

        {/* Exemplo 4 */}
        <View style={styles.entry}>
          <View style={styles.entryHeader}>
            <Ionicons name="sad-outline" size={24} color="#000" />
            <Text style={styles.entryDate}>23 de Maio, 2024</Text>
          </View>
          <Text style={styles.entryTime}>02:23 am</Text>
          <Text style={styles.entryText}>
            Hoje foi um dia desafiador para mim. Acordei com uma sensação de tristeza inexplicável, como se uma nuvem cinza pairasse sobre mim.
          </Text>
        </View>

        {/* Exemplo 5 (novo) */}
        <View style={styles.entry}>
          <View style={styles.entryHeader}>
            <Ionicons name="happy-outline" size={24} color="#000" />
            <Text style={styles.entryDate}>22 de Maio, 2024</Text>
          </View>
          <Text style={styles.entryTime}>03:45 pm</Text>
          <Text style={styles.entryText}>
            Hoje, estou me sentindo incrivelmente grato por todas as coisas boas na minha vida. Sinto uma calma interior e estou em paz comigo mesmo.
          </Text>
        </View>

        {/* Exemplo 6 (novo) */}
        <View style={styles.entry}>
          <View style={styles.entryHeader}>
            <Ionicons name="happy-outline" size={24} color="#000" />
            <Text style={styles.entryDate}>21 de Maio, 2024</Text>
          </View>
          <Text style={styles.entryTime}>11:15 am</Text>
          <Text style={styles.entryText}>
            Hoje, acordei revigorado e cheio de energia. Tenho uma sensação de entusiasmo e estou ansioso para enfrentar os desafios do dia.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#0094DB',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 20,
    marginBottom: 16,
  },
  backButtonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  entry: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  entryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  entryDate: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  entryTime: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  entryText: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Emocao;
