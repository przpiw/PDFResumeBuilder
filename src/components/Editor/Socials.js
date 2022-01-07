import ToggleButton from './ToggleButton'
import { useState, useContext } from 'react'
import { BuilderContext } from './../../App'
import TextInput from './TextInput'

const Socials = () => {
  const ctx = useContext(BuilderContext)

  const [socials, setSocials] = useState(ctx.getSocials())

  const handleSocialChange = (type, property, value) => {
    const item = socials.items.filter((item) => item.type === type)
    const targetIndex = socials.items.indexOf(item[0])
    if (property === 'url')
      socials.items.splice(targetIndex, 1, { ...item[0], url: value })
    else if (property === 'enabled') {
      socials.items.splice(targetIndex, 1, { ...item[0], enabled: value })
    }
  }

  return (
    <div className='flex flex-col space-evenly  my-6  '>
      {socials &&
        socials.items.map((item, index) => (
          <div className='flex flex-col pb-2' key={index}>
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
        className=' w-20 py-1 px-6 border-gray-300  bg-gray-200 text-gray-600 rounded-lg shadow hover:bg-gray-300'
        onClick={() => ctx.updateInfo(socials)}
      >
        Save
      </button>
    </div>
  )
}

export default Socials
