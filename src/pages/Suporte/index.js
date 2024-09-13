import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const Suporte = () => {
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleOpenTicket = () => {
    // Implement ticket opening logic here
    console.log('Opening ticket with message:', message);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Icon name="chevron-left" size={24} color="white" />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>HELPDESK</Text>

        <View style={styles.emojiContainer}>
          <Icon name="frown" size={24} color="#4A5568" />
          <Icon name="meh" size={24} color="#4A5568" />
          <Icon name="smile" size={24} color="#4299E1" />
          <Icon name="smile" size={24} color="#4A5568" />
          <Icon name="heart" size={24} color="#4A5568" />
        </View>

        <Text style={styles.helpText}>Precisa de ajuda?</Text>
        <Text style={styles.subText}>Atendimento em até 24h</Text>

        <TextInput
          style={styles.input}
          multiline
          numberOfLines={6}
          placeholder="Escreva aqui..."
          placeholderTextColor="#A0AEC0"
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.button} onPress={handleOpenTicket}>
          <Text style={styles.buttonText}>Abrir chamado</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2937',
  },
  header: {
    padding: 16,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
  helpText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#A0AEC0',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    height: 150,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#385682',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Suporte;