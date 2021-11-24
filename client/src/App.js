import './App.css';
import Header from './components/Header';
import React from "react";
import Footer from './components/Footer';
import Login from './pages/Login';
import { Switch, Route, Redirect } from 'react-router-dom';
 

function App() {

  return (
    <div>
      <Header/>
      <div className="main-body">
        <div className="container">
          <Switch>
            <Route exact path={'/login'} component={Login}/>
            <Redirect to={'/'} from={'**'}/>
          </Switch>
          <h1>Home</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
