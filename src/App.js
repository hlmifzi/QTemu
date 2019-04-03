import React, { Component, Fragment } from 'react';
import LayoutMain from './LayoutMain';
import LoginLayout from './LoginLayout';
import MeetupRoutes from './component/MeetUp/MeetupRoutes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';
//css
import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Switch>
              <Route path="/" exact component={LayoutMain} />
              <Route path="/Login" component={LoginLayout} />
              <MeetupRoutes />
              {/* <Route path="/experience" component={Experience} /> */}
            </Switch>
          </Fragment >
        </Router>
      </Provider>
    )
  }
}

export default App;
