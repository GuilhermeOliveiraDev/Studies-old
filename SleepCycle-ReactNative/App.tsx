import { StatusBar } from 'expo-status-bar';

import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './src/global/styles';

import { Line } from './src/components/Line';

import { themes } from './src/global/themes';

import { useEffect, useState } from 'react';

export default function App() {

  const [asleepId, setAsleepId] = useState (2)
  const [bedId, setBedId] = useState (0)
  const [date, setDate] = useState (new Date())
  const hora = date.getHours()
  const minuto = date.getMinutes()
  const segundo = date.getSeconds()

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
    
  const asleepOptions = [
    {value: 5, title:'5 minutos'},
    {value: 10, title:'10 minutos'},
    {value: 15, title:'15 minutos'},
    {value: 20, title:'20 minutos'},
    {value: 30, title:'30 minutos'},
  ]

  const bedOptions = [
    {value:0, title:' Agora'},
    {value:15, title:'15 minutos'},
    {value:30, title:'30 minutos'},
    {value:60, title:'1 hora'},
    {value:120, title:'2 horas'},
  ]

  const beforeSleep = asleepOptions[asleepId].value + bedOptions[bedId].value;
  const sleepTimes = [
    {value:90, title:'1:30 horas de sono'},
    {value:180, title:'3 horas de sono'},
    {value:270, title:'4:30 horas de sono'},
    {value:360, title:'6 horas de sono'},
    {value:450, title:'7:30 horas de sono'},
    {value:540, title:'9 horas de sono'},
  ];

    const calcTotal = (sleep: number) => {
      const minAtual = hora * 60 + minuto;
      const totalMin = minAtual + asleepOptions[asleepId].value + bedOptions[bedId].value + sleep;
      const totalHora = Math.floor(totalMin / 60);
      const totalMinResto = totalMin % 60;
      return `${totalHora < 10 ? '0' + totalHora : totalHora}:${totalMinResto < 10 ? '0' + totalMinResto : totalMinResto}`;
    };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SleepCycle</Text>
      <Text style={styles.hour}>{hora < 10 ? '0' + hora : hora}:{minuto < 10 ? '0' + minuto : minuto}:{segundo < 10 ? '0' + segundo : segundo}</Text>
      <View style={styles.appBox}>
        <Line 
        lineColor={themes.color.highlight}
        />
        <Text style={styles.h2}>Quanto tempo demora para você adormecer? </Text>
        <View style={styles.optionsBox}>
        {asleepOptions.map((asleepOption, asleepIndex) => (
            <TouchableOpacity key={asleepIndex} style={asleepId==asleepIndex?styles.optionSelected:styles.option} onPress={() => setAsleepId(asleepIndex)}><Text style={styles.text}>{asleepOption.title}</Text></TouchableOpacity>
          ))}
        </View>
        <Text style={styles.h2}>Quando você quer ir para a cama? </Text>
        <View style={styles.optionsBox}>
        {bedOptions.map((bedOption, bedIndex) => (
            <TouchableOpacity key={bedIndex} style={bedId==bedIndex?styles.optionSelected:styles.option} onPress={() => setBedId(bedIndex)}><Text style={styles.text}>{bedOption.title}</Text></TouchableOpacity>
          ))}
        </View>
        <Text style={styles.h2}>Horários ideais para acordar:</Text>
        <View style={styles.resultsBox}>
          {sleepTimes.map((sleepTime, sleepIndex) => (
            <View key={sleepIndex} style={styles.result}>
              <Text style={styles.hour}>{calcTotal(sleepTime.value)}</Text>
              <Text style={styles.text}>{sleepTime.title}</Text>
            </View>
          ))}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
