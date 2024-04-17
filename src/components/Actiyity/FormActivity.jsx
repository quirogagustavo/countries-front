import React,{ useState } from 'react'
import './Contact.modules.css'
import { useSelector, useDispatch } from 'react-redux';
import { orderNameAsc } from '../../redux/orderFunction';
import formStyled from './formStyled.module.css'
import styled from 'styled-components';
import { postActivities,getCountries } from '../../redux/actions';

import { validation } from './validation';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs){
  const errors={}
  if (inputs.name==='') errors['name']="Se requiere un nombre"
  if (!regexEmail.test(inputs.emal)) errors['email']="Debe ser un correo valido"
  if (inputs.message==='') errors['message']="Se requiere un mensaje"
  return errors


}
function FormActivity () {
  
  const countries=useSelector((state)=> state.countries)
  const inicial={nombre:'', dificultad:'',duracion:'', temporada:''}
  const paisInicial= {pais:[]}
  const navigate=useNavigate();

  
  const [inputs,setInputs]=useState(inicial)
  const [errors,setErrors]=useState({})
  const [inputPais,setInputPais]=useState(paisInicial)

  
  const dispatch=useDispatch();

  const handlePais=(e)=>{
    
   // console.log(e)
        const {name,value}=e.target 
        const newPais = {id: value, name:e.target.options[e.target.selectedIndex].text};
        console.log('voy a agregar un pais')
       // console.log(newPais)
        const updatePais = {
            ...inputPais,
            pais: [...inputPais.pais, newPais]
          };
         
        setInputPais(updatePais)
}
  
  const handleChange=(event)=>{
    //console.log(event)
    const {name,value}=event.target
    //console.log ('Estoy cambiando ',name,' con el valor ',value)
    /* const name=event.target.name
    const value=event.target.value */
    //Recordar modificar para agregar al arreglo de paises
    
    setInputs({...inputs,[name]:value})
    validation({...inputs,[name]:value},setErrors)
    // ,errors

    /* setErrors(validate({
      ...inputs,
      [event.target.name]: event.target.value,0
   })) */ 
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(inputs)
   // const arr=Object.values(errors)
   
      const paises=inputPais.pais.map(country => country.id)
      let actividadAgregar=inputs
      const countryId = 'countryId';
      actividadAgregar[countryId]=paises
   
      dispatch(postActivities(actividadAgregar))
      setInputs(inicial)
      setErrors({})
      setInputPais(paisInicial)
   
      dispatch(getCountries())
   
  }

  const handleClose = () => {
    navigate("/countries")
  };
  
  return (
  <div>
    <div className={formStyled.activitiesPage}>
        
            <form onSubmit={handleSubmit} className={formStyled.formActivitie}>
            
            
            <div className={formStyled.inputItems}>
                <label htmlFor="" className={formStyled.labelInput}>Nombre:</label> 
                <input type="text" name='nombre' value={inputs.nombre} onChange={handleChange} className={formStyled.inputElement} placeholder='Escrib nombre de actividad...' />
             
            </div>
            {errors.nombre!=='' && (<span>{errors.nombre}</span>)}

            <div className={formStyled.inputItems}>
                <label htmlFor="" className={formStyled.labelInput}>Dificultad:</label>
                <select onChange={handleChange} name='dificultad' value={inputs.dificultad} className={formStyled.inputElement} placeholder='Elija un grado de dificultad...' >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>H
                        </select>
                    
            </div>

            <div className={formStyled.inputItems}>
                <label htmlFor="" className={formStyled.labelInput}>Duracion:</label>
                <input type="text" name='duracion' value={inputs.duracion}  onChange={handleChange} className={formStyled.inputElement} placeholder='Escriba una duracion de la actividad...' />
            </div>
            {errors.duracion!=='' && (<span>{errors.duracion}</span>)}
            
            <div className={formStyled.inputItems}>
                <label htmlFor="" className={formStyled.labelInput}>Temporada:</label>
                <select onChange={handleChange} name='temporada' value={inputs.temporada} className={formStyled.inputElement} placeholder='Elija una temporada...'>
                    <option value="Invierno">Invierno</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Primavera">Primavera</option>
                    <option value="Verano">Verano</option>
                </select>
            </div>
            
            <div className={formStyled.inputItems}>
            <label htmlFor="" className={formStyled.labelInput}>Pais:</label>
                <select onChange={handlePais} name='pais'  value={inputPais.pais} className={formStyled.inputElement} placeholder='Elija una pais...'>
                    {countries.slice().sort(orderNameAsc).map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                        ))}
                </select>
            </div>

            
             {inputPais.pais.length!==0 && 
            <div className={formStyled.inputItems}>
            
            <label htmlFor="" className={formStyled.labelInput}>Paises Seleccionados:</label>                
                <select name='paisSeleccionado'   className={formStyled.inputElement} placeholder='Paises seleccionados...'>
                    
                    {inputPais.pais.slice().sort(orderNameAsc).map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                    ))}
                </select>
            </div>              
        }             
            <button type='submit' onClick={handleSubmit} className={formStyled.boton}>Guardar</button>
            <button type='submit' onClick={handleClose} className={formStyled.boton}>Volver a Paises</button>

            </form>
        
    </div>
  </div>)
}

export default FormActivity