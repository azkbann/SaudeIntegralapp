import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { Menu, User, Calendar, Activity, HelpCircle, ChevronDown, BookmarkMinus, Home, X } from 'lucide-react-native'; // Importando o ícone X
import { useNavigation } from '@react-navigation/native'; // Importando o hook de navegação

const Inicial = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigation(); // Inicializando o hook de navegação

  // Função para navegar para a tela desejada
  const navigateTo = (screen) => {
    setIsMenuOpen(false); // Fecha o menu ao navegar
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      {/* Hamburger menu */}
      {isMenuOpen && (
        <View style={styles.menu}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setIsMenuOpen(false)}>
            <X size={24} style={styles.closeIcon} />
          </TouchableOpacity>
          <View style={styles.menuContent}>
            <Text style={styles.menuTitle}>Menu</Text>
            <View>
              {['Perfil', 'Agendamentos', 'Monitoramento', 'Suporte'].map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.menuItem}
                  onPress={() => {
                    const screens = ['Perfil', 'AgendamentosHistorico', 'Monitor', 'Suporte'];
                    navigateTo(screens[index]);
                  }}
                >
                  {index === 0 && <User size={20} style={styles.menuIcon} />}
                  {index === 1 && <Calendar size={20} style={styles.menuIcon} />}
                  {index === 2 && <Activity size={20} style={styles.menuIcon} />}
                  {index === 3 && <HelpCircle size={20} style={styles.menuIcon} />}
                  <Text style={styles.menuText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      )}

      {/* Main content */}
      <View style={styles.mainContent}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} style={styles.headerIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Home</Text>
          <View style={styles.headerPlaceholder} />
        </View>

        {/* Dashboard content */}
        <ScrollView style={styles.scrollView}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Saúde Integral</Text>
              <View style={styles.cardIcons}>
                <User size={24} />
                <HelpCircle size={24} />
              </View>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTotal}>999 total</Text>
              <View style={styles.cardStats}>
                <Text style={styles.cardNumber}>99 <Text style={styles.cardDays}>dias</Text></Text>
                <Text style={styles.cardRecord}>99 record</Text>
              </View>
              <ChevronDown size={24} style={styles.cardIcon} />
            </View>
          </View>

          <Text style={styles.greeting}>Olá, Juliana!</Text>
          <Text style={styles.greetingText}>Veja aqui as novidades do mundo da saúde.</Text>

          <Text style={styles.sectionTitle}>Pra você</Text>
          <View style={styles.grid}>
            <View style={styles.cardItem}>
              <Image source={{ uri: 'https://medfocus.com.br/wp-content/uploads/2023/10/mulher-bonita-e-esportista-fazendo-exercicios-de-ioga-no-parque-2048x1365.jpg' }} style={styles.image} />
              <Text style={styles.cardItemText}>5 dicas para manter a saúde mental no topo em 2024</Text>
            </View>
            <View style={styles.cardItem}>
              <Image source={{ uri: 'https://conteudodoc.cuidadospelavida.com.br/wp-content/uploads/2023/10/47487.jpg' }} style={styles.image} />
              <Text style={styles.cardItemText}>5 dicas para manter a saúde física no topo em 2024</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Destaques</Text>
          {/* Placeholder for more content */}
        </ScrollView>

        {/* Footer navigation */}
        <View style={styles.footer}>
          <Home size={24} />
          <Activity size={24} />
          <BookmarkMinus size={24} />
          <HelpCircle size={24} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0094DB',
    flexDirection: 'row',
  },
  menu: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 200, // Largura reduzida do menu
    backgroundColor: '#1f2937', // Cor de fundo azul
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    zIndex: 20,
    transform: [{ translateX: 0 }], // Você pode animar isso com base no estado isMenuOpen
    padding: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 30,
  },
  closeIcon: {
    color: '#fff', // Cor do ícone de fechar
  },
  menuContent: {
    marginTop: 48, // Ajustar com base na altura do botão de fechar
  },
  menuTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff', // Cor do texto do título do menu
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  menuIcon: {
    marginRight: 8,
    color: '#fff', // Cor dos ícones no menu
  },
  menuText: {
    color: '#fff', // Cor do texto no menu
    fontSize: 16,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    backgroundColor: '#1f2937',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcon: {
    color: '#fff',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
  },
  headerPlaceholder: {
    width: 24,
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#1f2937',
    borderRadius: 8,
    padding: 24,
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardTotal: {
    color: '#fff',
    fontSize: 16,
  },
  cardStats: {
    alignItems: 'center',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  cardDays: {
    fontSize: 14,
  },
  cardRecord: {
    color: '#fff',
    fontSize: 16,
  },
  cardIcon: {
    color: '#fff',
    marginTop: 16,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
    color: 'white'
  },
  greetingText: {
    fontSize: 16,
    marginBottom: 16,
    color: 'white',
    fontWeight: 'bold'
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: 'white'
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  cardItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: '48%',
    marginBottom: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 128,
  },
  cardItemText: {
    padding: 8,
    fontSize: 14,
  },
  footer: {
    backgroundColor: '#0094DB',
    borderTopWidth: 0,
    borderTopColor: '#e5e7eb',
    paddingVertical: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Inicial;
