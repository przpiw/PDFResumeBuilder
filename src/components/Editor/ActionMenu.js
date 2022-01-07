import { Add } from './Icons/Add'
import { Remove } from './Icons/Remove'
const ActionMenu = ({
  style,
  handleSaveClick,
  handleAddClick,
  handleRemoveClick,
}) => {
  return (
    <div className={`flex py-2 flex-row justify-between ${style}`}>
      <button
        className='py-1 px-6 border-gray-300  bg-gray-200 text-gray-600 rounded-lg shadow hover:bg-gray-300'
        onClick={handleSaveClick}
      >
        Save
      </button>
      <div className='flex flex-row pt-[5px]'>
        <Add color='#d1d5db' handleClick={handleAddClick} />

        <Remove color='#d1d5db' handleClick={handleRemoveClick} />
      </div>
    </div>
  )
}

export default ActionMenu
