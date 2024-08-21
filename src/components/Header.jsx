import React from 'react'

const reactDescriptions = ["Fundamental", "Core", "Crucial"]

function generateRandomIndex(maxLength) {
    return Math.floor(Math.random() * maxLength)
  
}
const description = reactDescriptions[generateRandomIndex(reactDescriptions.length)]
const Header = () => {
  return (
    <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
        {/* {Math.floor(Math.random() * maxLength)} */}
      </header>
  )
}

export default Header
