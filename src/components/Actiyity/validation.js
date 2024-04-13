export const validation=(userData,setErrors)=>{
    // ,errors
    

    const numero=/[0-9]/
    //Verifica mail valido
    let error={}
    
     /* if (!userData.email) {error['email']='Email vacio'} 
     if (!mail.test(userData.email)) {error['email']='Email invalido'}
     if (userData.email.length>35) {error['email']='Nø puede tener mas de 35 caracteres'}

     if (!(userData.password.length >5 && userData.password.length<11)) {error['password']='La password debe tener entre 6 y 10 caracteres'}
     if (!pass.test(userData.password)) {error['password']='La password debe contener al menos un numero'}
     */
      

     if (!(userData.nombre.length >5 && userData.nombre.length<11)) {error['nombre']='El nombre debe tener entre 6 y 10 caracteres'}
     if (!numero.test(userData.nombre)) {error['nombre']='El nombre no debe contener un numero'}

     //Validar que la duracion sea solo numeros

     if (userData.duracion.length >2) {error['duracion']='La duracion no puede tenner mas de dos caracteres'}
     if (userData.duracion.length ===0) {error['duracion']='La duracion no puede estar vacia'}

     if (!numero.test(userData.duracion)) {error['duracion']='La duracion debe ser un numero'}
    
     setErrors(error)

    } 
    
