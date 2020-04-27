import React from 'react';
import Game from './components/Game';

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1 className="title">
          Memory Game!
        </h1>
      </header>
      
      <div className="card-container grid">
        <Game />
      </div>
    </div>
  )
}
