import apiUrl from '../apiConfig'
import axios from 'axios'


// export const indexMovies = (user) => {
//   return axios.get(apiUrl + '/movies/',
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`
//       }
//     }
//   )
// }

export const showMeal = (id, user) => {
  return axios.get(`${apiUrl}/meals/${id}/`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteMeal = (id, user) => {
  return axios.delete(`${apiUrl}/meals/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// export const updateMovie = (id, title, director, user) => {
//   return axios.patch(
//     `${apiUrl}/movies/${id}`,
//     { movie: { title, director } },
//     {
//       headers: {
//         Authorization: `Bearer ${user.token}`
//       }
//     }
//   )
// }

export const createMeal = (meal, user) => {
  console.log(createMeal)
  return axios.post(
    `${apiUrl}/meals`,
    { meal },
    {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }
  )
}
