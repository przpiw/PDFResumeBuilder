import { EmploymentHistoryItem } from './EmploymentHistoryItem'
import { Text, View } from '@react-pdf/renderer'
import Divider from './Divider'

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
      {items.map((item, index) => (
        <EmploymentHistoryItem
          key={index}
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
