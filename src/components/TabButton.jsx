import React from 'react'

const TabButton = ({children, onSelect, isSelected}) => {
  return (
    <button onClick={onSelect} className={isSelected ? 'active' : undefined}>
        {children}
    </button>
  )
}

export default TabButton
