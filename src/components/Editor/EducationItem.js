import TextInput from './TextInput'
import TextArea from './TextArea'
import { useState } from 'react'
const EducationItem = ({ index, data, handleChange }) => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <div className='pt-5'>
      <TextArea
        placeholder='Field of Study - Institution'
        rows='2'
        style='pb-2'
        name='degree'
        defaultValue={data.degree}
        isDisabled={isToggled}
        handleChange={(e) => handleChange(index, e)}
      />

      <TextInput
        placeholder='Date '
        name='date'
        style='pb-2'
        defaultValue={data.date}
        handleChange={(e) => handleChange(index, e)}
      />
    </div>
  )
}

export default EducationItem
