import { BrowserRouter as Router,  Switch, Route} from 'react-router-dom'
import './App.css';
import { Firstpage } from './comp/Firstpage';
import { Personal } from './comp/Personal';
import { Questions } from './comp/Questions'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Firstpage />
        </Route>
        <Route path='/personal_details'>
          <Personal />
        </Route>
        <Route path='/questionare'>
          <Questions />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
