import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Products from 'containers/products';
import Checkout from 'containers/checkout';

const App = () => (
  <div>
    <main>
      <Switch>
      <Route path="/products/:companyId?" component={Products} />
      <Route exact path="/checkout" component={Checkout} />
      <Redirect from="/" to="/products" component={Products} />
      </Switch>
    </main>
  </div>
);

export default App;
