import { Text, View } from '@react-pdf/renderer'
import styles from '../../../styles'

const About = ({ text }) => (
  <View>
    <Text
      style={{
        color: '#000',
        fontSize: '15',
        paddingBottom: '10',
      }}
    >
      Profile
    </Text>
    <Text style={styles.main__text}>{text}</Text>
  </View>
)
export default About
