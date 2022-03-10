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
          <h6>{meal.type}</h6>
        </Link>
        <p>{meal.name}</p>
      </li>
    )
  })
  return (
    <>
      <h3>Meals:</h3>
      <ul>
        {renderedMeals}
      </ul>
    </>
  )
}

export default Meals
