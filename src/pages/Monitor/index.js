import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Svg, Circle, Text as SvgText } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'; 

const ProgressBar = ({ progress, label }) => (
  <View style={styles.progressContainer}>
    <Text style={styles.progressLabel}>{label}</Text>
    <View style={styles.progressBarContainer}>
      <View style={[styles.progressBar, { width: `${progress}%` }]} />
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  </View>
);

const CircularProgress = ({ progress, label, size = 100 }) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={styles.circularProgressContainer}>
      <Svg height={size} width={size}>
        <Circle
          stroke="#E5E7EB"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="#3B82F6"
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          rotation="-90"
          originX={size / 2}
          originY={size / 2}
        />
        <SvgText
          x={size / 2}
          y={size / 2 + 5}
          textAnchor="middle"
          fill="#1E40AF"
          fontSize="18"
          fontWeight="bold"
        >
          {progress}%
        </SvgText>
      </Svg>
      <Text style={styles.circularProgressLabel}>{label}</Text>
    </View>
  );
};

const Monitor = () => {
  const navigation = useNavigation(); 

  
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Icon name="chevron-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Monitoramento de Saúde</Text>
      </View>
      <ScrollView style={styles.content}>
        <ProgressBar progress={80} label="Nível de saúde" />
        <ProgressBar progress={60} label="Tabagismo" />
        <ProgressBar progress={40} label="Obesidade" />
        <ProgressBar progress={20} label="Postura" />
        <View style={styles.circularProgressRow}>
          <CircularProgress progress={80} label="Saúde" />
          <CircularProgress progress={47} label="Fit" />
        </View>
      </ScrollView>      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0094DB',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1f2937',
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  progressContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  progressLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 8,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
    backgroundColor: '#BFDBFE',
    borderRadius: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 10,
  },
  progressText: {
    position: 'absolute',
    right: 8,
    color: '#1E40AF',
    fontWeight: 'bold',
  },
  circularProgressRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  circularProgressContainer: {
    alignItems: 'center',
  },
  circularProgressLabel: {
    marginTop: 8,
    fontSize: 16,
    color: '#1E40AF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#BFDBFE',
  },
});

export default Monitor;
