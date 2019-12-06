import axios from 'axios';
import { GET_ALL, LOADING, CHANGE_USERID, CHANGE_TITLE, ADD_WORK } from '../types/worksTypes';
import { ERROR } from '../types/publicacionesTypes';

export const get_all =()=>async(dispatch)=>{
    dispatch({
        type:LOADING
    });

    try{
        const res= await axios.get('https://jsonplaceholder.typicode.com/todos');

        const works ={};

        res.data.map((work)=>(
            works[work.userId] = {
                ...works[work.userId],
                [work.id] :{
                    ...work
                }
            }
        ))

        dispatch({
            type: GET_ALL,
            payload:works
        })
    }

    catch(error){
        console.log(error.message);
        dispatch({
            type:ERROR,
            payload:'Intente mas tarde'
        })
    }
}    

export const chage_userId=(user_id)=>(dispatch)=>{
    dispatch({
        type: CHANGE_USERID,
        payload: user_id
    })
}

export const chage_title=(title)=>(dispatch)=>{
    dispatch({
        type: CHANGE_TITLE,
        payload: title
    })
}

export const add_work=(new_work)=>async(dispatch)=>{
    dispatch({
        type: LOADING,
    })
    try{
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos'
        , new_work);
        console.log(res.data)
        dispatch({
            type:ADD_WORK,
        })
    }
    catch(error){
        console.log(error.message);
        dispatch({
            type:ERROR,
            payload:'Intente mas tarde'
        })
    }
}