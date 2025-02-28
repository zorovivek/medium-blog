import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Blogs from './Pages/Blogs'
import Blog  from './Pages/Blog'
import Publish from './Pages/Publish'
import {FrontPage} from './Pages/FrontPage'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontPage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path='/blogs/:id' element={<Blog/>}></Route>
        <Route path='/publish' element={<Publish/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
