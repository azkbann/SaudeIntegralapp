import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, TextInput, Alert } from 'react-native';
import { ChevronLeft, Edit, Trash2 } from 'lucide-react-native';

const AgendamentosHistorico = ({ navigation }) => {
  const [agendamentos, setAgendamentos] = useState([
    { id: 1, data: '12 de Maio 2024', hora: '09:00 pm', descricao: 'Consulta com Dr. Almir' },
    { id: 2, data: '13 de Maio 2024', hora: '10:20 am', descricao: 'Exame de sangue, Dr. Fábio' },
    { id: 3, data: '14 de Maio 2024', hora: '11:40 am', descricao: 'Fisioterapia, Dra.Silvana' },
    { id: 4, data: '15 de Maio 2024', hora: '14:00 am', descricao: 'Consulta com Dr. Wesley' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);
  const [novaData, setNovaData] = useState('');
  const [novaHora, setNovaHora] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');

  const abrirModal = (agendamento) => {
    setAgendamentoSelecionado(agendamento);
    setNovaData(agendamento.data);
    setNovaHora(agendamento.hora);
    setNovaDescricao(agendamento.descricao);
    setModalVisible(true);
  };

  const fecharModal = () => {
    setModalVisible(false);
    setAgendamentoSelecionado(null);
  };

  const editarAgendamento = () => {
    if (novaData && novaHora && novaDescricao) {
      setAgendamentos(agendamentos.map(agendamento => 
        agendamento.id === agendamentoSelecionado.id 
          ? { ...agendamento, data: novaData, hora: novaHora, descricao: novaDescricao } 
          : agendamento
      ));
      fecharModal();
    } else {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    }
  };

  const confirmarCancelamento = (id) => {
    Alert.alert(
      "Confirmar Cancelamento",
      "Tem certeza que deseja cancelar este agendamento?",
      [
        { text: "Não", style: "cancel" },
        { text: "Sim", onPress: () => cancelarAgendamento(id) }
      ]
    );
  };

  const cancelarAgendamento = (id) => {
    setAgendamentos(agendamentos.filter(agendamento => agendamento.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <ChevronLeft color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.tituloHeader}>Voltar</Text>
      </View>

      <Text style={styles.titulo}>Agendamentos</Text>
      <Text style={styles.subtitulo}>Histórico de consultas agendadas</Text>

      <ScrollView style={styles.listaAgendamentos}>
        {agendamentos.map((agendamento) => (
          <View key={agendamento.id} style={styles.cartaoAgendamento}>
            <View>
              <Text style={styles.dataHora}>{agendamento.data} - {agendamento.hora}</Text>
              <Text style={styles.descricao}>{agendamento.descricao}</Text>
            </View>
            <View style={styles.acoes}>
              <TouchableOpacity onPress={() => abrirModal(agendamento)} style={styles.botaoAcao}>
                <Edit color="#1E90FF" size={20} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => confirmarCancelamento(agendamento.id)} style={styles.botaoAcao}>
                <Trash2 color="#FF4136" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={fecharModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Editar Agendamento</Text>
            {agendamentoSelecionado && (
              <>
                <TextInput
                  style={styles.input}
                  onChangeText={setNovaData}
                  value={novaData}
                  placeholder="Nova Data"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={setNovaHora}
                  value={novaHora}
                  placeholder="Nova Hora"
                />
                <TextInput
                  style={styles.input}
                  onChangeText={setNovaDescricao}
                  value={novaDescricao}
                  placeholder="Nova Descrição"
                />
                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={editarAgendamento}
                >
                  <Text style={styles.textStyle}>Salvar Alterações</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonCancel]}
                  onPress={fecharModal}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  tituloHeader: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },
  titulo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitulo: {
    color: 'white',
    fontSize: 16,
    marginBottom: 20,
  },
  listaAgendamentos: {
    flex: 1,
  },
  cartaoAgendamento: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dataHora: {
    fontSize: 14,
    color: 'gray',
  },
  descricao: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  acoes: {
    flexDirection: 'row',
  },
  botaoAcao: {
    marginLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '100%',
    marginTop: 10,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonCancel: {
    backgroundColor: "#FF4136",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18
  }
});

export default AgendamentosHistorico;