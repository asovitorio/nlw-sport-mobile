import { useState,useEffect } from 'react'
import { useRoute,useNavigation } from '@react-navigation/native'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GameParams } from '../../@types/navigation'
import { Background } from '../../components/Background'
import { styles } from './styles'
import {Entypo} from '@expo/vector-icons'
import { THEME } from '../../theme'
import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from '../../components/Heading'
import { DuoCard, DuoCardProps } from '../../components/DuoCard'
export function Game() {
const [duo,setDuo] = useState<DuoCardProps[]>([])
useEffect(()=>{
  fetch(`http://192.168.10.81:3333/games/${game.id}/ads`)
  .then(response => response.json())
  .then(data => setDuo(data))
},[])
  const route = useRoute()
  const game = route.params as GameParams
  const navigation = useNavigation()
  
  function hendleGoBack() {
    navigation.goBack()
  }

 
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
          <Entypo 
          name='chevron-thin-left'
          color={THEME.COLORS.CAPTION_300}
          size={20}
          onPress ={hendleGoBack}
           />
          </TouchableOpacity>
          <Image 
          source={logoImg}
          style = {styles.logo}
          />
          <View style={styles.right} />
        </View>
        <Image 
        source={{uri:game.banner}}
        style = {styles.banner}
        resizeMode="cover"
        />
        <Heading title={game.title} subtitle={'Conecte para jogar.'} />

      <FlatList 
      style={styles.containerList}
      data={duo}
      keyExtractor={item=>item.id}
      renderItem ={({item}) => (
        <DuoCard data={item} onConect = {()=>{console.log("conected")}}/>
        )}
        horizontal
        contentContainerStyle={duo.length>0? styles.contentListDuo:styles.listComponentText}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent = {() =>(
          <Text style={styles.emptyComponent}>
            Não há anúncios públicado para jogar ainda.
          </Text>
        )}
      />

      </SafeAreaView>
    </Background>
  )
}

