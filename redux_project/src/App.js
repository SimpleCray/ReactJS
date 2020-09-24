import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header';
import NotFound from './components/notFound';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header/>
          {/* TODO: Remove after testing */}
          <ul>
            <li><Link to="/photo">Go to photo page</Link></li>
            <li><Link to="/photo/add">Go to Add new poto page</Link></li>
            <li><Link to="/photo/123">Go to Edit photo page</Link></li>
          </ul>

          <Switch>
            <Redirect exact from="/" to="/photo" />

            <Route path="/photo" component={Photo} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;