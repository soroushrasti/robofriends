import React, {Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox'
import './App.css'
import Scroll from '../components/Scroll'
import Errorboundry from '../components/Errorboundry'
import {connect} from 'react-redux';
import { requestRobots, setSearchField } from '../actions';

const mapStateProps=state=>{
    return{
        searchField:state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        ispending: state.requestRobots.ispending,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onsearchChange:(event)=>dispatch(setSearchField(event.target.value)),
            onRequestRobots:()=>dispatch(requestRobots())
        
    }
}



class App extends Component {

    componentDidMount(){
      this.props.onRequestRobots();
    }

   onsearchChange=(event)=>{
      this.setState({searchfield:event.target.value})

   }

render(){
    const {searchField, onsearchChange,robots,ispending}=this.props;
    const filteredrobots = 
    robots.filter(robots => {return robots.name.toLowerCase().includes(searchField.toLowerCase() ); });

        return ispending?
        <h1 className='tc'>Loading</h1>
    :(
     <div className='tc'>
        <h1 className='f1' >RoboFriends</h1>
        <SearchBox searchChange={onsearchChange} />
        <Scroll>
            <Errorboundry>
        <CardList robots={filteredrobots} />
        </Errorboundry>
        </Scroll>
        </div>

    );
}
}
export default connect(mapStateProps,mapDispatchToProps)(App);