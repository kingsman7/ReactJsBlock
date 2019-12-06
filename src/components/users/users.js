import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions  from '../../actions/usersActions';

import Spinner from '../../general/Spinner'
import Tables from './table';

class Users extends Component{
 
  componentDidMount(){
    if(!this.props.users.length){
      this.props.get_all()
    }
  }  

  ponerContenido=()=>{
      if (this.props.loading){
          return <Spinner/>
      }
      return <Tables />
  }

  render(){
        console.log(this.props)
      return(
        <div>
          <h1>Usuarios</h1>
          {this.ponerContenido()}
        </div>
      )
    }
  }

const mapStateToProps=(reducers)=>{
    return reducers.usersReducers;
}

export default connect(mapStateToProps, usersActions )(Users);
