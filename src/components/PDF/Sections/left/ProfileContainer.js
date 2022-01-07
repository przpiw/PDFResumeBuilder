import { Text, View, Image } from '@react-pdf/renderer'
import styles from '../../../../styles'

const ProfileImage = ({ url, display }) => (
  <>
    {display && (
      <Image
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '90',
        }}
        src={url}
      />
    )}
  </>
)

export const ProfileContainer = ({ name, profession, url, display }) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20',
        marginBottom: display ? '20px' : '-65px',
        height: '150',
        fontFamily: 'Helvetica-Bold',
      }}
    >
      <ProfileImage url={url} display={display} />
      <View
        style={{
          justifyContent: 'center',
        }}
      >
        <Text style={styles.name_text}>{name}</Text>
      </View>
      <Text style={styles.profession_text}>{profession}</Text>
      <View
        style={{
          marginTop: '10px',
          width: '10%',
          height: '1px',
          backgroundColor: '#FFF',
          textAlign: 'center',
        }}
      />
    </View>
  )
}
