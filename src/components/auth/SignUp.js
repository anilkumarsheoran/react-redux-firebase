import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

const SignUp = (props) => {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        setInputs(inputs => ({...inputs, [event.target.id]: event.target.value}));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit')
        props.signUp(inputs)
    }

    if(props.auth.uid) return <Redirect to="/" />
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input value={inputs.email || ''} type="email" id="email" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input value={inputs.password || ''} type="password" id="password" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="firstname">First Name</label>
                    <input value={inputs.firstname || ''} type="text" id="firstname" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor="lastname">Last Name</label>
                    <input value={inputs.lastname || ''} type="text" id="lastname" onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0" type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps= ( state ) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps= ( dispatch ) => {
    return {
        signUp: (newUser)=> dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)