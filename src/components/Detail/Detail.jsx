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
               <label htmlFor="">Codigo: </label>
               <p className={detailStyled.itemDetail}>{country[0].id}</p>
            </div>

            <div className={detailStyled.itemFlex}>
                  <label htmlFor="">Continente: </label> 
                  <p className={detailStyled.itemDetail}>{country[0].continente}</p>
            </div>

            <div className={detailStyled.itemFlex}>
               <label htmlFor="">Capital: </label>
               <p className={detailStyled.itemDetail}>{country[0].capital}</p>
            </div>
            <div className={detailStyled.itemFlex}>
            <label htmlFor="">Subregion: </label>
               <p className={detailStyled.itemDetail}>{country[0].subregion}</p>
            </div>
            <div className={detailStyled.itemFlex}>
            <label htmlFor="">Area: </label>
               <p className={detailStyled.itemDetail}> {parseInt(country[0].area).toLocaleString("de-DE")}</p>
            </div>
            <div className={detailStyled.itemFlex}>
            <label htmlFor="">Poblacion: </label>
               <p className={detailStyled.itemDetail}> {parseInt(country[0].poblacion).toLocaleString("de-DE")}</p>
            </div>
            <div className={detailStyled.itemFlex}>
               <button className={detailStyled.buttonClose} onClick={()=>navigate('/countries')}>Cerrar</button>
            </div>
            
         </div>

         <div>
            <img src={country[0].flag} alt='Imagen' className={detailStyled.imagen}/>  
         </div>

         

         {/* <img src="../../../public/img/cerrar.svg" height ="30" width="30" /> */}
     </div> 
    
    )
   //  }
}

export default Detail



