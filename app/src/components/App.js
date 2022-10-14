import Banner from './Banner';
import Navbar from './Navbar';
import Apy from './Apy';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/home" exact>
              <Navbar/>
              <Banner/>
            </Route>

            <Route path="/app" exact>
              <Apy/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;