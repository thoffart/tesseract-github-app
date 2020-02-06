import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Startup from './components/startup/startup';
import HomePage from './pages/home-page/home-page';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { store } from './store';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import userPage from './pages/home-page/user-page/user-page';

ReactDOM.render(
  <Provider store={store}>
      <Startup>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/users/:id' component={userPage} />
          </Switch>
        </Router>
      </Startup>
    </Provider>,
    document.getElementById("root")
);
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
