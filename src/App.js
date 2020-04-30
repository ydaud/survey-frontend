import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'
import { checkCache } from './reducers/userReducer'
import Login from './components/Login'
import Signup from './components/Signup'
import Menu from './components/Menu'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkCache())
  }, [dispatch])


  return (
    <div>
      <Menu />

      <div className='container'>
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/signup'>
            <Signup />
          </Route>

          <Route path='/'>
            <div className="App">
              Hello World
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
