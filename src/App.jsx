import { useEffect } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Landing from './components/Landing/Landing'
import { useDispatch } from 'react-redux';
import { getCountries } from './redux/actions';
import Countries from './components/Countries/Countries';
import FormActivity from './components/Actiyity/FormActivity';
import { Nav } from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import { useLocation } from 'react-router-dom';
function App() {
   const location=useLocation()
   const dispatch=useDispatch();
  
  //Actualizo el estado global con los paises de la API
  useEffect(()=>{
    dispatch(getCountries())
  }, []);
 
  return (
    <>
      <div className='App'>
         {location.pathname !== '/' && <Nav />}
        <Routes>
            <Route path='/' element={<Landing />}/>
            <Route path='/countries' element={<Countries />} />
            <Route path='/activies' element={<FormActivity />} />
            <Route path='/detail/:id' element={<Detail />} />
        </Routes>
      </div>
    </>
  )
}

export default App
