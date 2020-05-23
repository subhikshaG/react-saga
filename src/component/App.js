import React, { Component } from 'react';

import { Route, Switch, Router } from 'react-router-dom'
import CatContainer from '../container/CatContainer';
import { createBrowserHistory } from 'history';

class App extends Component {


  customHistory = createBrowserHistory();
  render() {
    return (


      <div>
        <Router history={this.customHistory}>

          <Switch>
            {/* <Route exact path="/cont" render={() => (<div>
              <CatContainer {...this.props} /></div>)} /> */}

            <Route path="/" component={CatContainer} />
          </Switch>
        </Router>


      </div>
    );
  }
}
export default App;