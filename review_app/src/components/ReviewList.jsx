import React from 'react'
import ListItem from './ListItem'

export default function ReviewList({reviews}) {

  return (
    <ul className='mt-4 list-group' >
        {
            reviews.map(review => <ListItem key={review.id} review={review} />)
        }
    </ul>
  )
}
