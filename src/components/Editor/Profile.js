import TextArea from './TextArea'
import TextInput from './TextInput'
import { useState, useContext } from 'react'
import { BuilderContext } from './../../App'
import ToggleButton from './ToggleButton'

const Profile = () => {
  const ctx = useContext(BuilderContext)
  const [profile, setProfile] = useState(ctx.getComponentData('Profile'))

  return (
    <div className='pb-11'>
      <TextArea
        placeholder='Full name'
        handleChange={(e) => setProfile({ ...profile, name: e.target.value })}
        style='pb-3'
        rows='2'
        defaultValue={profile.name}
      />

      <TextInput
        placeholder='Profession'
        handleChange={(e) =>
          setProfile({ ...profile, profession: e.target.value })
        }
        style='pb-3'
        defaultValue={profile.profession}
      />
      <div className='flex flex-row'>
        <TextInput
          placeholder='Profile Image Url'
          handleChange={(e) =>
            setProfile({ ...profile, profileImageURL: e.target.value })
          }
          style='pb-3 pr-3'
          defaultValue={profile.profileImageURL}
        />
        <ToggleButton
          defaultValue={profile.display}
          handleChange={(name, prop, isEnabled) => {
            ctx.updateInfo({ ...profile, display: isEnabled })
          }}
        />
      </div>
      <button
        className='  py-1 px-6 border-gray-300  bg-gray-200 text-gray-600 rounded-lg shadow hover:bg-gray-300'
        onClick={() => {
          ctx.updateInfo(profile)
        }}
      >
        Save
      </button>
    </div>
  )
}

export default Profile
