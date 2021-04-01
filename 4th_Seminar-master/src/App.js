import './App.scss';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import MainHeader from "./components/header/MainHeader";
import Member from './pages/members/Member';

function App() {
  return (
    <Router>
      <div className="App">
        <Route component={MainHeader}/>
        <Switch>
          <Route exact path="/">main page</Route>
          <Route path="/members" component={Member}></Route>
          <Route path="/*">404</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
