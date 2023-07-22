import './styles/App.css';
import Home from './Pages/Home';
import Navbar from './Components/Nav';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';
function App() {
  

  return (
    <>
      <Navbar/>
        <Outlet />
      <Footer/>
    </>
  )
}

export default App
