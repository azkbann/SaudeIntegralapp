import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

const BackButton = ({ onPress }) => (
  <TouchableOpacity style={styles.backButton} onPress={onPress}>
    <Ionicons name="arrow-back" size={24} color="white" />
    <Text style={styles.backButtonText}>Voltar</Text>
  </TouchableOpacity>
);

const ProfileCard = ({ name, image, description }) => (
  <View style={styles.profileCard}>
    <Image source={{ uri: image }} style={styles.profileImage} />
    <Text style={styles.profileName}>{name}</Text>
    <Text style={styles.profileDescription}>{description}</Text>
  </View>
);

const StatisticsSection = ({ musicas, consultas, meditacao }) => (
  <View style={styles.statisticsSection}>
    <View style={styles.statisticCard}>
      <Text style={styles.statisticValue}>{musicas}</Text>
      <Text style={styles.statisticLabel}>Músicas</Text>
    </View>
    <View style={styles.statisticCard}>
      <Text style={styles.statisticValue}>{consultas}</Text>
      <Text style={styles.statisticLabel}>Consultas</Text>
    </View>
    <View style={styles.statisticCard}>
      <Text style={styles.statisticValue}>{meditacao}</Text>
      <Text style={styles.statisticLabel}>Meditação</Text>
    </View>
  </View>
);

const HumorGraph = ({ data }) => {
  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#0094DB',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  return (
    <View style={styles.humorGraph}>
      <LineChart
        data={{
          labels: data.map((item) => item.name),
          datasets: [{ data: data.map((item) => item.value) }],
        }}
        width={350}
        height={200}
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </View>
  );
};

const Perfil = ({ navigation }) => {
  const [musicas] = useState(20);
  const [consultas] = useState(14);
  const [meditacao] = useState(34);
  const [humorData] = useState([
    { name: 'D', value: 4 },
    { name: 'S', value: 3 },
    { name: 'T', value: 2 },
    { name: 'Q', value: 1 },
    { name: 'Q', value: 1 },
    { name: 'S', value: 3 },
  ]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleNavigateEmocao = () => {
    navigation.navigate('Emocao');
  };

  const handleNavigateAgconsultas = () => {
    navigation.navigate('Agconsultas');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BackButton onPress={handleGoBack} />
      <ProfileCard
        name="Juliana Ferreira"
        image="https://w7.pngwing.com/pngs/535/294/png-transparent-avatar-face-female-people-profile-user-woman-avatar-user-icon.png"
        description="Estudante de Direito"
      />
      <StatisticsSection
        musicas={musicas}
        consultas={consultas}
        meditacao={meditacao}
      />

      
      <TouchableOpacity style={styles.button} onPress={handleNavigateAgconsultas}>
        <Text style={styles.buttonText}>Agendar Consultas</Text>
        <Ionicons name="arrow-forward" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>

      <HumorGraph data={humorData} />

      
      <TouchableOpacity style={styles.button} onPress={handleNavigateEmocao}>
        <Text style={styles.buttonText}>Diário de Emoções</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0094DB',
    padding: 16,
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
    fontWeight: 'bold'
  },
  profileCard: {
    backgroundColor: '#0094DB',
    borderRadius: 8,
    padding: 0,
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#FFF'
  },
  profileDescription: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  statisticsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statisticCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  statisticValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#0094DB'
    
  },
  statisticLabel: {
    color: '#666',
  },
  humorGraph: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  chart: {
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#FFF', 
    padding: 10,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: 'white',
    alignItems: 'center',
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 10,
    marginBottom: 20,
    position: 'relative', 
  },
  buttonText: {
    color: '#0094DB',
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute', 
    right: 10, 
  },
});

export default Perfil;