import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = (props) => {
    return (
        <div className="project-list section">
           {props.projects && props.projects.map(project=>{
               return (
                    <Link to={'/project/'+ project.id}>
                        <ProjectSummary project={project} key={project.id} />
                    </Link>
               )
           })}
            
        </div>
    )
}

export default ProjectList