import { Route, Switch, Redirect } from 'react-router-dom'
import Navigation from '../navigation/Navigation';
// import Body from './Home/body/Body';

function Routes() {
    return (
      <>
        <div className="routes">
          <Switch>
            <Route path="/st">
              <Navigation/>
            </Route>
            <Route exact path="/">
              <Redirect to='/st'/>
            </Route>
            <Route>
              <p>404 - Rota não encontrada</p>
            </Route>
          </Switch>
        </div>
      </>
    );
  }
  
export default Routes;  