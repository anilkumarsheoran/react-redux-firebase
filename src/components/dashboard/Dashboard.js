import React from 'react'
import { connect } from 'react-redux'
import Notification from './Notifications'
import ProjectList from '../projects/ProjectList'
import projectReducer from '../../store/reducers/projectReducer'

const Dashboard = (props) => {
    const projects = props.projects
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
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(Dashboard)