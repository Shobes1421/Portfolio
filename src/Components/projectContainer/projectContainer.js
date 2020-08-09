import React from 'react';
import '../projectContainer/style.css'
import ProjectCard from '../projectCard/projectCard';
import ProjectData from '../../Utils/Projects';

function ProjectContainer() {
    const projects = ProjectData

    return (
        <div className='projects'>
            <h2>Projects I've done</h2>
            <div>
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        liveLink={project.liveLink}
                        repoLink={project.repoLink}
                        screenshot={project.screenshot}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProjectContainer;