import React, { useContext, useState } from 'react'
import { BuilderContext } from '../App'
import EmploymentItem from './EmploymentItem'
import Info from './Info'
import Socials from './Socials'
import TextArea from './TextArea'
import TextInput from './TextInput'
import TextSelect from './TextSelect'
const ResumeEdit = () => {
  const builder = useContext(BuilderContext)
  const [selected, setSelect] = useState('Education')
  const handleSelect = (e) => {
    console.log(e.target.value)
    setSelect(e.target.value)
  }
  return (
    <>
      <div className='flex flex-row w-1/2'>
        <div className='flex flex-col w-1/2 px-5 py-10'>
          <TextInput
            placeholder='Full name'
            onChange={(e) => builder.setName(e.target.value)}
            style='pb-3'
          />

          <TextInput
            placeholder='Profession'
            onChange={(e) => builder.setProfession(e.target.value)}
            style='pb-3'
          />
          <TextSelect
            options={['Education', 'Skills', 'Contact', 'Socials']}
            handleChange={handleSelect}
            style=' pb-3'
          />

          {selected === 'Socials' && <Socials />}
        </div>

        <div className='w-full'>
          <h1>About</h1>
          <TextArea
            placeholder='About'
            style='px-5 py-3'
            label='Profile'
            handleChange={(text) => {
              builder.setAbout(text)
            }}
          />
          <h1>Employment History</h1>
          <EmploymentItem />
          <EmploymentItem />
        </div>
      </div>
    </>
  )
}

export default ResumeEdit
