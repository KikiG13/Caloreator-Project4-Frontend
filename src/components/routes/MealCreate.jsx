import axios from 'axios'
import React, { useState } from 'react'
import apiUrl from '../../apiConfig'
import { Navigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export const MealCreate = ({ user, id }) => {
  // const { handleCreate } = props
  const [meal, setMeal] = useState({
    type: '',
    name: '',
    description: '',
    photo: '',
    calories: '',
    fat: '',
    sugar: '',
    protein: '',
    carbs: ''
  })
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setMeal((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = (event, user) => {
    event.preventDefault()
    // use state to make axios request
    axios.post(apiUrl + '/meals', {
      meal: meal
    }, {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
    .then(response => {
      console.log(response.data)
      setShouldNavigate(true)
    })
    // update state with axios response
  }

  if (!user || shouldNavigate) {
    return <Navigate to='/meals' />
  }
  // return (
  // ...
  //       <form
  //         onSubmit={handleSubmit}
  //         action="action_page.php"
  //       >
  // ...
  // )

  return (
    <div className="container">
      <form
        onSubmit={(event) => { handleSubmit(event, user) }}
        action="action_page.php"
      >
        <div className="row">
          <div className="col-25">
            <label htmlFor="fname">Title:</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="type"
              value={meal.type}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="author">Author:</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="name"
              value={meal.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="img_url">Image Link:</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="photo"
              value={meal.photo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="subject">Description:</label>
          </div>
          <div className="col-75">
            <textarea
              name="description"
              style={{ height: '200px' }}
              value={meal.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <div className="row">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}
