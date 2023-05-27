import React from 'react'

function SongList({songs,handleClick}) {
  return (
    <>
    <h1 className='py-6 bg-gray-300 rounded-t-lg px-3 font-bold'>Songs</h1>
        <div className='h-[500px] overflow-auto'>
            <div>
                {songs.map((song) => (
                    <div onClick={() => {
                        handleClick(song.title, song.image, song.completion, song.total, song.unique)
                    }} className='shadow-sm m-3 font-bold cursor-pointer hover:scale-y-[1.1] hover:border border-t-0 border-b-4-white hover:bg-white/40'>{song.title}</div>
                ))}
            </div>
        </div>
    </>
  )
}

export default SongList