/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { connect, useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import CountryCard from "./CountryCard";
// import { useDispatch } from 'react-redux';
import { getCountries } from '../../redux/actions';
import styles from './styles.module.css'
import navStyled from '../Nav/navStyled.module.css'
import { useEffect} from 'react';
//import { orderName, orderPob,filterContinent,getCountries } from '../../redux/actions';
import { orderNameAsc,orderNameDesc,orderPopAsc,orderPopDesc } from '../../redux/orderFunction';
import { Paginacion } from '../Paginacion/Paginacion';

//import Card from '../Card/Card';
function Countries(/* {myFavorites }*/) {
  
  let ordenados=[]
  const dispatch=useDispatch();
  
  //Cargo el estado global con los paises de la API
  useEffect(()=>{
   
    dispatch(getCountries())
  }, []);
  const countrie =useSelector((state)=>state.countries)
  const [aux,setAux]=useState(false)
  const [countriesLocal, setcountriesLocal]=useState(countrie)
  const [pais,setPais]=useState('')
  const [actividad,setActividad]=useState('')
  
 

  // const dispatch=useDispatch()

  /* useEffect(()=>{
    console.log(countries)
  }  , [countries]);
 */
  const [pagina,setPagina]=useState(1);
  const [porPagina,setPorPagina]=useState(10);
  const maximo=Math.ceil(countriesLocal.length / porPagina);
  
   
   const handlreRegion=(e)=>{
     const region=e.target.value
     setcountriesLocal(region !== 'Todos' ? countriesLocal.filter((country)=>{return country.continente === region}) : countrie)
  }
 

  const handleOrder=(e)=>{


   console.log('Estoy en handlerOrder  ', e.target.value)
   if (e.target.value==='A') { 
                      ordenados=[...countriesLocal].sort((a,b)=>orderNameAsc(a,b));
                    } 
   if (e.target.value==='D') ordenados=[...countriesLocal].sort((a,b)=>orderNameDesc(a,b));
    
   if (e.target.value==='PA') ordenados=[...countriesLocal].sort((a,b)=> orderPopAsc(a,b)) 
   if (e.target.value==='PD') ordenados=[...countriesLocal].sort((a,b)=> orderPopDesc(a,b)) 
   setcountriesLocal(ordenados) 

}

const handlpais=(e)=>{
  const paisSearch=e.target.value
  //console.log(pais)
  setPais(paisSearch)
  
}

const handleSearchPais=()=>{
  setcountriesLocal(pais !== '' ? countriesLocal.filter((country)=>{return country.name.toLowerCase().includes(pais.toLowerCase()) }) : countrie)
}

const handleActividad=(e)=>{
  const actividadSearch=e.target.value
  //console.log(pais)
  setActividad(actividadSearch)
  
}

const handleSearchActividad=()=>{
  setcountriesLocal(actividad !== '' ? countriesLocal.filter((country)=>{return country.Activities.some(act => act.nombre.toLowerCase().includes(actividad.toLocaleLowerCase()))}) : countrie)
}


  return (
  
     
  <div>

  <nav className={navStyled.navcontainer}>
          
          
          <div>
          
          <label htmlFor="">Ordenar </label> 
            <select onChange={handleOrder} className={navStyled.itemNavContainer} >
              <option value="A">A-Z</option>
              <option value="D">Z-A</option>
              <option value="PA">↑ population</option>
              <option value="PD">↓ population</option>
            </select>
          
          </div>
          <div>
          
          <label htmlFor="">Filtrar </label> 
              <select onChange={handlreRegion} className={navStyled.itemNavContainer}>
                <option value="Africa">Africa</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Oceania">Oceania</option>
                <option value="Todos">Todos</option>
              </select>
          </div>
          <div>
          
                    <label htmlFor="">Filtrar por actividad:</label> 
                    <input type="text" value={actividad} onChange={handleActividad} className={navStyled.itemNavContainer} placeholder='Escriba nombre de actividad...' />
                    <button onClick={handleSearchActividad} className={navStyled.botonFilter}>Buscar</button>
                    
          </div>
          <div>
          
                    <label htmlFor="">Buscar pais:</label> 
                    <input type="text" value={pais} onChange={handlpais} className={navStyled.itemNavContainer}  placeholder='Escriba nombre de un pais...' />
                    
                    <button onClick={handleSearchPais} className={navStyled.botonFilter}>Buscar</button>
          </div> 

      </nav>

      
          
          <div className={styles.container}>
          {/* styles.container */}
             

         
          {/* styles.container */}
           {countriesLocal.slice(
                (pagina -1) * porPagina,
                (pagina-1) * porPagina + porPagina
            ).map(((el)=>(
                      <div key={el.id}>
                      <CountryCard 
                        key={el.id}
                        id={el.id} 
                        name={el.name}
                        flag={el.flag}
                        continente={el.continente}
                        //onClose={onClose}
                      />
                  </div>
            )))
           }
         
          </div>
            <div >
               <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} /> 
            </div>
        
      
  </div>
  );
}


export default Countries


