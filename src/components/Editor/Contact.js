import TextInput from './TextInput'
import { useState, useContext } from 'react'
import { BuilderContext } from './../../App'
import ActionMenu from './ActionMenu'

const Contact = () => {
  const newItem = {
    text: '',
  }
  const ctx = useContext(BuilderContext)
  const [contact, setContact] = useState(ctx.getComponentData('Contact'))

  const handleChange = (i, e) => {
    const modifiedItem = {
      ...contact.items[i],
      text: e.target.value,
    }
    contact.items.splice(i, 1, modifiedItem)
  }
  const handleAddClick = () => {
    setContact({
      ...contact,
      items: [...contact.items, newItem],
    })
  }
  const handleRemoveClick = () => {
    setContact({
      ...contact,
      items: contact.items.filter(
        (item, index) => index < contact.items.length - 1
      ),
    })
  }
  const handleSaveClick = () => ctx.updateInfo(contact)

  return (
    <div>
      {contact.items.map((item, index) => (
        <TextInput
          key={index}
          placeholder='Custom field'
          defaultValue={item.text}
          handleChange={(e) => handleChange(index, e)}
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

export default Contact
