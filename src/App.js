import React, {Component} from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox'

class App extends Component {
    constructor(){
        super();
        this.state={robots:robots ,
        searchfield:' '}
    }

   onsearchChange=(event)=>{
      this.setState({searchfield:event.target.value})

   }

render(){
    const filteredrobots = this.state.robots.filter(robots => {return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase() ); });

    return (<div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onsearchChange} />
        <CardList robots={filteredrobots} />
        </div>);
}
}
export default App;