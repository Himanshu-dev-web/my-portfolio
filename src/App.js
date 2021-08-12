import React from 'react';
import { BrowserRouter, browserRouter, Route, Switch } from 'react-router-dom';
import home from './components/home';
import about from './components/about';
import post from './components/post';
import project from './components/project';
import singlePost from './components/singlePost';
import NavBAr from './components/navBar';
import Social  from './components/social';
import  './index.css';

function App(){ 
  return(
    <BrowserRouter>
    <Social/>
    <NavBAr/>
      <Switch>
        <Route component={home} path='/' exact/>
        <Route component={about} path='/about'/>

        <Route component={singlePost} path='/post/:slug'/>

        <Route component={project} path='/project'/>

        <Route component={post} path='/post'/>

      </Switch>
    </BrowserRouter>
  )
}

export default App;