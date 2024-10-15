import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Criteria from './Criteria';
import PlaylistName from './PlaylistName';
import GoogleUserLogin from './GoogleLogin';

function App() {
  return (
    <Router>
        <div className="App">
            <Header />
            <header className="content">
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path="/criteria">
                        <Criteria />
                    </Route>
                    <Route path="/playlist-name">
                        <PlaylistName />
                    </Route>
                    <Route path="/google-login">
                        <GoogleUserLogin />
                    </Route>
                </Switch>
            </header>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
