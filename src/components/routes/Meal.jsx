import React, { useState, useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'

import { deleteMeal, showMeal } from '../../api/meals'

const Meal = ({ user, msgAlert }) => {
  const [meal, setMeal] = useState(null)
  const [deleted, setDeleted] = useState(false)
  const { id } = useParams()
  // if user is null, redirect to home page
  // Note: Must check before useEffect, since it needs user
  // if (!user) {
  //   return <Navigate to='/' />
  // }
    
  useEffect(() => {
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await showMeal(id, user)
        setMeal(res.data.meal)
      } catch (error) {
        msgAlert({
          heading: 'Meal failed to load',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleDeleteClick = async () => {
    try {
      await deleteMeal(id, user)
      setDeleted(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to delete meal',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // 3 states:
  // If meal is `null`, we are loading
  if (!meal) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    )
  } else if (deleted) {
    return <Navigate to='/meals' />
  } else {
    // We have a meal, display it!
    return (
      <div className='row'>
        <div className='col-sm-10 col-md-8 mx-auto mt-5'>
          <h3>{meal.name}</h3>
          <p>Meal Type: {meal.type}</p>
          <p>Description: {meal.description}</p>
          <p>Photo: {meal.photo}</p>
          <p>Calories: {meal.calories}</p>
          <p>Fat: {meal.fat}</p>
          <p>Sugar: {meal.sugar}</p>
          <p>Protein: {meal.protein}</p>
          <p>Carbohydrates: {meal.carbs}</p>
          <Button variant='danger' onClick={handleDeleteClick}>Delete Meal</Button>
          <Link to={`/meals/${id}/edit`}>
            <Button variant='primary' type='submit'>Update Meal</Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Meal
