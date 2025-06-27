import React from 'react'

const ButtonComp = ({text, bg, shadow, onclick}) => {
  return (
    <button
    type="button"
    onClick={onclick}
    className={`p-[10px] border-none flex items-center justify-center text-[#1a2a33 font-bold text-sm cursor-pointer rounded-[10px] w-full`}
    style={{
      backgroundColor:bg,
      boxShadow: shadow,
    }}
    >
      {text}

    </button>
  )
}

export default ButtonComp


// import React from 'react'
// import { Link } from 'react-router-dom';

// const ButtonComp = ({text, bg, shadow, onclick}) => {
//   return (
//    <button type='button' onclick={onclick} className={`p-[10px] border-none flex items-center justify-center text-[#1a2a33] 
//    font-bold text-sm cursor-pointer rounded-[10px] w-full`}
   
//    style={{
//     boxShadow:shadow,
//     backgroundColor:bg,
//   }}
//    >
//       {text}
//    </button>
//   );
// }

// export default ButtonComp
