import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'

export const Meals = ({ user }) => {
  const [meals, setMeals] = useState([])

  // if (!user) {
  //   return <Navigate to='/' />
  // }

  useEffect(() => {
    return axios.get(`${apiUrl}/meals`, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }) 
    .then(response => {setMeals(response.data.meals)})
    .catch(console.error)
  }, [])

  const renderedMeals = meals.map(meal => {
    return (
      <li key={meal._id}>
        <Link to={`/meals/${meal._id}`}>
        <p>{meal.name}</p>
        </Link>
          <h6>{meal.type}</h6>
      </li>
    )
  })
  return (
    <>
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Meals:</h3>
        <ul>
          {renderedMeals}
        </ul>
      </div>
    </div>
    </>
  )
}

export default Meals
