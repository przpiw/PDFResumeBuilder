import ToggleButton from './ToggleButton'
import { useState, useContext } from 'react'
import { BuilderContext } from '../App'
import TextInput from './TextInput'

const Socials = () => {
  const builder = useContext(BuilderContext)

  const [socials, setSocials] = useState(builder.getSocials())
  const handleSocialChange = (type, property, value) => {
    const item = socials.items.filter((item) => item.type === type)
    const targetIndex = socials.items.indexOf(item[0])
    console.log(targetIndex)
    if (property === 'url')
      socials.items.splice(targetIndex, 1, { ...item[0], url: value })
    else if (property === 'enabled') {
      socials.items.splice(targetIndex, 1, { ...item[0], enabled: value })
    }
    console.log(socials)
  }

  // const getSocialInfo = (type) => {
  //   const item = socials.items.filter((item) => item.type === type)
  //   return item ? item[0] : ''
  // }

  return (
    <div className='flex flex-col space-evenly  my-6  '>
      <button onClick={() => builder.editInfo(socials)}>edit</button>
      <button
        onClick={() => handleSocialChange('LinkedIn', 'url', 'https://www.g.a')}
      >
        test
      </button>
      {socials &&
        socials.items.map((item) => (
          <div className='flex flex-col pb-2'>
            <a className=' text-gray-800 text-sm'>{item.type}</a>
            <div className='flex flex-row gap-x-5'>
              <TextInput
                placeholder={`${item.type} url`}
                defaultValue={item.url}
                handleChange={(e) => {
                  handleSocialChange(item.type, 'url', e.target.value)
                }}
              />

              <ToggleButton
                name={item.type}
                handleChange={handleSocialChange}
                defaultValue={item.enabled}
              />
            </div>
          </div>
        ))}
      <button
        onClick={() => {
          builder.editInfo(socials)
        }}
      >
        Save
      </button>
    </div>
  )
}

export default Socials
