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
  }   
  
  /*
  handleChange = (e) => {
    const course = {...this.state.course, title : e.target.value};    
    this.setState({course}); 
    //console.log(this.state.course);
  };
  */
  // below implementation has this context issue which is not enclosing current class instance onChange={this.handleChange.bind(this)}  if bind is removed
  handleChange(e){	  
    const course = {...this.state.course, title : e.target.value};    
    this.setState({course}); 
    console.log(this.state.course);
  }
  
  render(){
    //commented syntax is avoiding us state undefined object error and setting context correctly for current object but it this new fn. will be credated each time for render method
    //<input type='text' onChange={this.handleChange.bind(this)} text={this.
    return (
      <form>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input type='text' onChange={this.handleChange.bind(this)} text={this.state.course.title} />
        <input type='button' value='Save'/>
      </form>);    
  }
}

export default CoursePage;