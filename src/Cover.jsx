import React from 'react'

function Cover({songimg,title}) {
  return (
    <div className='overflow-clip shadow-md bg-black text-white font-bold inline-block'>
        <img src={songimg} style={{height:'280px'}} />
    </div>
  )
}

export default Cover