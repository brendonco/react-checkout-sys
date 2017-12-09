import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from 'containers/products';

const App = () => (
  <div>
    <main>
      <Switch>
      <Route path="/products/:companyId?" component={Products} />
      <Redirect from="/" to="/products" component={Products} />
      </Switch>
    </main>
  </div>
);

export default App;
