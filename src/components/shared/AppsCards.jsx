import React from 'react'
import AppsCard from '../features/AppsCard/AppsCard';
import { Link } from 'react-router';

function AppsCards({cards}) {

  return (
    <>
      {
        cards.map(card => (
            <Link key={card.id} to={`/apps/${card.id}`}>
              <AppsCard card={card}></AppsCard>
            </Link>
        ))
      }
    </>
  )
}

export default AppsCards;