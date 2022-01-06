import styles from '../../../styles'
import About from './right/About'
import EmploymentHistory from './right/EmploymentHistory'
import { View } from '@react-pdf/renderer'
import { BuilderContext } from '../../../App'
import { useContext } from 'react'
import KeySkills from './right/KeySkills'

export const Right = () => {
  const ctx = useContext(BuilderContext)
  return (
    <View style={styles.section__right}>
      <About text={ctx.about} />
      <EmploymentHistory items={ctx.getComponentData('Employment').items} />
      <KeySkills skills={ctx.getComponentData('KeySkills')} />
    </View>
  )
}
