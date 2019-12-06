import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions  from '../../actions/usersActions';
import * as publicacionesActions  from '../../actions/publicacionesActions';

import Spinner from '../../general/Spinner';

const { get_all: traerUsuarios } = usersActions;
const { getForUsers: traerPublicaciones } = publicacionesActions;

class Publicaciones extends Component{
   async componentDidMount(){
       
    const { 
        traerUsuarios,
        traerPublicaciones,
        match:{ params: { key } }
        } = this.props;

        if(!this.props.usersReducers.users.length){
           await traerUsuarios()
        }
        if(!('publicaciones_key' in this.props.usersReducers.users[key])){
            traerPublicaciones(key)
        }
    }

    putUsers =()=>{
        const { 
            usersReducers,
            match:{ params: { key } }
        } = this.props;
        if (! usersReducers.users.length || usersReducers.loading){
            return <Spinner />
        }
        const name = usersReducers.users[key].name
        return(
            <h1>Publicaciones de { name }</h1>

        )
    }

    putPublications=()=>{
        const { 
            usersReducers: { users },
            publicacionesReducers,
            publicacionesReducers: { publicaciones },
            match:{ params: { key } }
        } = this.props;
        
        if(!users.length) return;
        
        if(publicacionesReducers.loading){
            return <Spinner/>
        };
        if(!publicaciones.length) return;
        if(!('publicaciones_key' in users[key]))return;

        const { publicaciones_key } = users[key];

        return publicaciones[publicaciones_key].map((publicacion)=>(
            <div 
                className= 'pub_title'
                key={ publicacion.id }
                onClick ={()=>alert(publicacion.id)}
            >
                <h2>
                    {publicacion.title}
                </h2>
                <h3>
                    {publicacion.body}
                </h3>
            </div>
        ))
    }

    render(){
        console.log(this.props)
        return(
            <div>
                {this.putUsers()}
                {this.putPublications()}
            </div>
        );
    }
}

const mapStateToProps=({usersReducers, publicacionesReducers})=>{
    return {
        usersReducers,
        publicacionesReducers
    }
};
 
const mapDispatchToProps={
    traerUsuarios,
    traerPublicaciones
}

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);