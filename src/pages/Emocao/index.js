import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Emocao = ({ navigation }) => {
  const [entries, setEntries] = useState([
    {
      id: '1',
      date: '25 de Maio 2024',
      time: '02:23 pm',
      text: 'Hoje, estou transbordando de alegria e euforia! Sinto-me como se estivesse flutuando nas nuvens, com um sorriso permanente no rosto.',
      icon: 'happy-outline',
    },
    
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [currentEntry, setCurrentEntry] = useState({ text: '', icon: 'happy-outline' });
  const [editingId, setEditingId] = useState(null);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleGoHome = () => {
    navigation.navigate('Inicial'); 
  };

  const handleAddEntry = () => {
    setCurrentEntry({ text: '', icon: 'happy-outline' });
    setEditingId(null);
    setModalVisible(true);
  };

  const handleEditEntry = (entry) => {
    setCurrentEntry(entry);
    setEditingId(entry.id);
    setModalVisible(true);
  };

  const handleDeleteEntry = (id) => {
    setEntries(entries.filter(entry => entry.id !== id));
  };

  const handleSaveEntry = () => {
    if (editingId) {
      setEntries(entries.map(entry => 
        entry.id === editingId ? { ...entry, ...currentEntry } : entry
      ));
    } else {
      const newEntry = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('pt-BR'),
        time: new Date().toLocaleTimeString('pt-BR'),
        ...currentEntry,
      };
      setEntries([newEntry, ...entries]);
    }
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <ScrollView>
        <Text style={styles.title}>Conte-nos o que você está sentindo hoje.</Text>

        {entries.map((entry) => (
          <View key={entry.id} style={styles.entry}>
            <View style={styles.entryHeader}>
              <Ionicons name={entry.icon} size={24} color="#000" />
              <Text style={styles.entryDate}>{entry.date}</Text>
            </View>
            <Text style={styles.entryTime}>{entry.time}</Text>
            <Text style={styles.entryText}>{entry.text}</Text>
            <View style={styles.entryActions}>
              <TouchableOpacity onPress={() => handleEditEntry(entry)}>
                <Ionicons name="pencil" size={24} color="#0094DB" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteEntry(entry.id)}>
                <Ionicons name="trash" size={24} color="#FF0000" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomMenu}>
        <TouchableOpacity style={styles.menuItem} onPress={handleGoHome}>
          <Ionicons name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleAddEntry}>
          <Ionicons name="add-circle" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="notifications" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setCurrentEntry({ ...currentEntry, text })}
              value={currentEntry.text}
              placeholder="Como você está se sentindo?"
              multiline
            />
            <View style={styles.iconSelector}>
              <TouchableOpacity onPress={() => setCurrentEntry({ ...currentEntry, icon: 'happy-outline' })}>
                <Ionicons name="happy-outline" size={24} color={currentEntry.icon === 'happy-outline' ? '#0094DB' : '#000'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCurrentEntry({ ...currentEntry, icon: 'sad-outline' })}>
                <Ionicons name="sad-outline" size={24} color={currentEntry.icon === 'sad-outline' ? '#0094DB' : '#000'} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveEntry}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    backgroundColor: '#0094DB',
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
  entryActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  bottomMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#0094DB',
    paddingVertical: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  menuItem: {
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  input: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    textAlignVertical: 'top',
  },
  iconSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Emocao;