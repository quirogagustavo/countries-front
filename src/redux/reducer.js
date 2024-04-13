import { GET_COUNTRIES, ORDER_NAME, ORDER_POB, FILTER_CONTINENT, POST_ACTIVITIE,
ACTIVITIES__FAILURE, ACTIVITIES__SUCCESS } from "./actions-types";
import { orderNameAsc,orderNameDesc,orderPopAsc,orderPopDesc } from "./orderFunction";

const initialState= {
    countries: [],
    activities: [],
    error: '',
}

const rootReducer=(state=initialState,action) => {
 
    switch (action.type) {
        
        case GET_COUNTRIES:{ 
            console.log('Get counter')
            return {
              ...state,
              countries: action.payload,
            };
          }

          case ORDER_NAME:{
          
            // eslint-disable-next-line no-case-declarations
            let copy= [...state.countries]
            ///let ordenados=[]
            // if (action.payload==='A') ordenados=copy.sort((a,b)=> { orderNameAsc(a,b)}) 
            // if (action.payload==='D') ordenados=copy.sort((a,b)=> { orderNameDesc(a,b)}) 
            // if (action.payload==='PA') ordenados=copy.sort((a,b)=> { orderPopAsc(a,b)})
            // if (action.payload==='PD') ordenados=copy.sort((a,b)=> { orderPopDesc(a,b)}) 

            return {...state,countries:copy.sort((a,b)=> { return action.payload==='A' ? orderNameAsc(a,b) : orderNameDesc(a,b)})}
            

            //return {...state,countries:copy.sort((a,b)=> { orderNameAsc(a,b)})};         
                   
        }
        
        case ORDER_POB:{
          
          // eslint-disable-next-line no-case-declarations
          let copy= [...state.countries]
          ///let ordenados=[]
          // if (action.payload==='A') ordenados=copy.sort((a,b)=> { orderNameAsc(a,b)}) 
          // if (action.payload==='D') ordenados=copy.sort((a,b)=> { orderNameDesc(a,b)}) 
          // if (action.payload==='PA') ordenados=copy.sort((a,b)=> { orderPopAsc(a,b)})
          // if (action.payload==='PD') ordenados=copy.sort((a,b)=> { orderPopDesc(a,b)}) 

          return {...state,countries:copy.sort((a,b)=> { return action.payload==='PA' ? orderPopAsc(a,b) : orderPopDesc(a,b)})}
          

          //return {...state,countries:copy.sort((a,b)=> { orderNameAsc(a,b)})};         
                 
      }

      case FILTER_CONTINENT:{

        // eslint-disable-next-line no-case-declarations
        console.log('Estoy en el filtro de contienete  ',action.payload)
        let copy=[...state.countries] 
        let filter=action.payload!=='Todos' ? copy.filter((country)=>{return country.continente === action.payload}) : copy
        return {...state, countries:filter}
    }

    case POST_ACTIVITIE: {
      return {...state}
    }

    case ACTIVITIES__SUCCESS:
            return {
                ...state,
                activities: action.payload,
                error: null
            };
    case ACTIVITIES__FAILURE:
            return {
                ...state,
                activities: null,
                error: action.error
            };

        
        default:
            return {...state};
    
    }
}



export default rootReducer;