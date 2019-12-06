import { GET_ALL, LOADING, ERROR, CHANGE_USERID, CHANGE_TITLE, ADD_WORK } from '../types/worksTypes';

const INITIAL_STATE = {
    works:{},
    loading: false,
    user_id:'',
    title: '',
    goBack:false
};

export default (state= INITIAL_STATE, action)=>{
    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                works: action.payload,
                loading : false,
                error:'',
                goBack:false
            };
    
        case LOADING:
            return { ...state, loading: true };

        case ERROR:
            return { 
                ...state, 
                error: action.payload,
                loading: false,
             };
        case CHANGE_USERID:
            return { 
                ...state, 
                user_id: action.payload,
             };
        case CHANGE_TITLE:
            return { 
                ...state, 
                title: action.payload,
             };
        case ADD_WORK:
            return { 
                ...state, 
                works:{},
                loading: false,
                error:'',
                goBack:true,
                user_id:'',
                title: '',
             };
    
        default: return state;
    }
}