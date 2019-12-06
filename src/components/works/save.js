import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../general/Spinner';
import Fatal from '../../general/fatal';
import {Redirect} from 'react-router-dom';

import * as worksActions from '../../actions/worksActions';

class Save extends Component {
  componentDidMount(){
    const {
      match:{ params:{ user_id, work_id } },
      works,
      change_title,
      change_userdId
    } = this.props;

    if(user_id && work_id){
      const work = works[work_id];
      change_userdId(work.user_id);
      change_title(work.title);
    }
  }

  chage_userId=(event)=>{
    this.props.chage_userId(event.target.value)
  }
  
  chage_title=(event)=>{
    this.props.chage_title(event.target.value)
  }

  save=()=>{
    const { 
      title, 
      add_work,
      match:{ params:{ user_id, work_id } },
      edit
     } = this.props;

    const new_work = {
      user_id,
      title,
      completed: false
    };



    add_work(new_work)
  }

  disabled=()=>{
    const { user_id, title, loading } = this.props;

    if(loading){
      return true;
    }
    if(!user_id || !title){
      return true;
    }
    return false;
  }

  showActions=()=>{
    const { error, loading } = this.props;
    if(loading){
      return <Spinner />
    }
    if(error){
      return <Fatal mensaje= { error } />
    }
  }

  render() {
    console.log(this.props)
    return (
        <div>
          { (this.props.goBack) ? <Redirect to='/Works' /> : '' }
        <h1>
            Add Works
        </h1>
        users id:
        <input 
          type='number' 
          value={ this.props.user_id }
          onChange={ this.chage_userId }
        />
        <br />
        <br />
        Title: 
        <input 
          value={ this.props.title }
          onChange={ this.chage_title }
        />
        <br />
        <br />
        <button
          onClick={ this.save }
          disabled={ this.disabled() }
        >
            add
        </button>
        { this.showActions() }
      </div>
    )
  }
}

const mapStateToProps=({ worksReducers }) => worksReducers;

export default connect(mapStateToProps,worksActions)(Save)
