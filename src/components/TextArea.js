const TextArea = ({ label, placeholder, style, handleChange }) => {
  return (
    <div className={`w-full ${style}`}>
      <textarea
        onChange={(e) => {
          handleChange(e.target.value)
        }}
        placeholder={placeholder}
        className='w-full bg-white border-2 text-gray-900 border-gray-300 shadow-lg px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500'
        rows='6'
      ></textarea>
    </div>
  )
}

export default TextArea
