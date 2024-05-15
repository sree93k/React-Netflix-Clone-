import { useState } from 'react'

import './App.css'
import NavBar from './components/navBar/NavBar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import {originals,action,comedy,horror,romantic,documentry} from './urls'
function App() {


  return (
    <>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title={'Netflix Originals'}/>
      <RowPost url={action} title={'Action'} isSmall/>
      <RowPost url={comedy} title={'Comedy'} isSmall/>
      <RowPost url={horror} title={'Horror'} isSmall/>
      <RowPost url={romantic} title={'Romantic'} isSmall/>
      <RowPost url={documentry} title={'Documentry'} isSmall/>
    </>
  )
}

export default App
