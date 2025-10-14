import React from 'react'
import AppsCard from '../features/AppsCard/AppsCard';

function AppsCards({cards}) {
  return (
    <>
      {
        cards.map(card => (
            <AppsCard key={card.id} card={card}></AppsCard>
        ))
      }
    </>
  )
}

export default AppsCards;