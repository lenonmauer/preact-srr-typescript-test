import { h } from 'preact'
import { Route, Router } from 'preact-router'

import 'src/style/index.css'

import Home from 'src/routes/home'
import Profile from 'src/routes/profile'
import { CounterProvider } from 'src/contexts/counter'

const App = () => {
  return (
    <div id="app">
      <CounterProvider>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/profile/" component={Profile} user="me" />
        </Router>
      </CounterProvider>
    </div>
  )
}
export default App
