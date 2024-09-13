import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { adicionarConsulta } from '../../redux/Consultaslice';

const Agconsultas = ({ navigation }) => {
  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [mostrarTicket, setMostrarTicket] = useState(false);
  const dispatch = useDispatch();

  const handleConfirmar = () => {
    if (dataSelecionada !== null && horarioSelecionado !== null) {
      
      const novaConsulta = {
        data: ['seg', 'ter', 'qua', 'qui', 'sex', 'sab'][dataSelecionada], 
        horario: ['09:00', '10:20', '11:40', '14:00', '15:20', '16:40'][horarioSelecionado], 
      };

      
      dispatch(adicionarConsulta(novaConsulta));
      
      
      setMostrarTicket(true);
      setTimeout(() => {
        navigation.navigate('AgendamentosHistorico');
      }, 1500); 
    } else {
      alert('Por favor, selecione a data e o horário.');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.botaoVoltar}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.tituloHeader}>Voltar</Text>
        </View>

        <Text style={styles.tituloSecao}>Você está agendando com:</Text>

        <View style={styles.cartaoPerfil}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0urrT8399q1f-TsFeTGkEfR-iUMzJd-qLYw&s' }}
            style={styles.imagemPerfil}
          />
          <View style={styles.infoPerfil}>
            <Text style={styles.nomePerfil}>Ana Lúcia</Text>
            <Text style={styles.descricaoPerfil}>Estudante de Psicologia</Text>
            <View style={styles.containerAvaliacao}>
              {[...Array(5)].map((_, i) => (
                <Text key={i} style={styles.estrela}>★</Text>
              ))}
            </View>
          </View>
          <View style={styles.containerPreco}>
            <Text style={styles.preco}>R$ 25,00</Text>
            <Text style={styles.duracao}>60min</Text>
            <Text style={styles.localizacao}>remoto</Text>
          </View>
        </View>

        <Text style={styles.tituloSecao}>O melhor dia para você é:</Text>
        <ScrollView horizontal style={styles.containerData}>
          {['seg\n12', 'ter\n13', 'qua\n14', 'qui\n15', 'sex\n16', 'sab\n17'].map((dia, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.botaoData,
                dataSelecionada === index && styles.botaoDataSelecionado
              ]}
              onPress={() => setDataSelecionada(index)}
            >
              <Text style={styles.textoData}>{dia}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Text style={styles.tituloSecao}>O melhor horário para você é:</Text>
        <View style={styles.containerHorario}>
          {['09:00', '10:20', '11:40', '14:00', '15:20', '16:40'].map((horario, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.botaoHorario,
                horarioSelecionado === index && styles.botaoHorarioSelecionado
              ]}
              onPress={() => setHorarioSelecionado(index)}
            >
              <Text style={styles.textoHorario}>{horario}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.tituloSecao}>Forma de pagamento:</Text>
        <View style={styles.containerPagamento}>
          <Text style={styles.metodoPagamento}>Transferência via PIX</Text>
          <TouchableOpacity>
            <Text style={styles.mudarPagamento}>mudar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.tituloSecao}>Resumo do agendamento</Text>

        
        <TouchableOpacity style={styles.botaoConfirmar} onPress={handleConfirmar}>
          <Text style={styles.textoBotaoConfirmar}>Confirmar Consulta</Text>
        </TouchableOpacity>

        
        {mostrarTicket && (
          <TouchableOpacity style={styles.botaoTicket}>
            <Text style={styles.textoBotaoTicket}>✔ Agendamento Efetuado</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  botaoVoltar: {
    color: 'white',
    fontSize: 24,
    marginRight: 10,
  },
  tituloHeader: {
    color: 'white',
    fontSize: 18,
  },
  tituloSecao: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10,
  },
  cartaoPerfil: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagemPerfil: {
    width: 65,
    height: 65,
    borderRadius: 25,
  },
  infoPerfil: {
    marginLeft: 15,
    flex: 1,
  },
  nomePerfil: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descricaoPerfil: {
    fontSize: 14,
    color: 'gray',
  },
  containerAvaliacao: {
    flexDirection: 'row',
    marginTop: 5,
  },
  estrela: {
    color: 'gold',
    fontSize: 16,
  },
  containerPreco: {
    alignItems: 'flex-end',
  },
  preco: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  duracao: {
    fontSize: 14,
    color: 'gray',
  },
  localizacao: {
    fontSize: 14,
    color: 'gray',
  },
  containerData: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  botaoData: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoDataSelecionado: {
    backgroundColor: '#4CAF50', 
  },
  textoData: {
    textAlign: 'center',
  },
  containerHorario: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  botaoHorario: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '30%',
    alignItems: 'center',
  },
  botaoHorarioSelecionado: {
    backgroundColor: '#4CAF50', 
  },
  textoHorario: {
    textAlign: 'center',
  },
  containerPagamento: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
  },
  metodoPagamento: {
    fontSize: 16,
  },
  mudarPagamento: {
    color: '#1E90FF', 
    fontSize: 14,
  },
  botaoConfirmar: {
    backgroundColor: '#4CAF50', 
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotaoConfirmar: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoTicket: {
    backgroundColor: '#1f2937', 
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotaoTicket: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Agconsultas;
