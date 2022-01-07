import React, { useContext, useState, useEffect } from 'react'
import { BuilderContext } from './../../App'
import Education from './Education'
import Socials from './Socials'
import TextArea from './TextArea'
import TextSelect from './TextSelect'
import Skills from './Skills'
import EmploymentHistory from './EmploymentHistory'
import KeySkills from './KeySkills'
import Projects from './Projects'
import Profile from './Profile'
import Contact from './Contact'
import Certifications from './Certifications'
const ResumeEdit = () => {
  const ctx = useContext(BuilderContext)
  const [selected, setSelect] = useState('Education')
  const [tabSelected, setTabSelected] = useState('About')
  const handleSelect = (e) => {
    setSelect(e.target.value)
  }
  const profile = ctx.getComponentData('Profile')
  const handleChange = (e) => {
    ctx.updateInfo({ ...profile, about: e.target.value })
  }

  return (
    <>
      <div className='flex flex-row w-1/2 bg-gray-50'>
        <div className='flex flex-col w-1/2 px-5 py-16'>
          <Profile />
          <TextSelect
            options={[
              'Education',
              'Skills',
              'Certifications',
              'Contact',
              'Socials',
            ]}
            handleChange={handleSelect}
            style=' pb-3'
          />

          {selected === 'Socials' && <Socials />}
          {selected === 'Education' && <Education />}
          {selected === 'Skills' && <Skills />}
          {selected === 'Contact' && <Contact />}
          {selected === 'Certifications' && <Certifications />}
        </div>

        <div className='w-full'>
          <div className='mx-5 '>
            <ul className='flex cursor-pointer'>
              <li
                className={`py-2 mt-2  px-6  border-gray-300 border ${
                  tabSelected === 'About'
                    ? 'bg-white'
                    : 'bg-gray-200 text-gray-600'
                } rounded-t-lg `}
                onClick={() => setTabSelected('About')}
              >
                About
              </li>
              <li
                className={`py-2 mt-2 px-6 border-gray-300 border ${
                  tabSelected === 'Skills'
                    ? 'bg-white'
                    : 'bg-gray-200 text-gray-600'
                } rounded-t-lg 	`}
                onClick={() => setTabSelected('Skills')}
              >
                Skills
              </li>
              <li
                className={`py-2 mt-2 px-6 border-gray-300 border ${
                  tabSelected === 'Projects'
                    ? 'bg-white'
                    : 'bg-gray-200 text-gray-600'
                } rounded-t-lg`}
                onClick={() => setTabSelected('Projects')}
              >
                Projects
              </li>
            </ul>
          </div>
          {tabSelected === 'About' && (
            <TextArea
              placeholder='About'
              style='px-5 py-3'
              label='Profile'
              defaultValue={profile.about}
              handleChange={(e) => {
                handleChange(e)
              }}
            />
          )}
          {tabSelected === 'Skills' && <KeySkills />}
          {tabSelected === 'Projects' && <Projects />}

          <EmploymentHistory />
        </div>
      </div>
    </>
  )
}

export default ResumeEdit
