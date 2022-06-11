import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import CardDrawer from './components/CardDrawer'

function App() {
  return (
    <div className="App-container">
      <CardDrawer />
      <CardDrawer />
      <CardDrawer />
    </div>
  )
}

export default App
