import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import logoImg from '../../assets/Logo1x.png';
import { theme } from '../../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} />
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Adicione uma nova atividade'
          placeholderTextColor={theme.colors.base.gray300}
        />
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons name='plus-circle-outline' size={22} color={theme.colors.base.gray100} />
        </TouchableOpacity>
      </View>
    </View>
  )
}