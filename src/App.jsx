import React from 'react'
import Navbar from './Components/Navbar'
import Page1 from './Components/Page1'
import { Route, Routes } from 'react-router-dom'
import Page2 from './Components/Page2'
import Page3 from './Components/Page3'
import Page4 from './Components/Page4'

function App() {
  return (
<>
<Navbar/>

<Routes>
<Route path='/' element={<Page1/>}/>
<Route path='/pag2' element={<Page2/>}/>
<Route path='/page3' element={<Page3/>}/>
<Route path='/page4' element={<Page4/>}/>

</Routes>

</>

  )
}

export default App