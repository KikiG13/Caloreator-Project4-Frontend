// import axios from 'axios'
import React, { useState } from 'react'
// import apiUrl from '../../apiConfig'
import { Navigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import { createMeal } from '../../api/meals'
import MealForm from '../shared/MealForm'

export const MealCreate = ({ user, msgAlert }) => {
  // const { handleCreate } = props
  const [meal, setMeal] = useState({
    type: '',
    name: '',
    description: '',
    photo: '',
    calories: 0,
    fat: 0,
    sugar: 0,
    protein: 0,
    carbs: 0
  })
  const [createdId, setCreatedId] = useState(null)
  
  const handleSubmit = async event => {
    event.preventDefault()
  //   // use state to make axios request
  //   axios.post(apiUrl + '/meals', {
  //     meal: meal
  //   }, {
  //     headers: {
  //       Authorization: `Bearer ${user.token}`
  //     }
  //   })
    try {
      const res = await createMeal(meal, user)
      setCreatedId(res.data.meal._id)
      
      msgAlert({
        heading: 'Meal Posted',
        message: `Posted ${meal.name} successfully!`,
        variant: 'success'
      })
      // setShouldNavigate(true)
    } catch (error) {
      msgAlert({
        heading: 'Meal Post Failure',
        message: error.message,
        variant: 'danger'
      })
    }
    // update state with axios response
  }
      // const [shouldNavigate, setShouldNavigate] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setMeal((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  if (!user) {
    return <Navigate to='/' />
  } else if (createdId) {
    // if movie has been created,Navigate to the 'show' page
    return <Navigate to={`/meals/${createdId}`} />
  }

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Post Meal</h3>
        <MealForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          meal={meal}
        />
      </div>
    </div>
  )
}
