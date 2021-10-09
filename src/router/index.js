import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "../router/routes";
import Header from "../components/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {Routes.map((route, index) => {
          return (
            <Route
              key={index}
              exact
              path={route.path}
              component={route.component}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
