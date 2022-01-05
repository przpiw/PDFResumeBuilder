import styles from '../../styles'
import About from './right/About'
import EmploymentHistory from './right/EmploymentHistory'
import { View } from '@react-pdf/renderer'
import { BuilderContext } from '../../App'
import { useContext } from 'react'

export const Right = () => {
  const builder = useContext(BuilderContext)

  return (
    <View style={styles.section__right}>
      <About text={builder.about} />
      <EmploymentHistory />
    </View>
  )
}
