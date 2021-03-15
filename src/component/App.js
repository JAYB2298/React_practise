import Userinput from './userinput/userinput';
//import Useroutput from './useroutput/useroutput';
import './App.css';
import React,{ Component } from 'react';

class App extends Component {
  state={
    person:[
    {id:'dde',username:'Super Max'},
    {id:'dae',username:'Max'},   
  ],
  
  showperson:false
  }
  
  usernamechange=(event)=>{
    this.setState({username:event.target.value});

  }

  togglehandler=()=>{
    let doesShow=this.showperson;
    this.setState({showperson: !doesShow});
    
  }
  
  
  render(){
    
    let person=null;
    
    if (this.state.showperson)
    {person=(
      <div className="App">
       {
         this.state.person.map((person)=>{
       return <Userinput 
       changed={this.usernamechange}
       default={person.username}
       key={person.id}
       />
         })
      }
      </div>
    );}
  return (<div>
       <button 
       onClick={this.togglehandler}>Toggle Button</button>
    {person}
    </div>
  );
}
}

export default App;
