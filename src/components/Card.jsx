import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBeer } from '../Redux/action'



function Card() {

  const {id} = useParams()
  
  const { beer } = useSelector(s => s)

  const dispatch = useDispatch()

  return (
  <div className='cardBeer'>
    {beer.filter(el => el.id == id).map(el => 
    <div className='cardName' key={el.id }>
      <div className='cardDescr'>
        <h1>{el.name}</h1>
        <h2>{el.tagline}</h2>
        <p className='cardDescrP'>{el.description}</p>
        <div className='foodCard'>
          <h3>/ Food Pairing / </h3>
          {el.food_pairing.map(el => <p>{el}</p>)}
        </div>
      </div>
      <div className='cardAbv'><h2>{el.abv}</h2></div>
      <div className='cardImage'>
      <img src={el.image_url}/>
      </div>
      </div>
    )}
  </div> 
  )
}

export default Card
