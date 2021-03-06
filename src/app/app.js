import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory, Router } from 'react-router'
import { routes } from './routes';
import { Provider } from 'mobx-react';
import AuthStore from './stores/AuthStore';
import SignupStore from './stores/SignupStore';
import ProfileStore from './stores/ProfileStore';
import Items from './stores/items';

// Needed for onTouchTap, see http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
  <Provider {...{AuthStore, Items, SignupStore, ProfileStore}}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>,
    document.getElementById('app')
);
