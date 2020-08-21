import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import searchBox from './searchBox'

const App=()=>{
   return (<div className='tc'>
       <h1>RoboFriends</h1>
       <searchBox />
       <CardList robots={robots} />
   </div>);
}


export default App;