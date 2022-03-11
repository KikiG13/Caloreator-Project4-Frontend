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
      console.log(res)
      setCreatedId(res.data.meal._id)
      console.log(setCreatedId)
      
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
    // .then(response => {
    //   console.log(response.data)
    //   setShouldNavigate(true)
    // })
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
  
  // if (!user || shouldNavigate) {
  //   return <Navigate to='/meals' />
  // }
  // return (
    // ...
    //       <form
    //         onSubmit={handleSubmit}
  //         action="action_page.php"
  //       >
  // ...
  // )

  // return (
  //   <div className="container">
  //     <form
  //       onSubmit={(event) => { handleSubmit(event, user) }}
  //       action="action_page.php"
  //     >
  //       <div className="row">
  //         <div className="col-25">
  //           <label htmlFor="fname">Title:</label>
  //         </div>
  //         <div className="col-75">
  //           <input
  //             type="text"
  //             name="type"
  //             value={meal.type}
  //             onChange={event => setMeal(event.target.value)}
  //           />
  //         </div>
  //       </div>
  //       <div className="row">
  //         <div className="col-25">
  //           <label htmlFor="author">Author:</label>
  //         </div>
  //         <div className="col-75">
  //           <input
  //             type="text"
  //             name="name"
  //             value={meal.name}
  //             onChange={event => setMeal(event.target.value)}
  //           />
  //         </div>
  //       </div>
  //       <div className="row">
  //         <div className="col-25">
  //           <label htmlFor="img_url">Image Link:</label>
  //         </div>
  //         <div className="col-75">
  //           <input
  //             type="text"
  //             name="photo"
  //             value={meal.photo}
  //             onChange={event => setMeal(event.target.value)}
  //           />
  //         </div>
  //       </div>
  //       <div className="row">
  //         <div className="col-25">
  //           <label htmlFor="subject">Description:</label>
  //         </div>
  //         <div className="col-75">
  //           <textarea
  //             name="description"
  //             style={{ height: '200px' }}
  //             value={meal.description}
  //             onChange={event => setMeal(event.target.value)}
  //           ></textarea>
  //         </div>
  //       </div>

  //       <div className="row">
  //         <input type="submit" value="Submit" />
  //       </div>
  //     </form>
  //   </div>
  // )

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
