import Banner from './Banner';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './Body';
import Footer from './Footer';
import Logout from './Page';
import Submit from './Submit';

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
              <Logout/>
            </Route>
            <Route path="/submit" exact>
              <Submit/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;