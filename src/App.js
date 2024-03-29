/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import Home from '../src/components/routes/Home'
import { MealCreate } from '../src/components/routes/MealCreate'
import { Meals } from '../src/components/routes/Meals'
import { MealEdit } from './components/routes/MealEdit'
import { MealForm } from './components/shared/MealForm'
import Meal from './components/routes/Meal'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    setMsgAlerts(msgAlerts => ([...msgAlerts, { heading, message, variant, id }]))
  }

  return (
    <>
      <Header user={user} />
      {msgAlerts.map(msgAlert => (
        <AutoDismissAlert
          key={msgAlert.id}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
          id={msgAlert.id}
        />
      ))}
      <main className='container'>
        <Routes>
          <Route
            path='/sign-up'
            element={<SignUp msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-in'
            element={<SignIn msgAlert={msgAlert} setUser={setUser} /> }
          />
          <Route
            path='/sign-out'
            element={<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} /> }
          />
          <Route
            path='/change-password'
            element={<ChangePassword msgAlert={msgAlert} user={user} /> }
          />
          <Route path='/'
            element={<Home />} />
          <Route path='/meals' element={<Meals msgAlert={msgAlert} user={user}/> } />
          <Route path='/meals/:id' element={<Meal msgAlert={msgAlert} user={user}/> } />
          <Route path='/meals/create' element={<MealCreate msgAlert={msgAlert} user={user} /> } />
          <Route path='/meals/:id/edit' element={<MealEdit msgAlert={msgAlert} user={user} /> } />
        </Routes>
      </main>
    </>
  )
}

export default App
