import React from 'react';

import './style.css';
const HeroCard = (props) => {
  return (
    <div className='hero-card'>
      <h3 className='hero-name'> {props.name} </h3>
      <img className='hero-img' src={props.image} alt={props.name} />

      <ul>
        <li className='attribute'>
          Intelligence:
          <button
            onClick={() => props.handleStatCheck(props.stats.intelligence)}
          >
            {props.stats.intelligence == 'null'
              ? 'N/A'
              : props.stats.intelligence}
          </button>
        </li>
        <li className='attribute'>
          Strength:
          <button onClick={() => props.handleStatCheck(props.stats.strength)}>
            {props.stats.strength == 'null' ? 'N/A' : props.stats.strength}
          </button>
        </li>
        <li className='attribute'>
          Speed:
          <button onClick={() => props.handleStatCheck(props.stats.speed)}>
            {props.stats.speed == 'null' ? 'N/A' : props.stats.speed}
          </button>
        </li>
        <li className='attribute'>
          Durability:
          <button onClick={() => props.handleStatCheck(props.stats.durability)}>
            {props.stats.durability == 'null' ? 'N/A' : props.stats.durability}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default HeroCard;
