import styles from '../../../styles'
import { Text, View } from '@react-pdf/renderer'

export const SkillItem = ({ name, fillSkill }) => {
  return (
    <View style={styles.skill__item__container}>
      <Text style={styles.skill__item__text}>{name}</Text>
      <View style={styles.skill__item}>
        <View style={[styles.skill__item__fill, { width: fillSkill }]}></View>
      </View>
    </View>
  )
}
