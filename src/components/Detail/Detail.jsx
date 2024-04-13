//import axios from "axios"
import { useParams} from "react-router-dom"
import { useState,useEffect } from "react"
import detailStyled from './detalStyled.module.css'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux';
const Detail=()=>{
   const navigate=useNavigate()
   const countries=useSelector((state)=> state.countries)
   const params=useParams()
   console.log('Este es el objeto del parametro ',params.id) 
   const { id } = useParams()
   const pais=countries.filter(country=>country.id===id)
    const [country,setCountry]=useState(pais)
   console.log(country[0].name)
//     useEffect(() => {
//    //axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-quirogagustavo`)
//   // axios(`http://localhost:3001/rickandmorty/character/${id}`
//    //.then(({ data }) =>{
//    //      if (data.name) {
//             const pais=countries.filter(country=>country.id===id)
//             setCountry(pais);
//    //       } else {
//    //          window.alert('No hay personajes con ese ID');
//    //       }       
//    //    })
//    //    .catch(()=>window.alert('No hay personajes con ese ID'))
//    // );
//    // return setCharacter({});
// }, [id]);
    
   //  if(country.name){
        
    return(
      // Poner condicion que muestre cargando
    
       <div className={detailStyled.container}> 
         <div className={detailStyled.cardText}>
            <h2 className={detailStyled.name}>{country[0].name}</h2>
            <div className={detailStyled.itemFlex}>
               {/* <img src="../../../public/img/icono_status.png" height ="30" width="30" /> */}
               <p className={detailStyled.status}>{country[0].continente}</p>
            </div>
            <div className={detailStyled.itemFlex}>
               {/* <img src="../../../public/img/iconoSpecie.avif" height ="30" width="30" />  */}
               <p className={detailStyled.species}>{country[0].capital}</p>
            </div>
            <div className={detailStyled.itemFlex}>
               {/* <img src="../../../public/img/icono_genero.png" height ="30" width="30" /> */}
               <p className={detailStyled.genero}>{country[0].subregion}</p>
            </div>
            <div className={detailStyled.itemFlex}>
               {/* <img src="../../../public/img/iconoOrigen.jpg" height ="30" width="30" /> */}
               <p className={detailStyled.origen}> {country[0].area}</p>
            </div>
            <div className={detailStyled.itemFlex}>
               {/* <img src="../../../public/img/iconoOrigen.jpg" height ="30" width="30" /> */}
               <p className={detailStyled.origen}> {country[0].poblacion}</p>
            </div>
         </div>

         <div>
            <img src={country[0].flag} alt='Imagen' className={detailStyled.imagen}/>  
         </div>
         <button className={detailStyled.buttonClose} onClick={()=>navigate('/countries')}>Cerrar</button>

         {/* <img src="../../../public/img/cerrar.svg" height ="30" width="30" /> */}
     </div> 
    
    )
   //  }
}

export default Detail



