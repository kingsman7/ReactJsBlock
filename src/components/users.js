import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component{
  constructor(){
    super();
    this.state={
      user:[]
    }
  }

  async componentDidMount(){
    await axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      this.setState({
        user: res.data
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  ponerFIlas=()=>(
    this.state.user.map((user)=>(
      <tr key={user.id}>
        <td>
          {user.name}
        </td>
        <td>
          {user.email}
        </td>
        <td>
          {user.website}
        </td>
      </tr>
    ))
  )
 

    render(){
      return(
        <div className="margen">
          <table className="table">
            <thead>
              <tr>
                <th>
                  Nombre
                </th>
                <th>
                  Correo
                </th>
                <th>
                  Enlace
                </th>
              </tr>
            </thead>
            <tbody>
              {this.ponerFIlas()}
            </tbody>
          </table>
        </div>
      )
    }
}

export default Users;
