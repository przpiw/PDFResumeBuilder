import { useState, useContext } from 'react'
import { BuilderContext } from './../../App'
import ActionMenu from './ActionMenu'
import TextArea from './TextArea'
import TextInput from './TextInput'

const Certifications = () => {
  const ctx = useContext(BuilderContext)
  const newItem = {
    name: '',
    date: '',
  }
  const [certification, setCetification] = useState(
    ctx.getComponentData('Certifications')
  )
  const handleChange = (i, e) => {
    const targetName = e.target.name
    const modifiedItem = {
      ...certification.items[i],
      [targetName]: e.target.value,
    }
    certification.items.splice(i, 1, modifiedItem)
  }
  const handleAddClick = () => {
    setCetification({
      ...certification,
      items: [...certification.items, newItem],
    })
  }
  const handleRemoveClick = () => {
    setCetification({
      ...certification,
      items: certification.items.filter(
        (item, index) => index < certification.items.length - 1
      ),
    })
  }
  const handleSaveClick = () => ctx.updateInfo(certification)

  return (
    <div className='pt-6'>
      {certification.items.map((item, index) => (
        <div key={index}>
          <TextArea
            placeholder='Certification Type'
            rows='2'
            style='pb-2'
            name='name'
            defaultValue={item.name}
            handleChange={(e) => handleChange(index, e)}
          />

          <TextInput
            placeholder='Date '
            name='date'
            style='pb-2'
            defaultValue={item.date}
            handleChange={(e) => handleChange(index, e)}
          />
        </div>
      ))}

      <ActionMenu
        handleSaveClick={handleSaveClick}
        handleAddClick={handleAddClick}
        handleRemoveClick={handleRemoveClick}
      />
    </div>
  )
}

export default Certifications
