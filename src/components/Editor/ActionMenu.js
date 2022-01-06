import { Add } from './Icons/Add'
import { Remove } from './Icons/Remove'
const ActionMenu = ({ handleSaveClick, handleAddClick, handleRemoveClick }) => {
  return (
    <div className='flex py-3 flex-row justify-between'>
      <button
        className='  text-white  font-bold text-sm h-7 px-4 rounded-lg w-full flex items-center justify-center sm:w-auto bg-sky-500 dark:highlight-white/20 hover:bg-sky-400 '
        onClick={handleSaveClick}
      >
        save
      </button>
      <div className='flex flex-row pt-[3px]'>
        <Add
          color='#d1d5db'
          handleClick={handleAddClick}
          // handleClick={(e) => {
          //   setEducation({
          //     ...education,
          //     items: [...education.items, newItem],
          //   })
          // }}
        />

        <Remove
          color='#d1d5db'
          handleClick={handleRemoveClick}
          // handleClick={() => {
          //   setEducation({
          //     ...education,
          //     items: education.items.filter(
          //       (item, index) => index < education.items.length - 1
          //     ),
          //   })
          // }}
        />
      </div>
    </div>
  )
}

export default ActionMenu
