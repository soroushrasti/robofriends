import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import Errorboundry from '../components/Errorboundry'


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
    const {robots,searchfield}=this.state

    const filteredrobots = 
    robots.filter(robots => {return robots.name.toLowerCase().includes(searchfield.toLowerCase() ); });

    if(!robots.length){
        return <h1 className='tc'>Loading</h1>
    }else{
    
    return (<div className='tc'>
        <h1 className='f1' >RoboFriends</h1>
        <SearchBox searchChange={this.onsearchChange} />
        <Scroll>
            <Errorboundry>
        <CardList robots={filteredrobots} />
        </Errorboundry>
        </Scroll>
        </div>);
}}
}
export default App;