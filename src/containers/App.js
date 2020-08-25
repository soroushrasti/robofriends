import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'

class App extends Component {
    constructor(){
        super();
        this.state={robots:[] ,
        searchfield:' '}
    }

    componentDidMount(){
       // this.setState({robots:robots})
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=> response.json())
       .then(users=> {this.setState({robots:users})});
    }

   onsearchChange=(event)=>{
      this.setState({searchfield:event.target.value})

   }

render(){
    const filteredrobots = this.state.robots.filter(robots => {return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase() ); });

    if(this.state.robots.length===0){
        return <h1 className='tc'>Loading</h1>
    }else{
    
    return (<div className='tc'>
        <h1 className='f1' >RoboFriends</h1>
        <SearchBox searchChange={this.onsearchChange} />
        <Scroll>
        <CardList robots={filteredrobots} />
        </Scroll>
        </div>);
}}
}
export default App;