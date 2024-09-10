import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Agendamento = () => {
  const [specialty, setSpecialty] = useState('Cardiologia');
  const [doctor, setDoctor] = useState('Dr. João');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleConfirm = () => {
    // Exibir o resumo de agendamento
    setShowSummary(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Consulta</Text>
      
      <Text style={styles.label}>Você está agendando com:</Text>
      <Text style={styles.info}>{doctor} - {specialty}</Text>

      <Text style={styles.label}>O melhor dia para realizar seu agendamento é:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 10/09/2024"
        value={day}
        onChangeText={setDay}
      />

      <Text style={styles.label}>O melhor horário para você é:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 14:00"
        value={time}
        onChangeText={setTime}
      />

      <Text style={styles.label}>Forma de pagamento:</Text>
      <Picker
        selectedValue={paymentMethod}
        onValueChange={(itemValue) => setPaymentMethod(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Cartão de Crédito" value="Cartão de Crédito" />
        <Picker.Item label="Boleto" value="Boleto" />
        <Picker.Item label="Dinheiro" value="Dinheiro" />
      </Picker>

      <Button title="Confirmar Agendamento" onPress={handleConfirm} />

      {showSummary && (
        <View style={styles.summary}>
          <Text style={styles.summaryTitle}>Resumo do Agendamento</Text>
          <Text style={styles.summaryText}>Especialidade: {specialty}</Text>
          <Text style={styles.summaryText}>Doutor: {doctor}</Text>
          <Text style={styles.summaryText}>Data: {day}</Text>
          <Text style={styles.summaryText}>Horário: {time}</Text>
          <Text style={styles.summaryText}>Forma de Pagamento: {paymentMethod}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#0094DB'
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 3,
    borderColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
    
  },
  picker: {
    height: 50,
    marginBottom: 20,
    color: 'white',
    
  },
  summary: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,      
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 5,
        
  },
});

export default Agendamento;
