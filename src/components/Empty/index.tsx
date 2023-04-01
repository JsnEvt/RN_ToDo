import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import clipboard from '../../assets/Clipboard1x.png'


export function Empty() {
  return (
    <View style={styles.emptyContainer}>
      <Image source={clipboard} style={styles.image} />
      <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas.</Text>
      <Text style={[styles.textBold, styles.textRegular]}>Crie tarefas e organize suas atividades.</Text>
    </View>
  )
}