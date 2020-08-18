import React from 'react';

const Card=()=> {
  return (
    <div className="bg-light-green dib br3 pa3 grow bw2 shadow-5">
        <img src='https://robohash.org/test?200*200' alt="robots" />
        <div>
            <h2>Jane</h2>
           <p> Jane@gmail.com</p>
        </div>  
    </div>
  );
}

export default Card;
