import React from 'react';
import classNames from 'classnames';

function Card(props) {
  const {onClick, selected,
    value, flipping, matched, 
  } = props;

  function click(e) {
    if (!selected && !matched && !flipping) {
      onClick();
    }
  }

  const classes = classNames({
    card: true,
    theme: true,
    selected,
    flipping,
    matched,
  })

  let render = (<p>{value}</p>);

  if( value.lastIndexOf(".") !== -1) {
    render = (<img src={`/images/${value}`}></img>)
  }

  return (
    <div onClick={click} className={classes}>
      <div className="back"></div>
      <div className="front">
        {render}
      </div>
    </div>
  )
}

export default Card;