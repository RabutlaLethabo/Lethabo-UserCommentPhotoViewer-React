import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ViewCommentsPage from './Pages/ViewCommentsPage'
import ViewUsersPage from './Pages/ViewUsersPage'
import ViewPhotosPage from './Pages/ViewPhotosPage'
import Navbar from './Components/Navbar'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/users" element={<ViewUsersPage/>}/>
        <Route path="/comments" element={<ViewCommentsPage/>}/>
        <Route path="/Photos" element={<ViewPhotosPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
