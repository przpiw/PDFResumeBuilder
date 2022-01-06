import TextInput from './TextInput'
import { useState, useContext } from 'react'
import { BuilderContext } from './../../App'
import ActionMenu from './ActionMenu'

const Skills = () => {
  const ctx = useContext(BuilderContext)
  const newItem = {
    text: 'Perl',
    level: '25',
  }
  const [skills, setSkills] = useState(ctx.getComponentData('Skills'))
  const handleChange = (i, e) => {
    const targetName = e.target.name
    const modifiedItem = {
      ...skills.items[i],
      [targetName]: e.target.value,
    }
    skills.items.splice(i, 1, modifiedItem)
    //ctx.updateInfo(education)
  }
  const handleAddClick = () => {
    setSkills({
      ...skills,
      items: [...skills.items, newItem],
    })
  }
  const handleRemoveClick = () => {
    setSkills({
      ...skills,
      items: skills.items.filter(
        (item, index) => index < skills.items.length - 1
      ),
    })
  }
  const handleSaveClick = () => ctx.updateInfo(skills)
  return (
    <div className='pt-10'>
      {skills.items.map((item, index) => (
        <div className='flex flex-row py-1'>
          <TextInput
            defaultValue={item.text}
            name='text'
            placeholder='Skill'
            index={index}
            handleChange={(e) => handleChange(index, e)}
          />
          <TextInput
            defaultValue={item.level}
            name='level'
            type='number'
            placeholder='%'
            style='w-1/3'
            index={index}
            handleChange={(e) => handleChange(index, e)}
          />
        </div>
      ))}

      <ActionMenu
        handleSaveClick={handleSaveClick}
        handleAddClick={handleAddClick}
        handleRemoveClick={handleRemoveClick}
      />
      <pre>{JSON.stringify(skills, null, 1)}</pre>
    </div>
  )
}

export default Skills
