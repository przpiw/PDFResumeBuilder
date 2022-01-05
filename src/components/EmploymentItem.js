import TextArea from './TextArea'
import TextInput from './TextInput'
import { useState } from 'react'
const EmploymentItem = () => {
  const [isToggled, setIsToggled] = useState(false)
  return (
    <div className='px-5 py-3'>
      <button
        onClick={() => {
          setIsToggled(true)
        }}
      >
        Hide
      </button>
      <TextInput
        placeholder='Postion Title - Company'
        style='pb-2'
        isDisabled={isToggled}
      />
      {!isToggled ? (
        <div>
          <TextInput placeholder='Date From - To' style='pb-2' />
          <TextArea placeholder='Position Description' />
          <TextArea placeholder='Responsibilities' />
        </div>
      ) : (
        <button
          onClick={() => {
            setIsToggled(!isToggled)
          }}
        >
          Show
        </button>
      )}
    </div>
  )
}

export default EmploymentItem
