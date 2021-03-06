import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Home from './components/index'
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from './components/Resume'
import Portofolio from './components/Portofolio';
import Contact from './components/Contact'

function App() {
  return (
    <> 
      <CssBaseline/>
      <Route exact path='/' component={Home}/>
      <Route path='/resume' component={Resume}/>
      <Route path='/portofolio' component={Portofolio}/>
      <Route path='/contact' component={Contact}/>
    </>
  );
}

export default App;
