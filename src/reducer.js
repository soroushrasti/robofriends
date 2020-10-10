import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAIL} from './constant.js';

const initialStateRobots={
    ispending:false,
    robots:[]
}

const initialStateSearch = {
    searchField: ''
  }



export const requestRobots=(state=initialStateRobots,action={})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
                    return Object.assign({},state,{ispending:true});
       case REQUEST_ROBOTS_SUCCESS:
                    return Object.assign({},state,{robots:action.payload, ispending:false});
        case REQUEST_ROBOTS_FAIL:
                    return Object.assign({},state,{robots:action.payload, ispending:false});
         default:
             return state;   
    }
}

export const searchRobots=(state=initialStateSearch, action={})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({},state,{searchField:action.payload})
         default:
             return state  
    }
}
