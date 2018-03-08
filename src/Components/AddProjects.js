import React, { Component } from 'react';
import uuid from 'uuid';

class AddProjects extends Component {
  constructor(){
    super();
    this.state={
      newProject:{}
    }
  }
  static defaultProps={
    categories:['Web Design','Web Development','Mobile Development']
  }
  handleSubmit(e){
    if(this.refs.title.value ===''){
      alert('Enter a value');
    }else{
      this.setState({
        newProject:{
        id:uuid.v4(),
        title:  this.refs.title.value,
        category:this.refs.category.value
      }},function(){
        //console.log("submitted");
         this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
}
  render() {
    let categoryOptions=this.props.categories.map(category=>{
      return <option key={category} value={category}>{category}</option>

  });

    return (
      <div>
      <h3>Add Projects</h3>
      <form onSubmit={this.handleSubmit.bind(this)}>
         <label>Title :</label>
         <input type="text" ref="title"/><br/>
         <label>Category :</label>
         <select ref="category">
           {categoryOptions}
         </select>
         <input type="submit" value="submit" />
      </form>

      </div>
    );
  }

 }



export default AddProjects;
