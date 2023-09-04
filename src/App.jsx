import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'

function App() {

  const compteur = useSelector(state=>state.compteur)
  return (
    <>
      <div>compteur :  {compteur}</div>
    </>
  )
}

export default App
