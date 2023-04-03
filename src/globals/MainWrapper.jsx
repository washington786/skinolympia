import React from 'react'

const MainWrapper = ({children}) => {
  return (
    <div className="container py-2">
        {
            children
        }
    </div>
  )
}

export default MainWrapper