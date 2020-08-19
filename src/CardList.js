import React from 'react';
import Card from './Card'

const CardList=({robots})=> {
  const cardcomponent = robots.map((user,i) => {

       return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} key={i} />
     })
    
     return (<div>{cardcomponent}</div>);
    }
    
  

export default CardList;
