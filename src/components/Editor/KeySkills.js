import { BuilderContext } from './../../App'
import { useContext, useState } from 'react'
import TextArea from './TextArea'
const KeySkills = () => {
  const ctx = useContext(BuilderContext)

  const [skills, setSkills] = useState(ctx.getComponentData('KeySkills'))
  const handleChange = (e) => {
    setSkills({ ...skills, text: e.target.value })
  }

  return (
    <div>
      <h1>{skills.header}</h1>
      <TextArea
        placeholder='Key Skills'
        style='px-5 py-3'
        defaultValue={skills.text}
        handleChange={handleChange}
      />
      <button onClick={() => ctx.updateInfo(skills)}>update</button>
    </div>
  )
}

export default KeySkills
