import React from 'react';

class CoursePage extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      course : {
        title : ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }   
  
  handleChange(e){	  
    const course = {...this.state.course, title : e.target.value};    
    this.setState({course}); 
    console.log(this.state.course);
  }
  
  render(){
    return (
      <form>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input type='text' onChange={this.handleChange} text={this.state.course.title} />
        <input type='button' value='Save'/>
      </form>);    
  }
}

export default CoursePage;