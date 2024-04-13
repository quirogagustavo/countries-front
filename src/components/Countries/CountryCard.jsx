/* eslint-disable react/prop-types */


import React from 'react'
import { useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import cardStyled from './cardStyled.module.css'
//import { addFav, removeFav } from "../../redux/actions";
//import { connect } from "react-redux";
import { Link } from 'react-router-dom';

   function CountryCard({id,name,flag, continente, onClose /*,addFav,removeFav,myFavorites*/}) 


   {
      
      //let [isFav,setIsFav]=useState(false)
      
      const handleClose=()=>{
        // removeFav(id)
         onClose(id)
   
         //()=>onClose(id)
   
      }
   
      /* const handleFavorite=()=>{
         console.log(isFav)
         if (isFav) {
            setIsFav(false)
            //console.log(isFav)
            removeFav(id)
         } else {
            setIsFav(true)
            
            addFav({id,name,status,gender,species,origin,image})
         }
         console.log(isFav) 
      } */
   
      /* useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [id, myFavorites]); */
      
      return (
        
          <div className={cardStyled.flipCard}>
            <div className={cardStyled.flipCardInner}>
               <div className={cardStyled.flipCardFront}>
                  <img className={cardStyled.img} src={flag} alt='Imagen' />
                  <h3 className={cardStyled.name}>{name}</h3>
               </div>  
               <div className={cardStyled.flipCardBack}>
                     {/* {isFav ? (<button className={cardStyled.buttonFav} onClick={handleFavorite}><img src="../../../public/img/addFavorite.avif" height ="30" width="30" /></button>) : (<button className={cardStyled.buttonFav} onClick={handleFavorite}><img src="../../../public/img/removeFav.png" height ="30" width="30" /></button>) }  */}
                     
                     <img className={cardStyled.imagen} src={flag} alt='Imagen' />
                     {/* <button className={cardStyled.buttonClose} onClick={handleClose}><img src="../../../public/img/cerrar.svg" height ="30" width="30" /></button> */}
                     <Link className={cardStyled.name} to={`/detail/${id}`}><button className={cardStyled.buttonDetail}>{name}</button></Link>
                      <h4 className={cardStyled.continente}>{continente}</h4>
                     {/*<h4 className={cardStyled.species}>{species}</h4>
                     <h4 className={cardStyled.genero}>{gender}</h4> */}
   
               </div> 
            </div>
   
          </div>
          
      
   
         
   
      );
   }
   

 export default CountryCard;

//  , removeFav
