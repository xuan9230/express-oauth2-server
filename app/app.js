import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import AuthDialog from './AuthDialog';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/oauth2/authorize" component={AuthDialog} />
    </div>
  </Router>
)
export default App
