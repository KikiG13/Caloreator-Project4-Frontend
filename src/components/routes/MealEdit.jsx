import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import renderedMeals from '../routes/Meals'

export const MealEdit = () => {
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
  const [updated, setUpdated] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    axios.get(`${apiUrl}/books/${id}`)
      .then(response => setMeal(response.data.book))
      .catch(console.error)
  }, [id])

  const handleChange = event => {
    console.log(event.target.name, event.target.value)
    setMeal(prevMeal => {
      return { ...prevMeal, [event.target.name]: event.target.value }
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios.patch(`${apiUrl}/meals/${id}`, { meal })
      .then(() => setUpdated(true))
      .catch(console.error)
  }

  if (updated) return <Navigate to={`/books/${id}`} />

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>{meal.name}</h3>
        <p>{meal.description}</p>
        <p>{meal.photo}</p>
        <p>{meal.calories}</p>
        <p>{meal.fat}</p>
        <p>{meal.sugar}</p>
        <p>{meal.protein}</p>
        <p>{meal.carbs}</p>
        <Link to={`/meals/${id}/edit`}>
            <Button variant='primary' type='submit'>Edit Meal</Button>
        </Link>
      </div>
    </div>

  )
}
