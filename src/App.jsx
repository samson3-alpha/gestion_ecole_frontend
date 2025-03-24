import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'

import Layout from './Components/Layout'

import Login from './pages/login'
import AddClassForm from './Components/AddClassForm';
import ClassDetails from './pages/ClassDetails';
import Classes from './pages/classes';
import Dashboard from './pages/dashboard';
import Professeurs from './pages/Professeurs';
import AddProfesseur from './pages/AddProfesseur';
import EditClass from './pages/EditClass';
import Eleves from './pages/Eleves';
import AddEleve from './pages/AddEleve';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/addClassForm' element={<AddClassForm />} />
        <Route path='/ClassDetails/:id' element={<ClassDetails />} />
        <Route path='/professeurs' element={<Professeurs />} />
        <Route path='/eleves' element={<Eleves />} />
        <Route path='/addProfesseur' element={<AddProfesseur />} />
        <Route path='/addEleve' element={<AddEleve />} />
        <Route path='/editClass/:id' element={<EditClass />} />

        <Route path='/' element={<Login />} />

      </Routes>
    </BrowserRouter>
  )

}

export default App
