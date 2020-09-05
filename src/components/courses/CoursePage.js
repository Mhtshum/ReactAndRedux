import React from 'react';

class CoursePage extends React.Component
{
  state = {
    course : {
      title : ''
    }
  };     
  
  handleChange = e => {
    const course = {...this.state.course, title : e.target.value};    
    this.setState({course}); 
    console.log(this.state.course);
  };
   
  handleSubmit = e => {
    alert(e.target.value);
  };  
  
  render(){
    //onsbumit on form enable enter key also submit while on button only clicking on button
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input type='text' onChange={this.handleChange} text={this.state.course.title} />
        <input type='button' value='Save'/>
      </form>);    
  }
}

export default CoursePage;