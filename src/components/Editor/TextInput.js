const TextInput = ({
  name,
  style,
  placeholder,
  defaultValue,
  isDisabled,
  type,
  handleChange,
}) => {
  return (
    <div className={`w-full ${style}`}>
      <input
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={`w-full  border-2 border-gray-300 text-gray-900 shadow-lg px-3 py-2 rounded-lg focus:outline-none focus:border-indigo-500 ${
          isDisabled ? 'text-gray-600 bg-gray-200' : 'bg-white'
        }`}
        disabled={isDisabled}
        onChange={(e) => {
          handleChange(e)
        }}
        type={type}
      ></input>
    </div>
  )
}

export default TextInput
