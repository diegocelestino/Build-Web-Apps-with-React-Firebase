import './Search.css'
import { useLocation } from 'react-router-dom'

import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get("q")

  const url = 'http://localhost:3000/recipes?q=' + query
  const { error, isPending, data } = useFetch(url)

  return (
    <div>
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {isPending && <p className='loading'>Loading...</p>}
      {error && <p className='error'>{ error }</p>}
      {data && <RecipeList recipes={ data }/>}
    </div>
  )
}
