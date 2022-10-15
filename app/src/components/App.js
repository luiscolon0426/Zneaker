import Banner from './Banner';
import Navbar from './Navbar';
import Apy from './Apy';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './Body';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/home" exact>
              <Navbar/>
              <Banner/>
              <Body/>
              <Footer/>
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