import { Text, View } from '@react-pdf/renderer'
import Divider from './Divider'

const KeySkills = ({ skills }) => {
  return (
    <View>
      {skills.display && (
        <View style={{ paddingTop: '10px' }}>
          <Text
            style={{
              color: '#000',
              fontSize: '15',
            }}
          >
            {skills.header}
          </Text>
          <Divider />
          <Text style={{ fontSize: '11', marginTop: '4' }}>{skills.text}</Text>
        </View>
      )}
    </View>
  )
}

export default KeySkills
