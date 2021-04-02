import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/shared/Home';
import Navbar from './components/shared/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import Tacos from './components/tacos/Tacos';




const App = () => (
  <>
  <Navbar/>
  <FetchUser>
    <Container>
      <Switch>
        <Route exact path='/' components={Home} />
        <Protected Routeexact path='/tacos' components={Tacos} />
        <Route exact path='/login' components={Login}/>
        <Route exact path='/register' components={Register}/>
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </FetchUser>


  </>
  
)

export default App;
