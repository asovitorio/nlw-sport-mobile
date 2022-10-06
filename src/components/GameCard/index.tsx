import { LinearGradient } from 'expo-linear-gradient'
import {
  TouchableOpacity,
  ImageBackground,
  TouchableOpacityProps,
   Text,
} from 'react-native'

import { THEME } from '../../theme'

import { styles } from './styles'

export interface GameCardProps {
  id: string
  title: string
  banner: string
  _count: {
    Ad: number
  }
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  return (
   
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{uri: data.banner}}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.Ad + " Anúncio(s)"}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
