import { Text, View, Image } from '@react-pdf/renderer'
import styles from '../../../../styles'
import { useContext } from 'react'
import { BuilderContext } from '../../../../App'

const ProfileImage = ({ url }) => (
  <Image
    style={{
      width: '60px',
      height: '60px',
      borderRadius: '90',
      marginBottom: '10',
    }}
    src={url}
  />
)

export const ProfileContainer = ({ name, profession }) => {
  const builder = useContext(BuilderContext)
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20',
        height: '150',
        fontFamily: 'Helvetica-Bold',
      }}
    >
      <ProfileImage url={builder.profileImageUrl} />
      <View
        style={{
          justifyContent: 'center',
        }}
      >
        <Text style={styles.name_text}>{builder.name}</Text>
      </View>

      <Text style={styles.profession_text}>{builder.profession}</Text>

      <View
        style={{
          marginTop: '10px',
          marginBottom: '10px',
          width: '10%',
          height: '1px',
          backgroundColor: '#FFF',
          textAlign: 'center',
        }}
      />
    </View>
  )
}
