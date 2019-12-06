import axios from 'axios';
import { GET_FOR_USER, LOADING } from '../types/publicacionesTypes';
import * as usersTypes  from '../types/usersTypes';

const { GET_ALL: GET_USER } = usersTypes;

export const getForUsers =(key)=>async(dispatch, getState)=>{

    dispatch({
        type: LOADING
    })

    const { users } = getState().usersReducers; //destructurar y traerme a los usuarios
    const { publicaciones } = getState().publicacionesReducers; // destructurar y traerme las publicaciones que existan sean 1 o 10000
    const users_id = users[key].id; // con el users de la destructuración obtengo el id
    try{
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${users_id}`) // le mando el id de users_id para traer la publicación
        //buscar publicaciones sin sobrescribir el astado actual
        const publicationsUpdate =
            [
                ...publicaciones, //traigo las publicaciones que existan 
                res.data // ahora agrego las publicaciones nuevas
            ]

        //mandar el dispatch    

        const publicaciones_key = publicationsUpdate.length - 1;
        const usersUpdate = [...users];
        usersUpdate[key]={
            ...users[key],
            publicaciones_key
        }

        dispatch({
            type: GET_FOR_USER,
            payload:publicationsUpdate //aquí ahora llegan las publicaciones nuevas y las actualizadas
        })
        dispatch({
            type: GET_USER,
            payload:usersUpdate //aquí ahora llegan las publicaciones nuevas y las actualizadas
        })
    }
    catch(error){
        console.log('error ' + error.message)
    }
}