import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingUp from './views/SingUp'
import Login from './views/Login'
import Main from './views/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Main/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/singUp' element = {<SingUp/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App
