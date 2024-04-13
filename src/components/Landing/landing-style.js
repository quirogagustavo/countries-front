import styled from 'styled-components'
import fondo from '../../img/Dark_paises.jpg'
import { Link } from 'react-router-dom';

export const ImagenFondo = styled.img`
  /* background-image: url(${fondo});
  background-size: 90%;
  background-position: center;
  background-repeat: no-repeat; */
  width: 100%;
  height: 100%;
  
  `;

export const Contenedor = styled.div`
  display: flex;
  justify-content: center; /* Centra los elementos horizontalmente */
  align-items: center;
  width: 90vw; /* El contenedor ocupará el 90% del ancho de la ventana del navegador */
  height: 90vh; /* El contenedor ocupará el 90% de la altura de la ventana del navegador */
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;

  @media (min-width: 768px) {
    /* Cuando la pantalla es más ancha que 768px */
    width: 50vw;
    height: 70vh;
  }

  @media (min-width: 1024px) {
    /* Cuando la pantalla es más ancha que 1024px */
    width: 100%; /* Ancho fijo */
    height: 100%; /* Alto fijo */
   
  }
`;

export const Enlace = styled.a`
  position: absolute;
  top: 90%;
  left: 50%;
  border-radius: 5px;
  text-align: center;
  z-index: 1;
  background-color: #007bff;


  display: flex;
  padding: 10px 20px;
  
  color: #fff;
  text-decoration: none;
  
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  } 
`;

export const Boton = styled.button`
  position: absolute;
  top: 85%;
  left: 40%;
  width: 20%;
  height: 5%;
  text-align: center;
  background-color: bisque;
  color: crimson;
  font-weight: 800;
  font-family: Verdana, Geneva, Tahoma, sans-serif;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const LinkCustom = styled(Link)`
   
    color:  #34b6cd ; /* Color del texto del enlace */
    text-decoration: none; /* Eliminar subrayado del enlace */
    font-weight: bold; /* Texto en negrita */
    text-align: center;

    background-color:  #85726e ;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none; /* Eliminar subrayado del enlace */
    cursor: pointer;
    display: inline-block; /* Para que se comporte como un botón */

    position: absolute;
    top: 85%;
    left: 40%;
    width: 20%;
    height: 5%;

    &:hover {
    color:  #353636 ; /* Nuevo color del texto */
  }
` 


