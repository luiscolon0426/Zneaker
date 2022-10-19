import Banner from './Banner';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './Body';
import Footer from './Footer';
import Page from './Page';
import Submit from './Submit';
import Altnav from './Altnav';

function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route path="/" exact>
              <Navbar/>
              <Banner/>
              <Body/>
              <Footer/>
            </Route>

            <Route path="/app" exact>
              <Altnav/>
              <Page/>
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