
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Main from './page/Main/Main'
import UpdateProduct from './page/Update/UpdateProduct'
import Create from './page/Craete/Create'

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/upDate/:id' element = {<UpdateProduct/>}/>
      <Route path='/create' element = {<Create/>}/>
     </Routes>
        
     
    </>
  )
}

export default App
