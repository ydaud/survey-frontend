import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import { useField } from '../hooks'
import { createUser } from '../reducers/userReducer'

const Signup = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const dates = Array(31).fill().map((x, i) => i + 1)
  const years = Array(moment().year() - 1900).fill().map((x, i) => i + 1901).reverse()

  const { reset: resetFirstName, ...firstName } = useField('text', '')
  const { reset: resetLastName, ...lastName } = useField('text', '')
  const { reset: resetUsername, ...username } = useField('text', '')
  const { reset: resetEmail, ...email } = useField('text', '')
  const { reset: resetPassword, ...password } = useField('password', '')
  const { reset: resetConfirmPassword, ...confirmPassword } = useField('password', '')
  const { reset: resetDate, ...date } = useField('select', dates[0])
  const { reset: resetMonth, ...month } = useField('select', 'Jan')
  const { reset: resetYear, ...year } = useField('select', years[0])

  const handleSignUp = event => {
    event.preventDefault()
    try {
      const newUser = {
        firstName: firstName.value,
        lastName: lastName.value,
        username: username.value,
        email: email.value,
        password: password.value,
        birthDate: date.value + ' ' + month.value + ' ' + year.value,
      }

      resetPassword()
      resetConfirmPassword()

      dispatch(createUser(newUser))
      history.push('/login')
    } catch (e) {
      console.log('Error logging in')
    }

  }

  return (
    <div>
      <h2>sign up page</h2>
      <Form onSubmit={handleSignUp}>
        <Form.Group as={Row} controlId="signUpName">
          <Col sm="3">
            <Form.Control placeholder="First Name" {...firstName} />
          </Col>
          <Col sm="3">
            <Form.Control placeholder="Last Name" {...lastName} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="signUpUsername">
          <Col sm="6">
            <Form.Control placeholder="Username" {...username} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="signUpEmail">
          <Col sm="6">
            <Form.Control placeholder="Email" {...email} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="signUpPassword">
          <Col sm="6">
            <Form.Control placeholder="Password" {...password} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="signUpConfirmPassword">
          <Col sm="6">
            <Form.Control placeholder="Confirm Password" {...confirmPassword} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="signUpDateOfBirth">
          <Form.Group as={Col} controlId="formDate" sm="2">
            <Form.Label>Date</Form.Label>
            <Form.Control as="select" {...date}>
              {dates.map(date => <option key={date}>{date}</option>)}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="signUpMonthOfBirth" sm="2">
            <Form.Label>Month</Form.Label>
            <Form.Control as="select" {...month}>
              {moment.monthsShort().map(month => <option key={month}>{month}</option>)}
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="signUpYearOfBirth" sm="2">
            <Form.Label>Year</Form.Label>
            <Form.Control as="select" {...year}>
              {years.map(year => <option key={year}>{year}</option>)}
            </Form.Control>
          </Form.Group>
        </Form.Group>

        <Row>
          <Col sm="6">
            <Button variant="primary" type="submit" block>
              create account
            </Button>
          </Col>
        </Row>
      </Form>

      <Button variant="link" onClick={() => { history.push('/login') }}>
        Already have an account?
      </Button>
    </div>
  )
}

export default Signup
