import axios from 'axios';
import { GET_ALL, LOADING } from '../types/usersTypes';

export const get_all =()=>async(dispatch)=>{
    dispatch({
        type:LOADING
    });

    const res= await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: GET_ALL,
        payload:res.data
    })
}