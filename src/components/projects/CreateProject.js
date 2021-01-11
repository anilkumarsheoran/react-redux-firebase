import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

const CreateProject = (props) => {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        setInputs(inputs => ({...inputs, [event.target.id]: event.target.value}));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit');
        props.createProject(inputs);
        props.history.push('/')
    }
    const auth = props.auth
    
    if(!auth.uid) return <Redirect to="/signin" />
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input value={inputs.title || ''} type="text" id="title" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea cols='30' rows='10' value={inputs.content || ''} type="text" id="content" className="materialize-textarea" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0" type="submit">Create</button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)