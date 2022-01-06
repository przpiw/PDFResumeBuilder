import React, { useContext, useState, useEffect } from 'react'
import { BuilderContext } from './../../App'
import Education from './Education'
import EmploymentItem from './EmploymentItem'
import Socials from './Socials'
import TextArea from './TextArea'
import TextInput from './TextInput'
import TextSelect from './TextSelect'
import { Add } from './Icons/Add'
import { Remove } from './Icons/Remove'
import Skills from './Skills'
import EmploymentHistory from './EmploymentHistory'
import KeySkills from './KeySkills'
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
          <TextArea
            placeholder='Full name'
            handleChange={(e) => builder.setName(e.target.value)}
            style='pb-3'
            rows='2'
          />

          <TextInput
            placeholder='Profession'
            handleChange={(e) => builder.setProfession(e.target.value)}
            style='pb-3'
          />
          <TextSelect
            options={['Education', 'Skills', 'Contact', 'Socials']}
            handleChange={handleSelect}
            style=' pb-3'
          />

          {selected === 'Socials' && <Socials />}
          {selected === 'Education' && <Education />}
          {selected === 'Skills' && <Skills />}
        </div>

        <div className='w-full'>
          <h1>About</h1>
          <TextArea
            placeholder='About'
            style='px-5 py-3'
            label='Profile'
            handleChange={(e) => {
              builder.setAbout(e.target.value)
            }}
          />
          <KeySkills />
          <EmploymentHistory />
          {/* <pre>
            {JSON.stringify(builder.getComponentData('Employment'), null, 1)}
          </pre> */}
        </div>
      </div>
    </>
  )
}

export default ResumeEdit
