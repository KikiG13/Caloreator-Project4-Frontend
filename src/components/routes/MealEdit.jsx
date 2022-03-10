// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
// import { Navigate, useParams } from 'react-router-dom'
// import renderedMeals from '../routes/Meals'

// export const MealEdit = () => {
//   const [meal, setMeal] = useState({
//     type: '',
//     name: '',
//     description: '',
//     photo: '',
//     calories: '',
//     fat: '',
//     sugar: '',
//     protein: '',
//     carbs: ''
//   })
//   const [updated, setUpdated] = useState(false)
//   const { id } = useParams()

//   useEffect(() => {
//     axios.get(`${apiUrl}/books/${id}`)
//       .then(response => setMeal(response.data.book))
//       .catch(console.error)
//   }, [])

//   const handleChange = event => {
//     console.log(event.target.name, event.target.value)
//     setMeal(prevMeal => {
//       return { ...prevMeal, [event.target.name]: event.target.value }
//     })
//   }

//   const handleSubmit = event => {
//     event.preventDefault()
//     axios.patch(`${apiUrl}/meals/${id}`, { meal })
//       .then(() => setUpdated(true))
//       .catch(console.error)
//   }

//   if (updated) return <Navigate to={`/books/${id}`} />

//   return (
//     <>
//       <h3>Meals:</h3>
//       <ul>
//         {renderedMeals}
//       </ul>
//       handleChange={handleChange}
//       handleSubmit={handleSubmit}
//     </>
//   )
// }
