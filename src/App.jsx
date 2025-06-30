import './App.css'
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Location from './pages/Location';
import GetFridge from './pages/GetFridge';
import Story from './pages/Story';
import AppPage from './pages/AppPage';
import Career from './pages/Career';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Menu" element={<Menu/>} />
      <Route path="/location" element={<Location/>} />
      <Route path="/getfridge" element={<GetFridge/>} />
      <Route path="/story" element={<Story/>} />
      <Route path="/app" element={<AppPage/>} />
      <Route path="/career" element={<Career/>} />
    </Routes>
     </>
  )
}

export default App
