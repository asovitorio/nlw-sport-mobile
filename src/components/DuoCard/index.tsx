import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { THEME } from '../../theme';
import { DuoInfo } from '../DuoInfo';
import {  GameController} from "phosphor-react-native";
import { styles } from './styles';
export interface DuoCardProps {
  id: string;
    name: string;
    week_days:string[];
    use_voice_channel: boolean;
    years_playing:number;
    hours_start: string;
    hours_end:string; 


}
interface Props {
  data:DuoCardProps;
  onConect:()=>void;
}

export function DuoCard({data,onConect}:Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label='Nome' value={data.name} />
      <DuoInfo label='Disponibilidade' value={`${data.week_days.length} dias`} />
      <DuoInfo label='Chamada de áudio?' value={data.use_voice_channel?"Sim":"Não"} colorValue={data.use_voice_channel?THEME.COLORS.SUCCESS:THEME.COLORS.ALERT}
       />
  <TouchableOpacity
  style={styles.button}
  onPress = {onConect}
  >
    <GameController 
    color={THEME.COLORS.TEXT}
    size={20}
    />
    <Text style={styles.buttonTitle}>
    Conctar
    </Text>
  </TouchableOpacity>
    </View>
    
  );
}