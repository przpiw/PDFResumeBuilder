import { EmploymentHistoryItem } from './EmploymentHistoryItem'
import { Text, View } from '@react-pdf/renderer'
import Divider from './Divider'

// const responsibilitiesArray = [
//   '• Participating in daily stand up meetings, led by our Scrum Master',
//   '• Utilizing the MEAN stack to enhance and maintain our banking platform',
//   '• Conducting code peer reviews with other members in my team',
//   '• Participating in product demos ',
//   '• Documenting all code changes',
// ]

const EmploymentHistory = ({ items }) => {
  return (
    <View style={{ paddingTop: '20px' }}>
      <Text
        style={{
          color: '#000',
          fontSize: '15',
        }}
      >
        Employment History
      </Text>
      <Divider />
      {items.map((item) => (
        <EmploymentHistoryItem
          text={item.position}
          date={item.date}
          description={item.description}
          responsibilities={item.responsibilities}
        />
      ))}
    </View>
  )
}

export default EmploymentHistory
