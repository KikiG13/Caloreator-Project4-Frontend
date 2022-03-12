import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import renderedMeals from '../routes/Meals'
import MealForm from '../shared/MealForm'
import { showMeal, updateMeal } from '../../api/meals'

export const MealEdit = ({ user, msgAlert }) => {
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
    // When using async & await in a `useEffect` function
    // We have to wrap our `async` code in a function:
    // https://stackoverflow.com/a/53572588
    const fetchData = async () => {
      try {
        const res = await showMeal(id, user)
        setMeal(res.data.meal)
      } catch (error) {
        msgAlert({
          heading: 'Failed to load movie',
          message: error.message,
          variant: 'danger'
        })
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await updateMeal(id, meal, user)
      setUpdated(true)
    } catch (error) {
      msgAlert({
        heading: 'Failed to update movie',
        message: error.message,
        variant: 'danger'
      })
    }
  }

  // useEffect(() => {
  //   axios.get(`${apiUrl}/books/${id}`)
  //     .then(response => setMeal(response.data.book))
  //     .catch(console.error)
  // }, [id])

  const handleChange = event => {
    console.log(event.target.name, event.target.value)
    setMeal(prevMeal => {
      return { ...prevMeal, [event.target.name]: event.target.value }
    })
  }

  // const handleSubmit = event => {
  //   event.preventDefault()
  //   axios.patch(`${apiUrl}/meals/${id}`, { meal })
  //     .then(() => setUpdated(true))
  //     .catch(console.error)
  // }

  if (updated) return <Navigate to={`/books/${id}`} />

  return (
    <div className='row'>
      <div className='col-sm-10 col-md-8 mx-auto mt-5'>
        <h3>Update Meal</h3>
        <MealForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          meal={meal}
        />
      </div>
    </div>

  )
}
