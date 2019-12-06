import React,{ Component } from "react";
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import Spinner from '../../general/Spinner';
import Fatal from '../../general/fatal';

import * as worksActions from '../../actions/worksActions';


class Works extends Component{
    componentDidMount(){
        if(!Object.keys(this.props.works).length){
            this.props.get_all();
        }
    }

    showContent=()=>{
        const { error, loading, works } = this.props

        if(loading){
            return <Spinner />
        }

        if(error){
            return <Fatal />
        }

        return Object.keys(works).map((user_id)=>(
            <div key={user_id}>
               <h2>
                Users {user_id}
               </h2>
               <div className='works_container'>
                    { this.putWorks(user_id) }
               </div>
            </div>
        ))
    };

    putWorks=(user_id)=>{
        const { works } = this.props;
        const byUser ={
            ...works[user_id]
        };

        return Object.keys(byUser).map((work_id)=>(
            <div key={work_id}>
                <input 
                type='checkbox'
                defaultChecked={ byUser[work_id].completed }
            />
            { byUser[work_id].title }
                <button className='m_left' >
                    <Link to={`/works/save/${user_id}/${work_id}`}>
                        Edit    
                    </Link>
                </button>
                <button className='m_left' >
                    Delete
                </button>
            </div>
        ))
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <button>
                    <Link to='/works/save' >
                        add
                    </Link>
                </button>
                {this.showContent()}
            </div>
        )
    }
}

const mapStateToProps = ({worksReducers})=> worksReducers

export default connect(mapStateToProps, worksActions)(Works);