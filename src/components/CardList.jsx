import React from 'react';
import Card from "./Card";


const CardList = ({ robuds }) => {
  const cardsArray = robuds.map((robud, i) => {
    return <Card id={robud.id} name={robud.name} email={robud.email} key={robud.id} />
  });

  return (
    <div>
      {cardsArray}
    </div>
  )
}

export default CardList;