import React, { useContext } from 'react'
import { BuilderContext } from './../../App'
import EmploymentItem from './EmploymentItem'
import { Add } from './Icons/Add'
import { Remove } from './Icons/Remove'

const EmploymentHistory = () => {
  const ctx = useContext(BuilderContext)
  const [employmentInfo, setEmploymentInfo] = React.useState(
    ctx.getComponentData('Employment')
  )
  const newItem = {
    position: 'Software Engineering - University of Sydney',
    date: 'Mar 2017 - Dec 2019',
    description: '1',
    responsibilities: '',
  }
  const handleChange = (i, e) => {
    const targetName = e.target.name
    const modifiedItem = {
      ...employmentInfo.items[i],
      [targetName]: e.target.value,
    }
    employmentInfo.items.splice(i, 1, modifiedItem)
  }
  return (
    <div>
      <h1>Employment History</h1>
      {employmentInfo.items.map((item, index) => (
        <EmploymentItem index={index} data={item} handleChange={handleChange} />
      ))}

      <div className='px-5 flex flex-row justify-between'>
        <button
          className='  text-white  font-bold text-sm h-7 px-4 rounded-lg w-full flex items-center justify-center sm:w-auto bg-sky-500 dark:highlight-white/20 hover:bg-sky-400 '
          onClick={() => {
            ctx.updateInfo(employmentInfo)
          }}
        >
          save
        </button>
        <div className='flex flex-row pt-[3px]'>
          <Add
            color='#d1d5db'
            handleClick={(e) => {
              setEmploymentInfo({
                ...employmentInfo,
                items: [...employmentInfo.items, newItem],
              })
            }}
          />
          <Remove
            color='#d1d5db'
            handleClick={() =>
              setEmploymentInfo({
                ...employmentInfo,
                items: employmentInfo.items.filter(
                  (item, index) => index < employmentInfo.items.length - 1
                ),
              })
            }
          />
        </div>
      </div>
    </div>
  )
}

export default EmploymentHistory
