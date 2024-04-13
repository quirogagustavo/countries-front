//import SearchBar from "../SearchBar/SearchBar";
import navStyled from './navStyled.module.css'
import {Link, NavLink, useLocation,useNavigate} from 'react-router-dom'

export const  Nav =()=>{
  //{onSearch,logout}
    //const navigate=useNavigate()
    //const id=Math.floor(Math.random() * 30) + 1;
    //const location=useLocation()
    
    //if (location.pathname!=='/'){
    return (
        <nav className={navStyled.navcontainer}>
           <Link to="/"><button className={navStyled.boton}>Landing</button></Link>
           <Link to="/countries"><button className={navStyled.boton}>Countries</button></Link>
           <Link to="/activies"><button className={navStyled.boton}>Activities</button></Link>  
        </nav>
        
    )
//    }
}