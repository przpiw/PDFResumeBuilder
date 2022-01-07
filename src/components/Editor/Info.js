// import { useState, useRef, useContext } from 'react'
// import { BuilderContext } from '../../App'
// import ToggleButton from './ToggleButton'
// const Info = (header, text, date) => {
//   const builder = useContext(BuilderContext)
//   const textInputRef = useRef(null)
//   const dateInputRef = useRef(null)
//   const headerInputRef = useRef('')

//   const [info, setInfo] = useState({
//     header: '',
//     type: 'Info',
//     items: [],
//   })
//   const clearInput = () => {
//     textInputRef.current.value = ''
//     dateInputRef.current.value = ''
//     headerInputRef.current.value = ''
//   }
//   const addItem = () => {
//     const item = {
//       text: textInputRef.current.value,
//       date: dateInputRef.current.value,
//     }
//     const updatedInfo = {
//       ...info,
//       header: headerInputRef.current.value,
//       items: [...info.items, item],
//     }
//     setInfo(updatedInfo)
//     builder.addInfo(updatedInfo)
//     clearInput()
//   }
//   return (
//     <div>
//       <div className='flex items-center border-2 py-2 px-3 rounded-2xl mb-4'>
//         <input
//           className='pl-2 outline-none border-none'
//           type='text'
//           placeholder='Header'
//           ref={headerInputRef}
//         />
//       </div>

//       <div className='flex items-center border-2 py-2 px-3 rounded-2xl mb-4'>
//         <input
//           className='pl-2 outline-none border-none'
//           type='text'
//           placeholder='Text'
//           ref={textInputRef}
//         />
//       </div>
//       <div className='flex items-center border-2 py-2 px-3 rounded-2xl mb-4'>
//         <input
//           className='pl-2 outline-none border-none'
//           type='text'
//           placeholder='Date'
//           ref={dateInputRef}
//         />
//       </div>
//       <button
//         onClick={() => {
//           addItem()
//         }}
//       >
//         add
//       </button>
//       <ToggleButton />
//       <pre>{JSON.stringify(info, null, 1)}</pre>
//       <pre>{JSON.stringify(builder.infoState, null, 1)}</pre>
//     </div>
//   )
// }

// export default Info
