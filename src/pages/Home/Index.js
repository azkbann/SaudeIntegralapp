import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const TelaInicial = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Saúde Integral</Text>
        <View style={styles.userInfo}>
          <Text style={styles.daysNumber}>999</Text>
          <Text style={styles.daysText}>total</Text>
          <View style={styles.middleCircle}>
            <Text style={styles.centerDays}>99</Text>
            <Text style={styles.centerText}>dias</Text>
          </View>
          <Text style={styles.daysText}>recorde</Text>
          <Text style={styles.daysNumber}>99</Text>
        </View>
      </View>

      {/* Mensagem de boas-vindas */}
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Olá, Juliana!</Text>
        <Text style={styles.subText}>Veja aqui as novidades do mundo da saúde.</Text>
      </View>

      {/* Seção Pra Você */}
      <View style={styles.forYouSection}>
        <Text style={styles.sectionTitle}>Pra você</Text>
        <ScrollView horizontal>
          <TouchableOpacity style={styles.articleCard}>
            <Image
              source={{ uri: 'https://example.com/image1.jpg' }} // Substituir com URL de imagem
              style={styles.articleImage}
            />
            <Text style={styles.articleTitle}>
              5 dicas para manter a saúde mental no topo em 2024
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.articleCard}>
            <Image
              source={{ uri: 'https://example.com/image2.jpg' }} // Substituir com URL de imagem
              style={styles.articleImage}
            />
            <Text style={styles.articleTitle}>
              5 dicas para manter a saúde mental no topo em 2024
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Navegação no rodapé */}
      <View style={styles.footerNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text>🏠</Text> {/* Substituir por ícone */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>🩺</Text> {/* Substituir por ícone */}
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text>🔔</Text> {/* Substituir por ícone */}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#1B76D3',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  appTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  daysNumber: {
    color: '#FFF',
    fontSize: 24,
  },
  daysText: {
    color: '#FFF',
    fontSize: 12,
  },
  middleCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 50,
    height: 60,
    width: 60,
    marginHorizontal: 20,
  },
  centerDays: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B76D3',
  },
  centerText: {
    fontSize: 12,
    color: '#1B76D3',
  },
  welcomeContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontSize: 14,
    color: '#888',
  },
  forYouSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  articleCard: {
    marginRight: 10,
    width: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  articleImage: {
    width: '100%',
    height: 100,
  },
  articleTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  footerNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1B76D3',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navButton: {
    padding: 10,
  },
});

export default TelaInicial;
