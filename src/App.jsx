
import './App.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaHome } from "react-icons/fa";
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import ResumeGenerator from './Pages/ResumeGenerator';
import Form from './Pages/Form';
import PageNotFound from './Pages/PageNotFound';
import History from './Pages/History';

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/resume' element={<ResumeGenerator />} />
        <Route path='/form' element={<Form />} />
        <Route path='/history' element={<History />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
