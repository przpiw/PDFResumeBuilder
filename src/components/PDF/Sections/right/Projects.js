import { Text, View } from '@react-pdf/renderer'
import Divider from './Divider'

const Projects = ({ projects }) => {
  return (
    <div>
      {projects.display && (
        <View style={{ paddingTop: '20px' }}>
          <Text
            style={{
              color: '#000',
              fontSize: '15',
            }}
          >
            {projects.header}
          </Text>
          <Divider />
          {projects.items.map((project, index) => (
            <View key={index}>
              <Text style={{ fontSize: '13', marginVertical: '4' }}>
                {project.name}
              </Text>
              <Text
                style={{ fontSize: '11', marginTop: '4', marginLeft: '15px' }}
              >
                {project.description}
              </Text>
            </View>
          ))}
        </View>
      )}
    </div>
  )
}

export default Projects
