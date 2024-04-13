export const orderNameAsc=(a, b) => {
    const nombreA = a.name.toUpperCase(); // Convertir a mayúsculas para comparación sin distinción entre mayúsculas y minúsculas
    const nombreB = b.name.toUpperCase(); // Convertir a mayúsculas para comparación sin distinción entre mayúsculas y minúsculas
    //console.log('Estoy ordenando nombres ascendente')
    if (nombreA < nombreB) {
      return -1; // a debe venir antes que b en el orden
    }
    if (nombreA > nombreB) {
      return 1; // a debe venir después que b en el orden
    }
    return 0; // a y b son iguales
  };

  export const orderNameDesc=(a, b) => {
    const nombreA = a.name.toUpperCase();
    const nombreB = b.name.toUpperCase();
   // console.log('Estoy ordenando nombres descendente')
  
    if (nombreA > nombreB) {
      return -1; // a debe venir antes que b en el orden descendente
    }
    if (nombreA < nombreB) {
      return 1; // a debe venir después que b en el orden descendente
    }
    return 0; // a y b son iguales
  }

  export const orderPopAsc=(a, b)=> {
    //console.log('Estoy ordenando poblacion ascendente')
    return parseInt(a.poblacion) - parseInt(b.poblacion); // Ascending order
  }

  export const orderPopDesc=(a, b)=> {
    //console.log('Estoy ordenando poblacion descendente')
    return parseInt(b.poblacion) - parseInt(a.poblacion); // Ascending order
  }