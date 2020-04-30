import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useField } from '../hooks'
import { signIn } from '../reducers/userReducer'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const { reset: resetUsername, ...username } = useField('text', '')
  const { reset: resetPassword, ...password } = useField('password', '')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const tmpUser = {
        username: username.value,
        password: password.value,
      }

      resetUsername()
      resetPassword()

      await dispatch(signIn(tmpUser))
      history.push('/')
    } catch (e) {
      console.log('Error logging in')
    }
  }

  return (
    <div>
      <h2>login page</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group as={Row} controlId="loginEmail">
          <Col sm="6">
            <Form.Control placeholder="Username/Email" {...username} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="loginPassword">
          <Col sm="6">
            <Form.Control placeholder="Password" {...password} />
          </Col>
        </Form.Group>

        <Row>
          <Col sm="6">
            <Button variant="primary" type="submit" block>
              log in
            </Button>
          </Col>
        </Row>
      </Form>
      <Button variant="link" onClick={() => { history.push('/signup') }}>
        Create an account!
      </Button>
    </div>
  )
}

export default Login
