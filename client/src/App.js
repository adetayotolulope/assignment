import './App.css';
import Header from './components/Header';
import React from "react";
import Footer from './components/Footer';
import Register from './pages/Register';
import TaskList from './pages/TaskList';
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
            <Route exact path={'/register'} component={Register}/>
            <Route exact path={'/'} component={TaskList}/>
            <Redirect to={'/'} from={'**'}/>
            <Route exact path={'*'}>
              <TaskList/>
            </Route>
          </Switch>
          <h1>Home</h1>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
