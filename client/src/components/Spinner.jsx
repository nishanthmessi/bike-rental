import React from 'react'

const Spinner = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-zinc-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-zinc-400"></div>
        <div className="w-4 h-4 rounded-full animate-pulse dark:bg-zinc-400"></div>
      </div>
    </div>
  )
}

export default Spinner