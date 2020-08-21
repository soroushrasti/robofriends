import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import searchBox from './searchBox'

class App extends Component {
    constructor(){
        super();
        this.state={robots:robots ,
        searchfield:''}
    }
   render(){return (<div className='tc'>
       <h1>RoboFriends</h1>
       <searchBox searchChange={this.onsearchChange} />
       <CardList robots={this.state.robots} />
   </div>);
   }
   onsearchChange=(event)=>{
   this.setState({searchfield:event.target.value});
   const filteredrobots = this.state.robots.filter(robots => {return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase()) });

   }
}


export default App;