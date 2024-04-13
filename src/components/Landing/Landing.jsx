import React from "react";
import fondo from '../../img/Dark_paises.jpg'
import { Contenedor, ImagenFondo, Boton, LinkCustom } from "./landing-style";


const Landing = ()=>{
   return (
    <>
        <Contenedor>
            <ImagenFondo src={fondo} alt="Paises del Mundo" />
            {/* <Boton> */}
                <LinkCustom to="/countries">Ingresar a Paises</LinkCustom>
            {/* </Boton> */}
            
            {/* <StyledButtonLink to="https://www.google.com">Click Me (Looks like a button)</StyledButtonLink> */}
        </Contenedor>
    </>
    )
}

export default Landing;
