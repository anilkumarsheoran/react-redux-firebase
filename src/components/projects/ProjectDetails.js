import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    console.log(props)
    return (
        <div className="container section project-details">
            {props.project ?
                (<div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{props.project.title} - {id}</span>
                        <p>{ props.project.content }</p>
                    </div>
                    <div className="card-action  lighten-4 grey-text">
                        <div>{ props.project.authorFirstName } { props.project.authorLastName } </div>
                        {/* <div>{ new Date(props.project.createdAt.seconds) }</div> */}
                    </div>
                </div>)
             : (<div>project is loading...</div>)
            }
            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project
    }
}

export default compose(connect(mapStateToProps), firestoreConnect([
    {collection: 'projects'}
]))(ProjectDetails)