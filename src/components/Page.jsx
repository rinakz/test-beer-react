import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBeer } from '../Redux/action'
import { Link } from 'react-router-dom'


function Page() {
  
  const { beer } = useSelector(s => s)

  const dispatch = useDispatch()

  const [page, setpage] = useState(5)
  const [load, setload] = useState(true)

  const [search, setSearch] = useState('')

  useEffect(() => {
    if (load && page <= 80) {
      dispatch(getBeer(page))
      setpage(prev => prev + 5)
      setload(false)
    }
  }, [load])

  useEffect(() => {
    document.addEventListener('scroll', scrollhandler)
    return () => document.removeEventListener('scroll', scrollhandler)
  },[])

  function scrollhandler(e) {
    if((e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight) < 100) {
      setload(true)
    }
  }

  function symbols (el) {
    return el.length > 140 ? (el.slice(0, 140) + ' ...') :  el
  }

  return (
    <div className='pageBeers'>
      <div className='beerSearch'>
        What <span>beer</span> do you want?
        <div className='beerSearchYet'>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='search beer'/>
          <hr></hr>
        </div>
      </div>
    {beer.filter(el => search ? el.name.toLowerCase().includes(search.toLowerCase()) : true).map(el => 
    <div className='beer' key={el.id }>
      <div className='beerImg'>
        <img src={el.image_url}/>
      </div>
      <div className='beerDescr'> 
        <h1>{el.name}</h1>
        <p>{symbols(el.description)}</p>
        <Link to={ `/card/${ el.id }` } className='beerBtn'>to lern more</Link>
      </div>
    </div>
    )}
  </div> 
  )
}

export default Page
