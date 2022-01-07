import { Text, View } from '@react-pdf/renderer'
import styles from '../../../../styles'

export const EmploymentHistoryItem = ({
  text,
  date,
  description,
  responsibilities,
}) => (
  <View style={{ paddingBottom: '20px' }}>
    <Text
      style={{
        color: '#000',
        fontSize: '13',
      }}
    >
      {text}
    </Text>
    <Text style={{ fontSize: '9', color: '#959ba6', paddingBottom: '5' }}>
      {date}
    </Text>
    <Text style={{ fontSize: '11' }}>{description}</Text>
    <Text style={{ fontSize: '11', marginLeft: '15px', marginTop: '4' }}>
      {responsibilities}
    </Text>
  </View>
)
