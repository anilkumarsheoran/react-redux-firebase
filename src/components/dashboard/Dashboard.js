import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'
import projectReducer from '../../store/reducers/projectReducer'
import { firestoreConnect } from 'react-redux-firebase'
import { Redirect } from 'react-router-dom'


const Dashboard = (props) => {
    const projects = props.projects;
    const auth = props.auth;

    if(!auth.uid) return <Redirect to="/signin" />

    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={ projects } />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notification />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth
    }
}

export default compose(connect(mapStateToProps),firestoreConnect([
    { collection: 'projects' }
  ]))(Dashboard)