import axios from 'axios';
import { GET_COUNTRIES, ORDER_NAME, ORDER_POB, FILTER_CONTINENT,POST_ACTIVITIE, ACTIVITIES__SUCCESS, ACTIVITIES__FAILURE } from './actions-types';


// Accion para traer todos los paises la uso
export function getCountries() {
    return async (dispatch) => {
      const res = await axios.get("https://countries-server-wndw.onrender.com/countries/");
      //http://localhost:3001/

      const datos=res.data;
      dispatch({ type: GET_COUNTRIES, payload: datos });
    };
  }


  export const orderName=(orden)=>{
    return {
        type: ORDER_NAME,
        payload:orden
    }
}

export const orderPob=(orden)=>{
  return {
      type: ORDER_POB,
      payload:orden
  }
}

export const filterContinent=(continente)=>{
  return {
      type: FILTER_CONTINENT,
      payload:continente
  }
}

export function postActivities(newAct) {
  console.log(newAct)
  const apiUrl="https://countries-server-wndw.onrender.com//activities/"
  return async (dispatch) => {
    try {
    const res = await axios.post(apiUrl,newAct);
    const datos=res.data;
    dispatch({ type: ACTIVITIES__SUCCESS, payload: datos });
  } catch (error) {dispatch({ type: ACTIVITIES__FAILURE, payload: error.message })}
  };
}
