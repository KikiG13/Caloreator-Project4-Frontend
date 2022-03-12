import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { MealEdit } from '../routes/MealEdit'

const MealForm = ({ handleSubmit, meal, handleChange }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Group controlId='meal-type'>
      <Form.Label>Meal Type</Form.Label>
      <Form.Control
        placeholder='Meal Type'
        name='type'
        value={meal.type}
        onChange={event => {
          handleChange(event)
        }}
      />
    </Form.Group>

    <Form.Group controlId='meal-name'>
      <Form.Label>Meal Name</Form.Label>
      <Form.Control
        placeholder='Meal Name'
        name='name'
        value={meal.name}
        onChange={event => handleChange(event)}
      />
    </Form.Group>
    <Form.Group controlId='description'>
      <Form.Label>Meal Description</Form.Label>
      <Form.Control
        placeholder='Meal Description'
        name='description'
        value={meal.description}
        onChange={event => handleChange(event)}
      />
    </Form.Group>

    <Form.Group controlId='photo'>
      <Form.Label>Photo</Form.Label>
      <Form.Control
        placeholder='Photo'
        name='photo'
        value={meal.photo}
        onChange={event => handleChange(event)}
      />
    </Form.Group>

    <Form.Group controlId='calories'>
      <Form.Label>Calories</Form.Label>
      <Form.Control
        placeholder='Calorie Count'
        name='calories'
        value={meal.calories}
        onChange={event => handleChange(event)}
      />
    </Form.Group>

    <Form.Group controlId='fat'>
      <Form.Label>Fat</Form.Label>
      <Form.Control
        placeholder='Fat Count'
        name='fat'
        value={meal.fat}
        onChange={event => handleChange(event)}
      />
    </Form.Group>

    <Form.Group controlId='sugar'>
      <Form.Label>Sugar</Form.Label>
      <Form.Control
        placeholder='Sugar Count'
        name='sugar'
        value={meal.sugar}
        onChange={event => handleChange(event)}
      />
    </Form.Group>

    <Form.Group controlId='protein'>
      <Form.Label>Protein</Form.Label>
      <Form.Control
        placeholder='Protein Count'
        name='protein'
        value={meal.protein}
        onChange={event => handleChange(event)}
      />
    </Form.Group>

    <Form.Group controlId='carbs'>
      <Form.Label>Carbohydrates</Form.Label>
      <Form.Control
        placeholder='Total Carbohydrates'
        name='carbs'
        value={meal.carbs}
        onChange={event => handleChange(event)}
      />
    </Form.Group>

    <Button className='mt-2' variant='primary' type='submit'>Submit</Button>
  </Form>
)

export default MealForm
