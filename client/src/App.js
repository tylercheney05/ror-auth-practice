import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/shared/Home';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import NoMatch from './components/shared/NoMatch'


const App = () => (
  <>
  <Navbar/>
  <FetchUser>
    <Container>
      <Switch>
        <Route exact path='/' components={Home} />
        <Route exact path='/login' components={Login}/>
        <Route exact path='/register' components={Register}/>
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </FetchUser>
  </> 
)

export default App;
