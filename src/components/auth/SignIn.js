import React, { useState } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

const SignIn = (props) => {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        setInputs(inputs => ({...inputs, [event.target.id]: event.target.value}));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.signIn(inputs)
        console.log('handle submit')
    }
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
                    <button className="btn pink lighten-1 z-depth-0" type="submit">Login</button>
                </div>
                { props.authError &&
                    <p>{props.authError}</p>
                }
            </form>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) =>dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)