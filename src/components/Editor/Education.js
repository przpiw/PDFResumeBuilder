import { useState, useContext } from 'react'
import { BuilderContext } from './../../App'
import ActionMenu from './ActionMenu'
import EducationItem from './EducationItem'

const Education = () => {
  const ctx = useContext(BuilderContext)
  const newItem = {
    degree: 'Software Engineering - University of Sydney',
    date: 'Mar 2017 - Dec 2019',
  }
  const [education, setEducation] = useState(ctx.getComponentData('Education'))
  const handleChange = (i, e) => {
    const targetName = e.target.name
    const modifiedItem = {
      ...education.items[i],
      [targetName]: e.target.value,
    }
    education.items.splice(i, 1, modifiedItem)
    //ctx.updateInfo(education)
  }
  const handleAddClick = () => {
    setEducation({
      ...education,
      items: [...education.items, newItem],
    })
  }
  const handleRemoveClick = () => {
    setEducation({
      ...education,
      items: education.items.filter(
        (item, index) => index < education.items.length - 1
      ),
    })
  }
  const handleSaveClick = () => ctx.updateInfo(education)

  return (
    <div className='pt-6'>
      {education.items.map((item, index) => (
        <EducationItem
          key={index}
          index={index}
          data={item}
          handleChange={handleChange}
        />
      ))}
      <ActionMenu
        handleSaveClick={handleSaveClick}
        handleAddClick={handleAddClick}
        handleRemoveClick={handleRemoveClick}
      />
    </div>
  )
}

export default Education
