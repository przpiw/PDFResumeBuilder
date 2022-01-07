const TextSelect = ({ style, options, handleChange }) => {
  return (
    <div className={`w-full ${style}`}>
      <select
        onChange={(e) => {
          handleChange(e)
        }}
        className=' w-full bg-white border-2 text-gray-900 border-gray-300 shadow-lg px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500'
      >
        {options &&
          options.map((value, index) => <option key={index}>{value}</option>)}
      </select>
    </div>
  )
}

export default TextSelect
