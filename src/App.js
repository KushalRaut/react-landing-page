import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import Signin from './pages/signin'
import Signup from './components/Register/Signup'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={Signin} />
        <Route path='/signup' component={Signup} />
      </Switch>
    </Router>
  )
}

export default App
