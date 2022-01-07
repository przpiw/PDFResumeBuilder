import TextInput from './TextInput'
import TextArea from './TextArea'
const EducationItem = ({ index, data, handleChange }) => {
  return (
    <div className='pt-5' key={index}>
      <TextArea
        placeholder='Field of Study - Institution'
        rows='2'
        style='pb-2'
        name='degree'
        defaultValue={data.degree}
        handleChange={(e) => handleChange(index, e)}
      />

      <TextInput
        placeholder='Date '
        name='date'
        style='pb-2'
        defaultValue={data.date}
        handleChange={(e) => handleChange(index, e)}
      />
    </div>
  )
}

export default EducationItem
