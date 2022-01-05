import { EmploymentHistoryItem } from './EmploymentHistoryItem'
import { Text, View } from '@react-pdf/renderer'
import styles from '../../../styles'

const responsibilitiesArray = [
  '• Participating in daily stand up meetings, led by our Scrum Master',
  '• Utilizing the MEAN stack to enhance and maintain our banking platform',
  '• Conducting code peer reviews with other members in my team',
  '• Participating in product demos ',
  '• Documenting all code changes',
]

const EmploymentHistory = () => (
  <View style={{ paddingTop: '20px' }}>
    <Text
      style={{
        color: '#000',
        fontSize: '15',
      }}
    >
      Employment History
    </Text>
    <EmploymentHistoryItem
      text='Software Developer, Bank of E Network'
      date='November 2018 - March 2019'
      description='Bank of E Network is a Banking Financial Institution in
the US. As a Software Developer, I work on their banking platform in an Agile
environment. My daily responsibilities include: '
      responsibilities={responsibilitiesArray}
    />

    <EmploymentHistoryItem
      text='Software Developer, Bank of E Network'
      date='November 2018 - March 2019'
      description='Bank of E Network is a Banking Financial Institution in
the US. As a Software Developer, I work on their banking platform in an Agile
environment. My daily responsibilities include: '
      responsibilities={responsibilitiesArray}
    />
  </View>
)

export default EmploymentHistory
