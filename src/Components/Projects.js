import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {
   deleteProject(id){
     this.props.onDelete(id);
   }
  render() {
    let ProjectItems;
    if(this.props.list){
      ProjectItems=this.props.list.map(project =>{
      //console.log(project))
      return(
        <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>
      );
    });
  }
    return (
      <div className="Projects">
         {ProjectItems}
      </div>
    );

  }
 }
/*Projects.PropTypes={
  list:React.PropTypes.array,
  onDelete:React.PropTypes.func
}*/


export default Projects;
